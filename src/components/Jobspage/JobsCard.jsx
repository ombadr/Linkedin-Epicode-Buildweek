import { useState, useEffect } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { MdWork } from 'react-icons/md';
import { TbTargetArrow } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsByCategoryAction } from '../../redux/actions';

const JobsCard = ({ title, category }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsByCategoryAction(category));
  }, [dispatch, category]);

  const jobs = useSelector(
    (state) => state.jobs.jobsByCategory[category]?.data || []
  );

  console.log('from jobs card', jobs);

  const jobItems =
    jobs.length > 0 ? (
      <>
        {jobs.map((job, idx) => (
          <ListGroup.Item key={idx} className='d-flex align-items-start'>
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
            <Button
              variant='outline-secondary'
              className='border-0 rounded-circle d-flex justify-content-center align-items-center ms-2'
              style={{
                width: '50px',
                height: '50px',
                fontSize: '30px',
                lineHeight: '1',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'start',
              }}
            >
              ✕
            </Button>
          </ListGroup.Item>
        ))}
      </>
    ) : (
      <ListGroup.Item>No jobs available</ListGroup.Item>
    );

  return (
    <Card className='my-4'>
      <Card.Header className='bg-white border-0'>
        <h2 className='fs-4 mt-3'>{title}</h2>
        <p>Based on your profile and search history</p>
      </Card.Header>
      <ListGroup variant='flush'>{jobItems}</ListGroup>
      <Card.Footer className='text-center'>
        <Button variant='link' className='fw-bold text-decoration-none fs-5'>
          Show all
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default JobsCard;
