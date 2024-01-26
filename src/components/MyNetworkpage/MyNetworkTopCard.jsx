import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FetchProfiles } from '../Fetchprofilo';

const MyNetworkTopCard = () => {
  const profilesId = [
    '653f5b02b397340014d5e7fa',
    '6551cb68c55e7e0018f83bd2',
    '6551db85c55e7e0018f83bec',
    '6551dca0c55e7e0018f83bed',
    '6551e7bbc55e7e0018f83bfb',
  ];

  const [profiles, setProfiles] = useState([]);

  const profileData = async () => {
    try {
      let allProfiles = [];
      for (let id of profilesId) {
        const profile = await FetchProfiles(id);
        allProfiles.push(profile);
      }
      setProfiles(allProfiles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  const cardItems = () => {
    return profiles.map((profile, idx) => (
      <ListGroup.Item
        key={idx}
        className='d-flex align-items-center'
        style={{ cursor: 'pointer' }}
      >
        <img
          src={profile.image}
          height='70px'
          width='70px'
          className='rounded-circle me-3'
          alt='Profile'
        />

        <div className='flex-grow-1'>
          <div className='fw-bold text-primary fs-5'>
            <h3 className='fs-4'>{profile.name}</h3>
          </div>
          <p className='m-0 p-0'>{profile.title}</p>
        </div>
      </ListGroup.Item>
    ));
  };

  return <ListGroup variant='flush'>{cardItems()}</ListGroup>;
};

export default MyNetworkTopCard;
