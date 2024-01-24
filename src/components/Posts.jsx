import React, { useEffect, useState } from 'react';
import PostsRandom from './PostsRandom';
import PostsFriends from './PostsFriends';
import PostsPersonal from './PostsPersonal';
import PostsAdd from './PostsAdd';

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Friends');
  const [esploraPosts, setEsploraPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://striveschool-api.herokuapp.com/api/posts/personal',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzE0MTYwMGJlMTAwMTgzYTg2OGIiLCJpYXQiOjE3MDU5MTQ2ODksImV4cCI6MTcwNzEyNDI4OX0.4wuc8BPQtnbrrjR2fr4os_GS-UinPRJDLkLLihyMLtE`,
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
    <div>
      <h1>POSTS:</h1>
      <PostsAdd />
      <form>
        <label>
          <select
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
  );
};

export default Posts;
