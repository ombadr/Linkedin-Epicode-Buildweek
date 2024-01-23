import { FaEye } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';


import { Row,Col,Button } from "react-bootstrap";


const Analisi = () => {
  return (
    <>
      <div className='border rounded bg-white'>
        <Row className='justify-content-start p-3'>
          <h2 className='m-0'>Analisi</h2>
          <p className='text-secondary'>
            <span>
              <FaEye size={14} />
            </span>{' '}
            Solo per te
          </p>
        </Row>

const Analisi = () =>{

    return (
        <>
        <div className="border rounded bg-white ">
            <Row className="justify-content-start p-3">   
            <h2 className="m-0">Analisi</h2>
            <p className="text-secondary"><span><FaEye size={14}/></span> Solo per te</p>
            </Row>
            

           <div className="d-flex ">
           <div className="d-flex flex-row px-3">
              <Row className="pe-2">
                        <Col className="col-1 me-1 px-3">
                          <IoMdPeople size={20}/>
                        </Col>
                        <Col >
                            <h3>2 visualizzazioni del profilo</h3>
                            <p>Scopri chi ha visitato il profilo</p>
                        </Col>
                    </Row>
                </div>
                <div className="d-flex flex-row px-3">
              <Row className="pe-2">
                        <Col className="col-1 me-1 px-3">
                        <FaMagnifyingGlass size={20}/>
                        </Col>
                        <Col >
                          <h3>1 comparsa nei motori di ricerca</h3>
                          <p>compari nei risultati di ricerca.</p>
                        </Col>
                    </Row>
                </div>
           </div>
            <div className="text-center border-top" >
                <Button variant="light" className=" w-100 text-secondary"> Mostra tutte le analisi <span><FaArrowRight/></span></Button>
            </div>

        </div>
      </div>
    </>
  );
};

export default Analisi;
