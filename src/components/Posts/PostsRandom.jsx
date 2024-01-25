import React, { useState, useEffect } from "react";
import { ChatDots } from "react-bootstrap-icons";
import PostsComments from "./PostsComments";

const PostsRandom = ({ posts }) => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [randomPosts, setRandomPosts] = useState([]);

  useEffect(() => {
    // Aggiorna la lista dei post random solo al montaggio del componente
    if (posts && posts.length >= 10) {
      const availableIndices = Array.from({ length: posts.length }, (_, index) => index);
      const newRandomPosts = [];

      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        const selectedIndex = availableIndices[randomIndex];
        const randomPost = posts[selectedIndex];

        if (randomPost.text !== "") {
          const formattedDate = new Date(randomPost.updatedAt).toLocaleDateString();
          newRandomPosts.push(
            <div key={i} className="Suggestedposts d-flex p-4 m-3 border-bottom border-secondary">
              <div>
                <h4 className="fw-bold mb-4">
                  <img
                    src={randomPost.user.image ? randomPost.user.image : 'https://d.newsweek.com/en/full/2270410/angry-cat-expert.png?w=1600&h=1600&q=88&f=aeb99a4ed1e4f5223fb24f0610a3493a'}
                    alt=""
                    style={{ width: "100px" }}
                    className="rounded-circle me-3"
                  />                  
                  {randomPost.user.username}
                  </h4>
                <p className="">{randomPost.text}</p>
                <p className="">{formattedDate}</p>
                <ChatDots
                  className=""
                  width={20}
                  height={20}
                  onClick={() => handleChatIconClick(randomPost._id)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          );
          availableIndices.splice(randomIndex, 1);
        } else {
          i--;
        }
      }

      setRandomPosts(newRandomPosts);
    }
  }, [posts]);

  const handleChatIconClick = (postId) => {
    setSelectedPostId(postId);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      {randomPosts}
      {selectedPostId && (
        <PostsComments postId={selectedPostId} showModal={showModal} handleClose={handleClose} />
      )}
    </div>
  );
};

export default PostsRandom;
