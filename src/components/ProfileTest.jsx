import { FaCheck } from "react-icons/fa6";

import { Row, Col, Button } from "react-bootstrap";
import Fetchprofilo from "./Fetchprofilo";
import { FaCamera } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";

const ProfileTest = () => {
  const profilo = Fetchprofilo().profile;

  return (
    <>
      <div className="border rounded bg-white mt-3">
        <div
          className="justify-content-start p-3 position-relative"
          style={{
            backgroundImage:
              "url('https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq')",
            height: "300px",
          }}
        >
          <img
            className=" margincustom  mb-4 rounded-circle position-absolute"
            width={140}
            height={140}
            style={{ top: "80px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_E3A49FZOkL-qH5Rx1euJlZSKguQpz0xZ1XXfhpdgolHtuwBTp6tpGyVETvoofYPfAo&usqp=CAU"
            alt=""
            srcset=""
          />
          <div
            className="position-absolute bg-white p-2 rounded-circle text-primary"
            style={{ right: "30px" }}
          >
            <FaCamera size={24} />
          </div>
        </div>

        <div className="d-flex pt-5">
          <div className="d-flex flex-row px-3 col-8">
            <Row className="col-12">
              <Col>
                <h3>Giampiero Spampagnati</h3>
                <p>Studente presso l'albero azzurro</p>
                <p>
                  città,regione,nazione -{" "}
                  <span>
                    <a href="#">Informazioni di contatto</a>{" "}
                  </span>
                </p>

                <p className="text-primary m-0"> 38 collegamenti</p>

                <div>
                  <Button variant="primary" className="rounded-pill">
                    {" "}
                    Disponibile per
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="rounded-pill m-1"
                  >
                    {" "}
                    Aggiungi sezione del profilo
                  </Button>
                  <Button variant="outline-secondary" className="rounded-pill">
                    {" "}
                    Altro
                  </Button>
                </div>

                <div
                  className="rounded my-3"
                  style={{ backgroundColor: "#DDE7F1" }}
                >
                  <div className="d-flex justify-content-between ">
                    <h2> Disponibile a lavorare</h2>
                    <div className="d-flex align-items-center">
                      <LuPencil className="text-secondary" size={24} />
                    </div>
                  </div>

                  <p>Ruoli di webDeveloper</p>
                  <a href="#">Mostra dettagli</a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="d-flex flex-column px-3">
            <Row className="pe-2">
              <div className="d-flex align-items-center mx-3 p-3">
                <div>
                  <img
                    src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                    width={48}
                  />
                </div>
                <div>
                  <a href="#" className="m-0">Epicode!</a>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTest;
