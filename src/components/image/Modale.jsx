import { useState } from 'react';
import { fetchImg } from './fetchImg';
import { Form, Modal, Button } from 'react-bootstrap';

const Modale = (props) => {
  let PostImgExp;

  switch (props.formdata) {
    case 'experience':
      PostImgExp = `profile/65ae3141600be100183a868b/experiences/${props.expid}/picture`;
      break;
    case 'profile':
      PostImgExp = `profile/${props.expid}/picture`;
      break;
    case 'post':
      PostImgExp = `posts/${props.expid}`;
      break;
    default:
      // Handle default case if necessary
      break;
  }

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(props.formdata, selectedImage);
    console.log(selectedImage);
    await fetchImg(PostImgExp, formData);
  };

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Esperienze</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Label>Scegli una immagine:</Form.Label>
            <input
              type='file'
              id='image'
              accept='image/*'
              onChange={handleImageChange}
            />
            <button onClick={handleSubmit}>Upload</button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modale;
