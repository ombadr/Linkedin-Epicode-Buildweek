import { useState, useEffect } from 'react';
import { Card, ListGroup, Button, Modal } from 'react-bootstrap';
import { MdWork } from 'react-icons/md';
import { TbTargetArrow } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import {
  getJobsByCategoryAction,
  performSearchAction,
  getJobsFromSearchAction,
} from '../../redux/actions';
import { Link } from 'react-router-dom';

const JobsCard = ({ title, category }) => {
  const dispatch = useDispatch();
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getJobsByCategoryAction(category));
  }, [dispatch, category]);

  const jobs = useSelector(
    (state) => state.jobs.jobsByCategory[category]?.data || []
  );

  const handleClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const searchAllJobs = () => {
    dispatch(performSearchAction());
    dispatch(getJobsFromSearchAction(category));
    window.scrollTo(0, 0);
  };

  const jobItems =
    jobs.length > 0 ? (
      <>
        {jobs.map((job, idx) => (
          <ListGroup.Item
            key={idx}
            className='d-flex align-items-start'
            onClick={() => handleClick(job)}
            style={{ cursor: 'pointer' }}
          >
            <MdWork size={48} className='me-3 align-self-center' />
            <div className='flex-grow-1'>
              <div className='fw-bold text-primary fs-5'>{job.title}</div>
              <p className='m-0'>{job.company_name}</p>
              <p className='text-secondary m-0'>
                {job.candidate_required_location} ({job.job_type})
              </p>
              <div>
                <p className='m-0'>
                  <TbTargetArrow size={20} />
                  {job.match}
                </p>
              </div>
              <div>
                <p>{job.status}</p>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </>
    ) : (
      <ListGroup.Item>No jobs available</ListGroup.Item>
    );

  return (
    <>
      <Card className='my-4'>
        <Card.Header className='bg-white border-0'>
          <h2 className='fs-4 mt-3'>{title}</h2>
          <p>Based on your profile and search history</p>
        </Card.Header>
        <ListGroup variant='flush'>{jobItems}</ListGroup>
        <Card.Footer className='text-center' onClick={() => searchAllJobs()}>
          <Button variant='link' className='fw-bold text-decoration-none fs-5'>
            Show all
          </Button>
        </Card.Footer>
      </Card>

      <Modal show={showModal} onHide={closeModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{selectedJob?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Company: {selectedJob?.company_name}</h2>
          <Link to={selectedJob?.url} target='_blank' rel='noreferrer'>
            <Button variant='dark' className='my-4'>
              Visit Company Website
            </Button>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: selectedJob?.description }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JobsCard;
