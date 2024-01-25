import React, { useEffect, useState } from 'react';
import PostsRandom from './PostsRandom';
import PostsFriends from './PostsFriends';
import PostsPersonal from './PostsPersonal';
import PostsAdd from './PostsAdd';
import NewsBar from './NewsBar';
import ProfilePostsBar from './ProfilePostsBar';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmOWEzN2JkNWQxMjAwMTg5MGQ0NWMiLCJpYXQiOjE3MDYwMDcwOTUsImV4cCI6MTcwNzIxNjY5NX0.2qRmM_CYazxx8y1MJej_ce3QSwMxl5Z7A5TbBdWiY78';

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Friends');
  const [esploraPosts, setEsploraPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://striveschool-api.herokuapp.com/api/posts',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setEsploraPosts(data);
        setLoading(false);
      } catch (error) {
        console.error(`Errore nella richiesta per il post personale:`, error);
        setError(
          'Errore durante il recupero dei tuoi post. Si prega di riprovare più tardi.'
        );
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <ProfilePostsBar />
        </div>
        <div className="col-md-6"> 
          <h1>POSTS:</h1>
          <PostsAdd />
          <form className="mt-3">
            <label>
              <span className="">Seleziona la visualizzazione del feed: </span>
              <select
                className="bg-transparent rounded-3"
                id='postsOption'
                name='postsOption'
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value='Friends'>Friends</option>
                <option value='Esplora'>Esplora</option>
                <option value='Personal'>I tuoi posts</option>
              </select>
            </label>
          </form>

          {selectedOption === 'Friends' && <PostsFriends posts={esploraPosts} />}
          {selectedOption === 'Esplora' && <PostsRandom posts={esploraPosts} />}
          {selectedOption === 'Personal' && <PostsPersonal posts={esploraPosts} />}
        </div>

        <div className="col-md-3"> 
          <NewsBar />
        </div>
      </div>
    </div>
  );
};

export default Posts;
