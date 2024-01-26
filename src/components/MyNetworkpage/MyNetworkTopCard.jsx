import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FetchProfiles } from '../Fetchprofilo';

const MyNetworkTopCard = () => {
  const profilesId = [
    '65ae3141600be100183a868b', // Mattia
    '65ae7790600be100183a86c8', // Vincenzo
    '65af9a37bd5d12001890d45c', // Giuseppe
    '65ae3259600be100183a868c', // Omar
    '65af8844bd5d12001890d420', // Salvatore
    "6574399afe031e0019ba1da9" //Davide
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
