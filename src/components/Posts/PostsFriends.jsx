import React, { useEffect, useState } from "react";
import { ChatDots } from "react-bootstrap-icons";
import PostsComments from "./PostsComments"; // Assicurati di importare il componente PostsComments

const PostsFriends = ({ posts }) => {
  const friendUserIds = [
    "65ae3141600be100183a868b", // Mattia
    "65ae7790600be100183a86c8", // Vincenzo
    "65af9a37bd5d12001890d45c", // Giuseppe
    "65ae3259600be100183a868c", // Omar
    "65af8844bd5d12001890d420", // Salvatore
  ];

  const [friendPosts, setFriendPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null); // Nuovo stato per tracciare l'ID del post selezionato
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const filteredFriendPosts = posts.filter(post => friendUserIds.includes(post.user._id));
    setFriendPosts(filteredFriendPosts);
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
      <h2>Posts degli Amici</h2>
      <div>
        {friendPosts.map(post => (
          <div key={post._id} className="p-4 m-3 border-bottom border-secondary">
            <h4 className="fw-bold mb-4">{post.user.username}</h4>
            <p className="">{post.text}</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
            <ChatDots
              className="float-end"
              width={20}
              height={20}
              onClick={() => handleChatIconClick(post._id)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>

      {/* Visualizza PostsComments solo se un post è stato selezionato */}
      {selectedPostId && (
        <PostsComments postId={selectedPostId} showModal={showModal} handleClose={handleClose} />
      )}
    </div>
  );
};

export default PostsFriends;
