import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { XSquare, PencilSquare } from 'react-bootstrap-icons';

//GET
const PostsComments = ({ postId, handleClose }) => {
  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState({
    comment: '',
    rate: '1',
    elementId: postId,
  });

  // Definisci la funzione fetchData qui
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxNzMyYzkxM2Y2NTAwMThkMDkyN2MiLCJpYXQiOjE3MDYxMjgxNzIsImV4cCI6MTcwNzMzNzc3Mn0.ziggSTpCe72EWDW21Dy9Jhwi1wtVj-E0Fue3s80XMVM',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Filtra i commenti relativi al post specifico utilizzando l'ID del post
        const postComments = data.filter(
          (comment) => comment.elementId === postId
        );
        setComments(postComments);
      } else {
        console.error('Errore nella richiesta:', response.status);
      }
    } catch (error) {
      console.error('Errore durante il recupero dei commenti:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [postId]);

  const handleCommentChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  //POST COMMENTS
  const submitComment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxNzMyYzkxM2Y2NTAwMThkMDkyN2MiLCJpYXQiOjE3MDYxMjgxNzIsImV4cCI6MTcwNzMzNzc3Mn0.ziggSTpCe72EWDW21Dy9Jhwi1wtVj-E0Fue3s80XMVM',
          },
          body: JSON.stringify(newComment),
        }
      );

      if (response.ok) {
        // Commento inviato con successo, puoi aggiornare la lista dei commenti
        setNewComment({
          comment: '',
          rate: '1',
          elementId: postId,
        });
        fetchData(); // Ricerca i commenti aggiornati
      } else {
        console.error("Errore nell'invio del commento:", response.status);
      }
    } catch (error) {
      console.error("Errore durante l'invio del commento:", error);
    }
  };

  //DELETE COMMENTS
  const handleDeleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxNzMyYzkxM2Y2NTAwMThkMDkyN2MiLCJpYXQiOjE3MDYxMjgxNzIsImV4cCI6MTcwNzMzNzc3Mn0.ziggSTpCe72EWDW21Dy9Jhwi1wtVj-E0Fue3s80XMVM',
          },
        }
      );

      if (response.ok) {
        // Rimuovi il commento dalla lista dei commenti
        setComments((prevComments) =>
          prevComments.filter((comment) => comment._id !== commentId)
        );
      } else {
        console.error(
          'Errore nella cancellazione del commento:',
          response.status
        );
      }
    } catch (error) {
      console.error('Errore durante la cancellazione del commento:', error);
    }
  };

  //PUT FETCH / EDIT COMMENTS
  const [editingCommentId, setEditingCommentId] = useState(null);

  const handleEditComment = (commentId) => {
    setEditingCommentId(commentId);
  };

  const handleUpdateComment = async (editedComment) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${editedComment._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxNzMyYzkxM2Y2NTAwMThkMDkyN2MiLCJpYXQiOjE3MDYxMjgxNzIsImV4cCI6MTcwNzMzNzc3Mn0.ziggSTpCe72EWDW21Dy9Jhwi1wtVj-E0Fue3s80XMVM',
          },
          body: JSON.stringify(editedComment),
        }
      );

      if (response.ok) {
        // Aggiorna il commento nella lista dei commenti
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment._id === editedComment._id ? editedComment : comment
          )
        );

        // Esci dalla modalità di modifica
        setEditingCommentId(null);
      } else {
        console.error(
          "Errore nell'aggiornamento del commento:",
          response.status
        );
      }
    } catch (error) {
      console.error("Errore durante l'aggiornamento del commento:", error);
    }
  };

  return (
    <div className='my-4'>
      <div></div>
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id} className='border-bottom py-3'>
              {editingCommentId === comment._id ? (
                <div>
                  <p>{new Date(comment.createdAt).toLocaleDateString()}</p>

                  <img
                    src='https://play-lh.googleusercontent.com/O8mvDQlw4AwmGfUrh4lviZD_PwwhRHz2etA25F77SbXrm3qEHOt2826aNkKar4D0yw'
                    alt=''
                    style={{ width: '100px', height: '100px' }}
                    className='rounded-circle me-3'
                  />
                  <span className='fw-bold'>{comment.author}:</span>
                  <input
                    type='text'
                    name='editedComment'
                    defaultValue={comment.comment}
                    onChange={(e) =>
                      setNewComment({
                        ...newComment,
                        comment: e.target.value,
                      })
                    }
                  />
                  <Button
                    variant='primary'
                    onClick={() =>
                      handleUpdateComment({
                        ...comment,
                        comment: newComment.comment,
                      })
                    }
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <div>
                  <p>{new Date(comment.createdAt).toLocaleDateString()}</p>
                  <img
                    src='https://play-lh.googleusercontent.com/O8mvDQlw4AwmGfUrh4lviZD_PwwhRHz2etA25F77SbXrm3qEHOt2826aNkKar4D0yw'
                    alt=''
                    style={{ width: '100px', height: '100px' }}
                    className='rounded-circle me-3'
                  />
                  <span className='fw-bold'>{comment.author}:</span>{' '}
                  {comment.comment}
                  {comment.author === 'soupcarry22' && (
                    <>
                      <XSquare
                        width={20}
                        height={20}
                        fill='red'
                        className='bi bi-x-square float-end'
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleDeleteComment(comment._id)}
                      />
                      <PencilSquare
                        width={20}
                        height={20}
                        fill='black'
                        className='bi bi-x-square float-end mx-2'
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleEditComment(comment._id)}
                      />
                    </>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {!editingCommentId && (
          <form onSubmit={submitComment}>
            <label>
              Aggiungi un commento:
              <input
                type='text'
                name='comment'
                className='mx-2'
                required
                value={newComment.comment}
                onChange={handleCommentChange}
              />
            </label>
            <br />
            <br />
            <Button variant='primary' type='submit' className='me-3'>
              Submit Comment
            </Button>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PostsComments;
