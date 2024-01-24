import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, ListGroup, Button, Modal } from 'react-bootstrap';
import { MdWork } from 'react-icons/md';
import { TbTargetArrow } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const itemsPerPage = 5;

const JobsSearchResult = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const data = useSelector((state) => state.results.results[0]?.data);

  console.log('JobsSearchResult: ', data);

  const pageCount = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data ? data.slice(startIndex, startIndex + itemsPerPage) : [];
  };

  const handleClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const renderPaginationControls = () => {
    return (
      <div>
        <Button
          className='rounded-1 mx-2'
          variant='dark'
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          Go To First Page
        </Button>
        <Button
          className='rounded-1 mx-2'
          variant='dark'
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {pageCount}
        </span>
        <Button
          className='rounded-1 mx-2'
          variant='dark'
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          Next
        </Button>
        <Button
          className='rounded-1 mx-2'
          variant='dark'
          onClick={() => setCurrentPage(pageCount)}
          disabled={currentPage === pageCount}
        >
          Go To Last Page
        </Button>
      </div>
    );
  };

  const jobItems = data ? (
    <>
      {getCurrentPageData().map((job, idx) => (
        <ListGroup.Item
          key={idx}
          className='d-flex align-items-start'
          style={{ cursor: 'pointer' }}
          onClick={() => handleClick(job)}
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

  if (!data) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <Card className='mb-4'>
        <Card.Header className='bg-white border-0'>
          <h2 className='fs-4 mt-3'>Search results</h2>
        </Card.Header>
        <ListGroup variant='flush'>{jobItems}</ListGroup>
        <Card.Footer className='text-center'>
          <Button variant='link' className='fw-bold text-decoration-none fs-5'>
            {data.length} total results
          </Button>
        </Card.Footer>
      </Card>
      <div>
        <div>{renderPaginationControls()}</div>
      </div>

      <Modal show={showModal} onHide={closeModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{selectedJob?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render job details here */}
          <h2>Company: {selectedJob?.company_name}</h2>
          <Link to={selectedJob?.url} target='_blank' rel='noreferrer'>
            <Button variant='dark' className='my-4'>
              Visit Company Website
            </Button>
          </Link>

          <div dangerouslySetInnerHTML={{ __html: selectedJob?.description }} />

          {/* Add more details as needed */}
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

export default JobsSearchResult;
