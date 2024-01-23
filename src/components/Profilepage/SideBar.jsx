import { Button, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";



import { FaLinkedin } from "react-icons/fa";
import ProfiliRandom from "./ProfiliRandom";

const SideBar = (isMe) => {
  return (
    <>
      {isMe===true && <div className="border rounded my-2 bg-white">
        <div className="border-bottom">
        <div className="justify-content-between p-3">
          <div className="d-flex justify-content-between ">
            <h2 className="m-0">Lingua del profilo</h2>

            <div className="d-flex">
              <div className="d-flex align-items-center">
                <LuPencil className="text-secondary" size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mx-3">
        <p className="text-secondary">Italiano</p>
        </div>
        </div>
        
        <Row className="justify-content-between p-3 ">
          <div className="d-flex justify-content-between ">
            <h2>Public profile & URL</h2>

            <div className="d-flex">
              <div className="d-flex align-items-center">
                <LuPencil className="text-secondary" size={24} />
              </div>
            </div>
          </div>
        </Row>
        <div className="d-flex mx-3">
        <p className="text-secondary">##LINK DINAMICO</p>
        </div>
      </div>}


      <ProfiliRandom />

          <div className="border rounded my-2 bg-white">
        <Row className="justify-content-between p-3 ">
          <div className="d-flex justify-content-between ">
            <h2 className="m-0 text-secondary"><FaLinkedin className="text-primary" />L E A R N I N G</h2>
          </div>
          <p className="pt-2">Aggiungi nuove competenza con questi corsi, gratuiti per 24 ore</p>
        </Row>


        <div className="d-flex p-3 mx-3 border-bottom">
            <div>
                <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png" alt="" width={64}/>
            </div>
            <div>
            <h4 className="m-0 ">Team build! Amici o Nemici?</h4>
            <p className="m-0 text-secondary">6.989 visualizzazioni</p>
            </div>
        </div>
        <div className="d-flex p-3 mx-3 border-bottom">
            <div>
                <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png" alt="" width={64}/>
            </div>
            <div>
            <h4 className="m-0 ">Come scaricare il CSS ad un tuo team-Member!</h4>
            <p className="m-0 text-secondary">2.140 visualizzazioni</p>
            </div>
        </div>
        <div className="d-flex p-3 mx-3">
            <div>
                <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png" alt="" width={64}/>
            </div>
            <div>
            <h4 className="m-0 ">Come fissare gli un div</h4>
            <p className="m-0 text-secondary">6.501 visualizzazioni</p>
            </div>
        </div>

        <div className="text-center border-top" >
                <Button variant="light" className=" w-100 text-secondary"> Visualizza i miei suggerimenti <span><FaArrowRight/></span></Button>
            </div>


      </div>

    </>
  );
};

export default SideBar;
