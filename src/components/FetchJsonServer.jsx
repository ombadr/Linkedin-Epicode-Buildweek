// FetchJsonServer.jsx
import React from "react";

export async function FetchJsonServerPost(id, currentUser) {
  const postData = {
    username: [{ id: id }],
    currentUser: currentUser,
  };

  try {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    const result = await response.json();
    console.log("Post created:", result.id);
    return result.id;
  } catch (error) {
    console.error("Error creating post:", error);
    return null;
  }
}


