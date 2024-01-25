import React, { useEffect, useState } from "react";

import { GrLike } from "react-icons/gr";
import { FaRegCommentDots } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { RiRepeatLine } from "react-icons/ri";
import "./assets/Posts.css"

const PostsFriends = ({ posts }) => {
  const friendUserIds = [
    "65ae3141600be100183a868b", // Mattia
    "65ae7790600be100183a86c8", // Vincenzo
    "65af9a37bd5d12001890d45c", // Giuseppe
    "65ae3259600be100183a868c", // Omar
    "65af8844bd5d12001890d420", // Salvatore
  ];

  const [friendPosts, setFriendPosts] = useState([]);

  useEffect(() => {
    const filteredFriendPosts = posts.filter(post => friendUserIds.includes(post.user._id));
    setFriendPosts(filteredFriendPosts);
  }, [posts]);

  console.log(friendPosts)

  return (
    <div>
      <h2>Posts degli Amici</h2>
      <div>
        {friendPosts.map(post => (
          <div key={post._id} className="bg-light w-100 rounded-4 p-3 border border-secondary mt-4 mb-4">
            <h4 className="fw-bold mb-4">{post.user.username}</h4>
            <p>{post.text}</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
            <hr />
            <div className="d-flex justify-content-around align-items-center">
              <button className="mt-2 fs-5 btn btn-post">
                <GrLike size={30} className="me-2" />
                Consiglia
              </button>
              <button className="mt-2 fs-5 btn btn-post">
                <FaRegCommentDots size={30} className="me-2" />
                Commenta
              </button>
              <button className="mt-2 fs-5 btn btn-post">
                <RiRepeatLine size={30} className="me-2" />
                Diffondi il post
              </button>
              <button className="mt-2 fs-5 btn btn-post">
                <IoIosSend size={30} className="me-2" />
                Invia
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsFriends;
