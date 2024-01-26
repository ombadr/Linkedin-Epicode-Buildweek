import { IoMdPeople } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';
import { GiRadarDish } from 'react-icons/gi';
import { LuPencil } from 'react-icons/lu';
import { fetchPosts } from '../Fetchprofilo';
import { useState } from 'react';
import { useEffect } from 'react';
import PostsPersonal from '../Posts/PostsPersonal';
import PostsRandom from '../Posts/PostsRandom';
import { Row, Col, Button } from 'react-bootstrap';

const Attivita = ({isMe,profilo}) => {
  console.log(profilo)

  const [loading, setLoading] = useState(true);
  
  const [esploraPosts, setEsploraPosts] = useState([]);

  
  useEffect(() => {

    const fetchData = async () => {
      try {
        const esplora=await fetchPosts()
        setEsploraPosts(esplora)
        setLoading(false);
      } catch (error) {
        console.log("Errore nella fetch: " + error);
        setLoading(false);
      }
    };
    
    fetchData()
  }, []);

  return (
    <>{profilo && (

      <div className="border rounded my-2 bg-white">
        <Row className="justify-content-between p-3 ">
          <div className="d-flex justify-content-between ">
            <div>
              <h2 className='m-0'>Attività</h2>
              <p className='text-primary m-0'> 42 follower</p>
            </div>

            {isMe===true &&<div className='d-flex'>
              <div className='me-5 d-flex align-items-center'>
                <Button variant='outline-primary'>Crea un post</Button>
              </div>
              <div className='d-flex align-items-center'>
                <LuPencil className='text-secondary' size={24} />
              </div>
            </div>}
          </div>
        </Row>

        <div className='d-flex flex-column'>
          <div >
            <div>
              {isMe===true?(<div>  
                <PostsPersonal isMe={isMe} nome={profilo.name} posts={esploraPosts}/> 
                       
              </div>):(
              <div>
                <PostsPersonal isMe={isMe} nome={profilo.name} posts={esploraPosts}/> 
              </div>)}
            </div>
          </div>
        </div>

        <div className="text-center border-top" >
                <Button variant="light" className=" w-100 text-secondary"> Mostra tutte le Attività <span><FaArrowRight/></span></Button>
            </div>
      </div>
    )}
    </>
    
  );
};

export default Attivita;
