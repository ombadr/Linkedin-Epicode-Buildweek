import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { fetchputProfilo } from '../Fetchprofilo';

export function Infoprofilo(props) {
  const [modifiedValues, setModifiedValues] = useState({
    name: props.profilo.name,
    surname: props.profilo.surname,
    email: props.profilo.email,
    username: props.profilo.username,
    bio: props.profilo.bio,
    title: props.profilo.title,
    area: props.profilo.area,
    image: props.profilo.image,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModifiedValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSaveChanges = async () => {
    props.handleClose();
    fetchputProfilo(modifiedValues);
    props.handleRedo();
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Info Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.modifica === true ? (
            <>
              <div className='d-flex'>
                <p>Nome:</p>
                <input
                  type='text'
                  value={modifiedValues.name}
                  name='name'
                  id=''
                  onChange={handleInputChange}
                />
              </div>
              <div className='d-flex'>
                <p>Cognome:</p>
                <input
                  type='text'
                  value={modifiedValues.surname}
                  name='surname'
                  id=''
                  onChange={handleInputChange}
                />
              </div>
              <div className='d-flex'>
                <p>Email:</p>
                <input
                  type='text'
                  value={modifiedValues.email}
                  name='email'
                  id=''
                  onChange={handleInputChange}
                />
              </div>
              <div className='d-flex'>
                <p>Username:</p>
                <input
                  type='text'
                  value={modifiedValues.username}
                  name='username'
                  id=''
                  onChange={handleInputChange}
                />
              </div>
              <div className='d-flex'>
                <p>Bio:</p>
                <input
                  type='text'
                  value={modifiedValues.bio}
                  name='bio'
                  id=''
                  onChange={handleInputChange}
                />
              </div>
              <div className='d-flex'>
                <p>Title:</p>
                <input
                  type='text'
                  value={modifiedValues.title}
                  name='title'
                  id=''
                  onChange={handleInputChange}
                />
              </div>
              <div className='d-flex'>
                <p>Area:</p>
                <input
                  type='text'
                  value={modifiedValues.area}
                  name='area'
                  id=''
                  onChange={handleInputChange}
                />
              </div>
              <div className='d-flex'>
                <p>Image:</p>
                <input
                  type='text'
                  value={modifiedValues.image}
                  name='image'
                  id=''
                  onChange={handleInputChange}
                />
              </div>
            </>
          ) : (
            <>
              <p>Nome:{props.profilo.name}</p>
              <p>Cognome:{props.profilo.surname}</p>
              <p>Email:{props.profilo.email}</p>
              <p>Username:{props.profilo.username}</p>
              <p>Bio:{props.profilo.bio}</p>
              <p>Title:{props.profilo.title}</p>
              <p>Area:{props.profilo.area}</p>
              <p>Image:{props.profilo.image}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {props.modifica === true && (
            <Button variant='primary' onClick={handleSaveChanges}>
              Salva Modifiche
            </Button>
          )}
          <Button variant='secondary' onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
