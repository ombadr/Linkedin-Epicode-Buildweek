import { FiPlus } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { Row} from "react-bootstrap";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ExperienceForm from "./ExperienceForm";
import { RxCross1 } from "react-icons/rx";
import ExperienceFormModifica from "./ExperienceFormModifica";
import { useParams } from "react-router-dom";
import { Fetchprofilo } from "../Fetchprofilo";
import Modale from "../image/Modale";
import { CiImageOn } from "react-icons/ci";




const Experiences = () => {
  const profilopersonale = Fetchprofilo().profile
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params=useParams().id
  
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [data, setData] = useState([]);
  const [modify, setModify] = useState(false);
  const [elemento, setElemento] = useState(null)
  const [elemento1, setElemento1] = useState(null)

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  

  const handleShowModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };


  const handleShowModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };



  

  const getExperiences = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${params}/experiences`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzE0MTYwMGJlMTAwMTgzYTg2OGIiLCJpYXQiOjE3MDU5MTQ2ODksImV4cCI6MTcwNzEyNDI4OX0.4wuc8BPQtnbrrjR2fr4os_GS-UinPRJDLkLLihyMLtE",
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
  }, [params]);

  const getDate = (date) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();

    let dataCompleta = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`

    

    return  dataCompleta; 
  };



  const deleteExperience = async (idExperience) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${params}/experiences/${idExperience}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzE0MTYwMGJlMTAwMTgzYTg2OGIiLCJpYXQiOjE3MDU5MTQ2ODksImV4cCI6MTcwNzEyNDI4OX0.4wuc8BPQtnbrrjR2fr4os_GS-UinPRJDLkLLihyMLtE",
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

            {profilopersonale._id===params && <div className="d-flex">
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
            </div>}
          </div>
        </Row>

        {data.map((experience, index) => (
          <div key={index} className="d-flex justify-content-between  p-3 mx-3">
            <div className="d-flex">
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
                {getDate(experience.startDate)} - {getDate(experience.endDate) === "1970-01-01" ? ("Ad oggi") : (getDate(experience.endDate)) }
              </p>
            </div>
            </div>

            


            <div className="d-flex align-items-center">
            {modify && (
                <>
                <Button
                variant="light"
                className="d-flex align-items-center rounded-circle"
                onClick={()=> (setElemento(experience), handleShowModal1(!isModalOpen1))}
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


                <Button
                variant="light"
                className="d-flex align-items-center rounded-circle"
                onClick={() => (setElemento1(experience._id), handleShowModal2(!isModalOpen2))}
              >
                <CiImageOn size= {24}/>
              </Button>
                </>
            )}
            </div>
          </div>
        ))}

        <Modal show={isModalOpen} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi Esperienze</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ExperienceForm id={params} getExperiences={getExperiences} getDate={getDate}/>            
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


        {isModalOpen2===true && <Modale show={isModalOpen2} onHide={handleCloseModal2}  expid={elemento1} /> }
        


        <Modal show={isModalOpen1} onHide={handleCloseModal1}>
          <Modal.Header closeButton>
            <Modal.Title>Modifica Esperienze</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <ExperienceFormModifica id={params} experience={elemento} getExperiences={getExperiences} chiudi={handleCloseModal1}/>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                handleCloseModal1();
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