import { FaEye } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';
import { GiRadarDish } from 'react-icons/gi';

import { Row, Col, Button } from 'react-bootstrap';

const Risorse = () => {
  return (
    <>
      <div className='border rounded my-2 bg-white'>
        <Row className='justify-content-start p-3 '>
          <h2 className='m-0'>Risorse</h2>
          <p className='text-secondary'>
            <span>
              <FaEye size={14} />
            </span>{' '}
            Solo per te
          </p>
        </Row>

        <div className='d-flex flex-column'>
          <div className='me-3 '>
            <div className='d-flex flex-row px-3'>
              <div className='pe-2'>
                <GiRadarDish size={20} />
              </div>
              <div>
                <h3>2 visualizzazioni del profilo</h3>
                <p>Scopri chi ha visitato il profilo</p>
              </div>
            </div>
            <div className='d-flex flex-row px-3'>
              <div className='pe-2'>
                <IoMdPeople size={20} />
              </div>
              <div>
                <h3>La mia rete</h3>
                <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center border-top'>
          <Button variant='light' className=' w-100 text-secondary'>
            {' '}
            Mostra tutte le risorse{' '}
            <span>
              <FaArrowRight />
            </span>
          </Button>
        </div>
        <div className='d-flex flex-row px-3'>
          <div className='pe-2'>
            <IoMdPeople size={20} />
          </div>
          <div>
            <h3>La mia rete</h3>
            <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
          </div>
        </div>
      </div>

      <div className='text-center border-top text-secondary'>
        <p>
          Mostra tutte le analisi{' '}
          <span>
            <FaArrowRight />
          </span>
        </p>
      </div>
    </>
  );
};

export default Risorse;
