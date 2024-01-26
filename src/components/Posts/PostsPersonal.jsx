import React, { useState, useEffect } from 'react';
import { XSquare, PencilSquare } from 'react-bootstrap-icons';
import { Image } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import Modale from '../image/Modale';

import { GrLike } from 'react-icons/gr';
import { FaRegCommentDots } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import { RiRepeatLine } from 'react-icons/ri';
import './assets/Posts.css';
import PostsComments from './PostsComments';
import { Fetchprofilo, fetchputProfilo } from '../Fetchprofilo';
import { CiImageOn } from "react-icons/ci";
import { PiSoccerBall } from 'react-icons/pi';
import { idhomepage } from '../Homepage/Homepage';
const PostsPersonal = ({ posts, isMe, nome }) => {
  const [personalPosts, setPersonalPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modifiedText, setModifiedText] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [postCommentsVisibility, setPostCommentsVisibility] = useState({}); // Object to store comments visibility
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams().id;
  let personalId;

  if (params != undefined) {
    personalId = params;
  } else {
    personalId = Fetchprofilo().profile._id;
  }

  const handleClose = () => {
    setSelectedPostId(null);
  };


  


  const handleCloseModal2 = () => {
    setIsModalOpen(false);
  };
  const handleShowModal2 = (postId) => {
    setIsModalOpen(true);
    const post = personalPosts.find((post) => post._id === postId);
    setSelectedPostId(postId);
    
  };

  useEffect(() => {
    setPersonalPosts(posts.filter((post) => post.user._id === personalId));
  }, [posts]);

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${idhomepage}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const updatedPosts = [...personalPosts].filter(
        (post) => post._id !== postId
      );
      setPersonalPosts(updatedPosts);
    } catch (error) {
      console.error("Errore durante l'eliminazione del post:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (postId) => {
    const post = personalPosts.find((post) => post._id === postId);
    setSelectedPostId(postId);
    setModifiedText(post.text);
    setShowModal(true);
  };

  const handleOpenComments = (postId) => {
    // Update the visibility state for the clicked post
    setPostCommentsVisibility((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  const handleChangePost = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${selectedPostId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${idhomepage}`,
          },
          body: JSON.stringify({ text: modifiedText }),
        }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      setPersonalPosts((prevPosts) =>
        prevPosts.map((post) =>
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
      {personalPosts[0] ? (
        <>
          <h2>I tuoi Posts:</h2>
          <div>
            {personalPosts.map((post) => (
              <div
                key={post._id}
                className='bg-light w-100 rounded-4 p-3 border border-secondary mt-4 mb-4'
              >
                <p className='fw-bold'>
                  <img
                    src={post.user.image}
                    alt=''
                    style={{ width: '100px', height: '100px' }}
                    className='rounded-circle me-3'
                  />
                  <span className='fs-2'>
                    {post.user.name !== ''
                      ? post.user.name + ' ' + post.user.surname
                      : post.user.username}
                    -
                  </span>{' '}
                  {post.user.title}
                  {isMe === true && (
                    <>
                      <XSquare
                        width={20}
                        height={20}
                        fill='red'
                        className='bi bi-x-square float-end'
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleDeletePost(post._id)}
                      />

                      <PencilSquare
                        width={20}
                        height={20}
                        fill='currentColor'
                        className='bi bi-pencil-square float-end mx-2'
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleOpenModal(post._id)}
                      />
                  
                      <Image 
                      width={20}
                      height={20}
                      fill='currentColor'
                        className=' bi bi-pencil-square float-end '
                        style={{ cursor: 'pointer' }}
                        onClick={() => (handleShowModal2(post._id))}
                      />
                    <Modale show={isModalOpen} formdata={"post"} onHide={handleCloseModal2}  expid={selectedPostId} />
                    </>
                  )}
                </p>
                  <div>
                    <img src={post.image} alt="" srcset="" />
                  </div>
                <div>
                  <p>{post.text}</p>
                  <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
                <hr />
                <div className='d-flex justify-content-around align-items-center'>
                  <button className='mt-2 fs-5 btn btn-post'>
                    <GrLike size={30} className='me-2' />
                    Consiglia
                  </button>
                  <button
                    className='mt-2 fs-5 btn btn-post'
                    onClick={() => {
                      handleOpenComments(post._id);
                      setShowCommentModal(true);
                    }}
                  >
                    <FaRegCommentDots size={30} className='me-2' />
                    Commenta
                  </button>
                  <button className='mt-2 fs-5 btn btn-post'>
                    <RiRepeatLine size={30} className='me-2' />
                    Diffondi
                  </button>
                  <button className='mt-2 fs-5 btn btn-post'>
                    <IoIosSend size={30} className='me-2' />
                    Invia
                  </button>
                </div>
                {postCommentsVisibility[post._id] && (
                  <PostsComments
                    postId={post._id}
                    onClick={() => {
                      handleClose();
                    }}
                    handleClose={() =>
                      setPostCommentsVisibility((prevState) => ({
                        ...prevState,
                        [post._id]: false,
                      }))
                    }
                  />
                )}
              </div>
            ))}
          </div>
        </>
      ) : isMe === true ? (
        <>
          <h3>Non hai ancora pubblicato nulla!</h3>
          <p>I post che condividi appariranno qui!</p>
        </>
      ) : (
        <>
          <h3>{nome} non ha ancora pubblicato nulla!</h3>
          <p>I post che condividerà {nome} appariranno qui!</p>
        </>
      )}

      {/* Modale per la modifica del testo del post */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica del Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className='w-100'
            value={modifiedText}
            onChange={(e) => setModifiedText(e.target.value)}
            rows={4}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Chiudi
          </Button>
          <Button variant='primary' onClick={handleChangePost}>
            Salva Modifiche
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostsPersonal;
