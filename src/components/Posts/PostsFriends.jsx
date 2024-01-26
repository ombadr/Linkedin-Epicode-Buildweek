import React, { useEffect, useState } from 'react';
import { GrLike } from 'react-icons/gr';
import { FaRegCommentDots } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import { RiRepeatLine } from 'react-icons/ri';
import './assets/Posts.css';
import PostsComments from './PostsComments';
import { Fetchprofilo } from '../Fetchprofilo';













const PostsFriends = ({ posts }) => {

  const idpersonale=Fetchprofilo().profile
  const friendUserIds = [
    '65ae3141600be100183a868b', // Mattia
    '65ae7790600be100183a86c8', // Vincenzo
    '65af9a37bd5d12001890d45c', // Giuseppe
    '65ae3259600be100183a868c', // Omar
    '65af8844bd5d12001890d420', // Salvatore
    "6574399afe031e0019ba1da9"
  ];

  for(let i=0;i<friendUserIds.length;i++)
  {
    if(friendUserIds[i]==idpersonale._id)
    {
      friendUserIds.splice(i,1)
      break
    }
  }


  const [friendPosts, setFriendPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const filteredFriendPosts = posts.filter((post) =>
      friendUserIds.includes(post.user._id)
    );
    setFriendPosts(filteredFriendPosts);
  }, [posts]);

  const handleChatIconClick = (postId) => {
    setSelectedPostId(postId);
  };

  const handleClose = () => {
    setSelectedPostId(null);
  };
  console.log(friendPosts);
  return (
    <div>
      <h2>Posts degli Amici</h2>
      <div>
        {friendPosts.map((post) => (
          <div
            key={post._id}
            className='p-4 border-bottom border-secondary bg-light w-100 rounded-3 p-3 border border-secondary mt-4 mb-4'
          >
            <a href={'/' + post.user._id} className="text-decoration-none">
              <h4 className='fw-bold mb-4 text-dark'>
                <img
                  src={post.user.image}
                  alt=''
                  style={{ width: '100px', height: '100px' }}
                  className='rounded-circle me-3'
                />
                {post.user.name !== undefined
                  ? post.user.name + ' ' + post.user.surname
                  : post.user.username}
              </h4>
            </a>
            <div>
                    <img src={post.image} alt="" srcset="" />
                  </div>
            <p className=''>{post.text}</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
            <hr />
            <div className='d-flex justify-content-around align-items-center'>
              <button className='mt-2 fs-5 btn btn-post'>
                <GrLike size={30} className='me-2' />
                Consiglia
              </button>
              <button
                className='mt-2 fs-5 btn btn-post'
                onClick={() => {
                  handleClose();
                  handleChatIconClick(post._id);
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

            {selectedPostId === post._id && (
              <PostsComments
                postId={selectedPostId}
                showModal={true} // Mostra sempre il componente PostsComments quando selectedPostId è definito
                handleClose={handleClose}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsFriends;
