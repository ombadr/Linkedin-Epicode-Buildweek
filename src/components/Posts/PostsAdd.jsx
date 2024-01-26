import React, { useState } from 'react';
import './assets/Posts.css';
import { GrGallery } from 'react-icons/gr';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaRegNewspaper } from 'react-icons/fa6';

const PostAdd = ({}) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/posts/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzE0MTYwMGJlMTAwMTgzYTg2OGIiLCJpYXQiOjE3MDU5MTQ2ODksImV4cCI6MTcwNzEyNDI4OX0.4wuc8BPQtnbrrjR2fr4os_GS-UinPRJDLkLLihyMLtE`,
          },
          body: JSON.stringify({ text }),
        }
      );

      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
    } catch (error) {
      console.error(`Errore durante l'aggiunta del post: ${error.message}`);
      setError(
        "Errore durante l'aggiunta del post. Si prega di riprovare più tardi."
      );
    }
  };

  return (
    <div className='bg-light rounded-3 border border-secondary p-3'>
      <div className='d-flex justify-content-center'>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit} className='d-flex w-100'>
          <input
            className='rounded-5 p-3 w-100'
            placeholder='Avvia un post'
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button type='submit' className='btn btn-primary'>
            Aggiungi Post
          </button>
        </form>
      </div>
      <div className='d-flex justify-content-around mt-3'>
        <button className='btn text-secondary fw-bold btn-addPost d-flex align-items-center fs-5'>
          <GrGallery className='me-2' />
          Contenuti multimediali
        </button>
        <button className='btn text-secondary fw-bold btn-addPost d-flex align-items-center fs-5'>
          <FaRegCalendarAlt className='me-2' />
          Evento
        </button>
        <button className='btn text-secondary fw-bold btn-addPost d-flex align-items-center fs-5'>
          <FaRegNewspaper className='me-2' />
          Scrivi un articolo
        </button>
      </div>
    </div>
  );
};

export default PostAdd;
