import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const RecentJobSearches = () => {
  const [showFullList, setShowFullList] = useState(false);

  const searches = useSelector((state) => state.search);

  const jobSearches = [
    { title: 'node js', count: 290, location: 'Italy' },
    { title: 'google', count: 0, location: 'Milan, Lombardy, Italy' },
    { title: 'english developer', count: 1677, location: 'Germany' },
    { title: 'english', count: 22755, location: 'Germany' },
    { title: 'maintenance engineer', count: 210, location: 'Italy' },
    { title: 'junior front end', count: 3, location: 'Italy' },
  ];

  const toggleShowFullList = () => {
    setShowFullList(!showFullList);
  };

  console.log('searches', searches);

  const reversedSearches = [...searches.recentSearches].reverse();

  return (
    <Card>
      <Card.Header className='bg-white border-0'>
        <div className='d-flex justify-content-between align-items-center mt-3'>
          <h2 className='fs-4'>Recent Job Searches</h2>
          <p className='m-0 fw-bold text-secondary'>Clear</p>
        </div>
      </Card.Header>
      <Card.Body>
        {reversedSearches
          .slice(0, showFullList ? jobSearches.length : 3)
          .map((search, index) => (
            <div key={index}>
              <p className='m-0 fw-bold text-dark'>
                {search.search} - {search.jobs} new
              </p>
              <p className='m-0 fw-bold text-secondary '>Italy</p>
              <hr />
            </div>
          ))}
      </Card.Body>
      <Card.Footer className='text-center'>
        <Button
          variant='link'
          onClick={toggleShowFullList}
          className='fw-bold text-decoration-none fs-5'
        >
          {showFullList ? 'Show less' : 'Show more'}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default RecentJobSearches;
