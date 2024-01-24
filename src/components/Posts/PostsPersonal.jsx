import React, { useState, useEffect } from "react";
import { XSquare, PencilSquare } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PostsPersonal = ({ posts }) => {
  const [personalPosts, setPersonalPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modifiedText, setModifiedText] = useState("");
  const [selectedPostId, setSelectedPostId] = useState(null);

  const personalId = "65af9a37bd5d12001890d45c";  
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmOWEzN2JkNWQxMjAwMTg5MGQ0NWMiLCJpYXQiOjE3MDYwMDcwOTUsImV4cCI6MTcwNzIxNjY5NX0.2qRmM_CYazxx8y1MJej_ce3QSwMxl5Z7A5TbBdWiY78";

  useEffect(() => {
    setPersonalPosts(posts.filter(post => post.user._id === personalId));
  }, [posts]);

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const updatedPosts = [...personalPosts].filter(post => post._id !== postId);
      setPersonalPosts(updatedPosts);
    } catch (error) {
      console.error('Errore durante l\'eliminazione del post:', error);
    }
  };

  const handleOpenModal = (postId) => {
    const post = personalPosts.find(post => post._id === postId);
    setSelectedPostId(postId);
    setModifiedText(post.text); // Inizializza il campo di testo modificato con il testo corrente
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChangePost = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${selectedPostId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ text: modifiedText })
      });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      setPersonalPosts(prevPosts =>
        prevPosts.map(post =>
          post._id === selectedPostId ? { ...post, text: modifiedText } : post
        )
      );
  
      console.log('Modifica del post con ID:', selectedPostId);
      handleCloseModal();
    } catch (error) {
      console.error('Errore durante la modifica del post:', error);
    }
  };

  return (
    <div>
      <h2>I tuoi Posts:</h2>
      <div className="">
        {personalPosts.map(post => (
          <div key={post._id} className="border-bottom p-2">
            <p className="fw-bold">
              <span className="fs-2">{post.user.username} -</span> {post.user.title}

              <XSquare
                width={20}
                height={20}
                fill="red"
                className="bi bi-x-square float-end"
                style={{ cursor: 'pointer' }}
                onClick={() => handleDeletePost(post._id)}
              />

              <PencilSquare
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-pencil-square float-end mx-2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleOpenModal(post._id)}
              />
            </p>

            <p>{post.text}</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      {/* Modale per la modifica del testo del post */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica del Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            value={modifiedText}
            onChange={(e) => setModifiedText(e.target.value)}
            rows={4}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleChangePost}>
            Salva Modifiche
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostsPersonal;
