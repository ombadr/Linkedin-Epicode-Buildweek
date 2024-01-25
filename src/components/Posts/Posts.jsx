import React, { useEffect, useState } from 'react';
import PostsRandom from './PostsRandom';
import PostsFriends from './PostsFriends';
import PostsPersonal from './PostsPersonal';
import PostsAdd from './PostsAdd';
import NewsBar from './NewsBar';
import ProfilePostsBar from './ProfilePostsBar';
import { fetchPosts } from '../Fetchprofilo';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmOWEzN2JkNWQxMjAwMTg5MGQ0NWMiLCJpYXQiOjE3MDYwMDcwOTUsImV4cCI6MTcwNzIxNjY5NX0.2qRmM_CYazxx8y1MJej_ce3QSwMxl5Z7A5TbBdWiY78';

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('Friends');
  const [esploraPosts, setEsploraPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const esplora = await fetchPosts();
        setEsploraPosts(esplora);
        setLoading(false);
      } catch (error) {
        console.log('Errore nella fetch: ' + error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {loading != true && (
        <>
          <h1>POSTS:</h1>
          <PostsAdd />
          <form className='mt-3'>
            <label>
              <span className=''>Seleziona la visualizzazione del feed: </span>
              <select
                className='bg-transparent rounded-3'
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

          {selectedOption === 'Friends' && (
            <PostsFriends posts={esploraPosts} />
          )}
          {selectedOption === 'Esplora' && <PostsRandom posts={esploraPosts} />}
          {selectedOption === 'Personal' && (
            <PostsPersonal isMe={true} posts={esploraPosts} />
          )}
        </>
      )}
    </div>
  );
};

export default Posts;
