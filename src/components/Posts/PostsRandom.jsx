import { GrLike } from 'react-icons/gr';
import { FaRegCommentDots } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import { RiRepeatLine } from 'react-icons/ri';
import './assets/Posts.css';
import React, { useState, useEffect } from 'react';
import { ChatDots } from 'react-bootstrap-icons';
import PostsComments from './PostsComments';

const PostsRandom = ({ posts }) => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [randomPosts, setRandomPosts] = useState([]);

  const handleChatIconClick = (postId) => {
    setSelectedPostId(postId);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPostId(null);
  };

  useEffect(() => {
    if (posts && posts.length >= 10) {
      const availableIndices = Array.from(
        { length: posts.length },
        (_, index) => index
      );
      const newRandomPosts = [];

      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        const selectedIndex = availableIndices[randomIndex];
        const randomPost = posts[selectedIndex];

        if (randomPost.text !== '') {
          const formattedDate = new Date(
            randomPost.updatedAt
          ).toLocaleDateString();
          newRandomPosts.push({
            id: randomPost._id,
            jsx: (
              <div key={i} className='d-flex p-4 m- w-100 mt-4 mb-4'>
                <div className='w-100'>
                  <a href={'/' + randomPost.user._id}>
                    <h4 className='fw-bold mb-4'>
                      <img
                        src={
                          randomPost.user.image
                            ? randomPost.user.image
                            : 'https://d.newsweek.com/en/full/2270410/angry-cat-expert.png?w=1600&h=1600&q=88&f=aeb99a4ed1e4f5223fb24f0610a3493a'
                        }
                        alt=''
                        style={{ width: '100px', height: '100px' }}
                        className='rounded-circle me-3'
                      />
                      {randomPost.user.name !== ''
                        ? randomPost.user.name + ' ' + randomPost.user.surname
                        : randomPost.user.username}
                    </h4>
                  </a>
                  <p className=''>{randomPost.text}</p>
                  <p className=''>{formattedDate}</p>

                  <hr />

                  <div className='d-flex justify-content-around align-items-center'>
                    <button className='mt-2 fs-5 btn btn-post'>
                      <GrLike size={30} className='me-2' />
                      Consiglia
                    </button>
                    <button
                      className='mt-2 fs-5 btn btn-post'
                      onClick={() => handleChatIconClick(randomPost._id)}
                    >
                      <FaRegCommentDots size={30} className='me-2' />
                      Commenta
                    </button>
                    <button className='mt-2 fs-5 btn btn-post'>
                      <RiRepeatLine size={30} className='me-2' />
                      Diffondi il post
                    </button>
                    <button className='mt-2 fs-5 btn btn-post'>
                      <IoIosSend size={30} className='me-2' />
                      Invia
                    </button>
                  </div>
                </div>
              </div>
            ),
          });

          availableIndices.splice(randomIndex, 1);
        } else {
          i--;
        }
      }

      setRandomPosts(newRandomPosts);
    }
  }, [posts]);

  return (
    <div>
      {randomPosts.map(({ id, jsx }) => (
        <div
          className='Suggestedposts p-4 m-3 border-bottom border-secondary bg-light w-100 rounded-4 p-3 border border-secondary mt-4 mb-4'
          key={id}
        >
          <React.Fragment>
            {jsx}
            {selectedPostId === id && showModal && (
              <PostsComments
                postId={selectedPostId}
                showModal={showModal}
                handleClose={handleClose}
              />
            )}
          </React.Fragment>
        </div>
      ))}
    </div>
  );
};

export default PostsRandom;
