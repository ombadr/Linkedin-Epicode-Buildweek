import React from "react";

const PostsPersonal = ({ posts }) => {
  // ID che vuoi cercare nei post
  const PersonalId = "65af9a37bd5d12001890d45c"; //usare fetchprofilo

  // Filtra solo gli elementi che contengono l'ID desiderato
  const filteredPosts = posts.filter(post => post._id === PersonalId);

  return (
    <div>
      <h2>I tuoi Posts:</h2>
      <div>
        {filteredPosts.map(post => (
          <div key={post._id}>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPersonal;
