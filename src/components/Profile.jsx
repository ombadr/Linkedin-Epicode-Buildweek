import { Col, Container, Row,Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool,faCamera,faPencil } from "@fortawesome/free-solid-svg-icons";
import Fetchprofilo from "./Fetchprofilo";
import { GoPencil } from "react-icons/go";
import { PiStudent } from "react-icons/pi";
import { FaCamera } from "react-icons/fa";
import "./Profile.css"
const mioid = "65ae3141600be100183a868b"






function Profile() {
    const profilo = Fetchprofilo().profile
    console.log(profilo)


    return (
        <div>
            {profilo && (
                <Container className="immaginebg p-3 border  rounded">
                    <Row>
                        <Col>
                        <img className=" margincustom  mb-4 rounded-circle" width={140} src={profilo.image} alt="" srcset="" />
                        </Col>
                        <Col className="m-3 d-flex  justify-content-end  ">
                        
                            <div className="bg-white p-2 rounded-circle  "style={{height:" 60px"}}>
                                <FaCamera className="" size={40} />
                            </div>
                        
                            {/* <GoPencil size={30}/> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="m-0">{profilo.name} {profilo.surname}</h3>
                            <h4 className="mb-3">{profilo.title} presso Epicode</h4>
                            <div className="d-flex">
                                <p className="m-0 text-secondary ">{profilo.area} </p>
                                <p className="  ms-4 m-0 text-primary">Informazioni di contatto</p>
                                </div>
                            <p className="mb-2 mt-2  text-primary ">5 collegamenti</p>
                            <div>
                                <Button className=" me-2 rounded-5 fw-bold ">Modifica Profilo</Button>
                                <Button className="bg-white text-secondary fw-bold  rounded-5 ">Info sul profilo</Button>
                            </div>
                            <div className="bgcustom rounded-3">
                                <div className=" mb-2 mt-2">
                                    <p className="m-0 fw-bold">Disponibile a lavorare</p>
                                    <p>Ruolo di Full-stack Developer</p>
                                </div>
                                <span className="text-primary">Mostra dettagli</span>
                            </div>

                        </Col>
                        <Col>
                            <div className="d-flex justify-content-center ">
                            <PiStudent size={30}/>
                                <p>Istituto Epicode</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}

        </div>
    )
}
export default Profile