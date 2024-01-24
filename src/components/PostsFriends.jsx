import React from "react";

const PostsFriends = ({ posts }) => {
  const friendUsernames = [
    "megha", // Mattia: 65ae3141600be100183a868b
    "Vik", // Vincenzo: 65ae7790600be100183a86c8
    "darkshadowXXXXkingDARKER", // Giuseppe: 65af9a37bd5d12001890d45c
    "ombadr", // Omar: 65ae3259600be100183a868c
    "SalvatoreRagosta", // Salvatore: 65af8844bd5d12001890d420
  ];

  // Filtra solo gli elementi che hanno un username presente in friendUsernames
  const friendPosts = posts.filter(post => friendUsernames.includes(post.username));

  return (
    <div>
      <h2>Posts degli Amici</h2>
      <div>
        {friendPosts.map(post => (
          <div key={post._id}>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsFriends;
