import { useState } from "react";
import { fetchImg } from "./fetchImg";
import {Form , Modal, Button} from "react-bootstrap";

const Modale = (props) => {
  const PostImgExp = `profile/65ae3141600be100183a868b/experiences/${props.expid}/picture`;

  const [image, setImage] = useState({
    image : ""
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setImage({
        image : file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetchImg(PostImgExp, image);
  };

  return (
    <>
      {/* <Modal show={isModalOpen1} onHide={handleCloseModal1}> */}
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Esperienze</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form >
            <Form.Label>Scegli una immagine:</Form.Label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button onClick={handleSubmit}>Upload</button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modale;
