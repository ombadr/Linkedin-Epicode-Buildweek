import { Row, Col,Button } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaCheck } from "react-icons/fa";


function Interessi() {
  return (
    <div className="border rounded my-2">
      <Row className="justify-content-between p-3 ">
        <div className="d-flex justify-content-between ">
          <h2 className="m-0">Interessi</h2>

          <div className="d-flex">
            <div className="me-5 d-flex align-items-center">
              <FiPlus size={24} />
            </div>
            <div className="d-flex align-items-center">
              <LuPencil className="text-secondary " size={24} />
            </div>
          </div>
        </div>
      </Row>
      <Tabs
      defaultActiveKey="profile"
      className="mb-3"
    >
      <Tab eventKey="home" title="Aziende">
        <Col className="d-flex">
        <div className="d-flex mx-3 p-3 col-6">
            <div>
                <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png" width={48}/>
            </div>
            <div className="text-center">
            <h4 className="m-0">Epicode!</h4>
            <p className="m-0 text-secondary">12.861 follower</p>
            <Button variant="outline-secondary"> <FaCheck/>Già segui!</Button>
            </div>
        </div>
        <div className="d-flex mx-3 p-3 col-6">
            <div>
                <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png" width={48}/>
            </div>
            <div className="text-center">
            <h4 className="m-0">Epicode!</h4>
            <p className="m-0 text-secondary">22.024 follower</p>
            <Button variant="outline-secondary"> <FaCheck/>Già segui!</Button>
            </div>
        </div>
        </Col>
      
      </Tab>
      <Tab eventKey="profile" title="Scuole e Università">
      <div className="d-flex mx-3 p-3 col-6">
            <div>
                <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png" width={48}/>
            </div>
            <div className="text-center">
            <h4 className="m-0">Epicode!</h4>
            <p className="m-0 text-secondary">12.861 follower</p>
            <Button variant="outline-secondary"> <FaCheck/>Già segui!</Button>
            </div>
        </div>
      </Tab>
    </Tabs>
    </div>
  );
}

export default Interessi;
