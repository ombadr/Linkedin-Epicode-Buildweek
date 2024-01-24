import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function Infoprofilo(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Info Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.modifica===true?(
            <>
            <div className='d-flex'>
                <p>Nome:</p>
                <input type="text" value={props.profilo.name} name="" id="" />
            </div>
            <div className='d-flex'>
                <p>Cognome:</p>
                <input type="text" value={props.profilo.surname} name="" id="" />
            </div>
            <div className='d-flex'>
                <p>Email:</p>
                <input type="text" value={props.profilo.email} name="" id="" />
            </div>
            <div className='d-flex'>
                <p>Bio:</p>
                <input type="text" value={props.profilo.bio} name="" id="" />
            </div>
            <div className='d-flex'>
                <p>Città:</p>
                <input type="text" value={props.profilo.area} name="" id="" />
            </div>
            </>):
            (
            <>
                <p>Nome:{props.profilo.name}</p>
                <p>Cognome:{props.profilo.surname}</p>
                <p>Email:{props.profilo.email}</p>
                <p>Bio:{props.profilo.bio}</p>
                <p>Città:{props.profilo.area}</p>
            </>
            )}
        </Modal.Body>
        <Modal.Footer>
        {props.modifica==true && <Button variant="primary" onClick={props.handleClose}>
            Salva Modifiche
          </Button>}
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
