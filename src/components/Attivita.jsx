import { IoMdPeople } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { GiRadarDish } from "react-icons/gi";
import { LuPencil } from "react-icons/lu";

import { Row, Col, Button } from "react-bootstrap";

const Attivita = () => {
  return (
    <>
      <div className="border rounded my-2 bg-white">
        <Row className="justify-content-between p-3 ">
          <div className="d-flex justify-content-between ">
            <div>
              <h2 className="m-0">Attività</h2>
              <p className="text-primary m-0"> 42 follower</p>
            </div>

            <div className="d-flex">
              <div className="me-5 d-flex align-items-center">
                <Button variant="outline-primary">Crea un post</Button>
              </div>
              <div className="d-flex align-items-center">
                <LuPencil className="text-secondary" size={24} />
              </div>
            </div>
          </div>
        </Row>

        <div className="d-flex flex-column">
          <div className="me-3 ">
            <div className="d-flex flex-row px-3">
              <div>
                <h3>Non hai ancora pubblicato nulla!</h3>
                <p>I post che condividi appariranno qui!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center border-top" >
                <Button variant="light" className=" w-100 text-secondary"> Mostra tutte le Attività <span><FaArrowRight/></span></Button>
            </div>
      </div>
    </>
  );
};

export default Attivita;
