import { FiPlus } from 'react-icons/fi';
import { LuPencil } from 'react-icons/lu';

import { Row } from 'react-bootstrap';

const Formazione = () => {
  return (
    <>
      <div className='border rounded my-2 bg-white'>
        <Row className='justify-content-between p-3 '>
          <div className='d-flex justify-content-between '>
            <h2 className='m-0'>Formazione</h2>

            <div className='d-flex'>
              <div className='me-5 d-flex align-items-center'>
                <FiPlus size={24} />
              </div>
              <div className='d-flex align-items-center'>
                <LuPencil className='text-secondary ' size={24} />
              </div>
            </div>
          </div>
        </Row>
        <div className='d-flex p-3 mx-3'>
          <div>
            <img
              src='https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png'
              width={48}
            />
          </div>
          <div className='text-center'>
            <h4 className='m-0'>Epicode!</h4>
            <p className='m-0 text-secondary'>2023-2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formazione;
