import { FiPlus } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";

import { Row } from "react-bootstrap";

import { useEffect, useState } from "react";

import { Modal, Button } from "react-bootstrap";
import ExperienceForm from "./ExperienceForm";
import { RxCross1 } from "react-icons/rx";

const Experiences = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [modify, setModify] = useState(false);

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  let id = "6574399afe031e0019ba1da9";

  const getExperiences = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0Mzk5YWZlMDMxZTAwMTliYTFkYTkiLCJpYXQiOjE3MDYwMDEyNzgsImV4cCI6MTcwNzIxMDg3OH0.YrtPpqEJRO5hxwFLZvfS8JL7SDepjzPf-LbDUAOTJok",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        throw new Error("Error nel recupero Experiences");
      }
    } catch (error) {
      console.error("Error during getExperiences:", error.message);
    }
  };

  useEffect(() => {
    getExperiences();
  }, []);

  const getDate = (date) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();

    return `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
  };



  const deleteExperience = async (idExperience) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${idExperience}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0Mzk5YWZlMDMxZTAwMTliYTFkYTkiLCJpYXQiOjE3MDYwMDEyNzgsImV4cCI6MTcwNzIxMDg3OH0.YrtPpqEJRO5hxwFLZvfS8JL7SDepjzPf-LbDUAOTJok",
          },
        }
      );
  
      if (response.ok) {
        console.log("Experience deleted successfully");
      } else {
        console.error("Error deleting experience");
      }
    } catch (error) {
      console.error("Error in deleteExperience:", error.message);
    }

    getExperiences()
  };

  return (
    <>
      <div className="border rounded my-2 bg-white">
        <Row className="justify-content-between p-3 ">
          <div className="d-flex justify-content-between ">
            <h2 className="m-0">Esperienza</h2>

            <div className="d-flex">
              <Button
                variant="light"
                className="d-flex align-items-center rounded-circle"
                onClick={(e) => {
                  e.preventDefault();
                  handleShowModal();
                }}
              >
                <FiPlus size={24} />
              </Button>
              <Button
                variant="light"
                className="d-flex align-items-center rounded-circle"
                onClick={() => setModify(!modify)}
              >
                <LuPencil className="text-secondary " size={24} />
              </Button>
            </div>
          </div>
        </Row>

        {data.map((experience, index) => (
          <div key={index} className="d-flex p-3 mx-3">
            <div>
              <img
                src={
                  experience.image
                    ? experience.image
                    : "https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                }
                width={48}
                alt="Alt Text"
              />
            </div>
            <div>
              <h4 className="m-0">{experience.company}</h4>
              <p className="m-0 text-secondary">{experience.role}</p>
              <p className="m-0 text-secondary">
                {getDate(experience.startDate)} - {getDate(experience.endDate)}
              </p>
            </div>
            {modify && (
                <>
                 <Button
                variant="light"
                className="d-flex align-items-center rounded-circle"
              >
                <LuPencil className="text-secondary " size={24} />
                
              </Button>
                <Button
                variant="light"
                className="d-flex align-items-center rounded-circle"
                onClick={() => deleteExperience(experience._id)}
              >
                <RxCross1 className="text-danger" size={24} />
              </Button>
                </>
            )}
          </div>
        ))}

        <Modal show={isModalOpen} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi Esperienze</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ExperienceForm id={id} getExperiences={getExperiences}/>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                handleCloseModal();
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Experiences;
