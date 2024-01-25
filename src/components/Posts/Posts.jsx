import React, { useEffect, useState } from 'react';
import PostsRandom from './PostsRandom';
import PostsFriends from './PostsFriends';
import PostsPersonal from './PostsPersonal';
import PostsAdd from './PostsAdd';
import { fetchPosts } from '../Fetchprofilo';



const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('Friends');
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

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {loading!=true && (
        <>
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
      {selectedOption === 'Personal' && <PostsPersonal isMe={true} posts={esploraPosts} />}
      </>
      
      )}
    </div>
  );
};

export default Posts;