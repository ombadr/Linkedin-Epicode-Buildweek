import React, { useState } from "react";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmOWEzN2JkNWQxMjAwMTg5MGQ0NWMiLCJpYXQiOjE3MDYwMDcwOTUsImV4cCI6MTcwNzIxNjY5NX0.2qRmM_CYazxx8y1MJej_ce3QSwMxl5Z7A5TbBdWiY78";

const PostAdd = ({  }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();

      console.log("Post aggiunto con successo!");
    } catch (error) {
      console.error(`Errore durante l'aggiunta del post: ${error.message}`);
      setError("Errore durante l'aggiunta del post. Si prega di riprovare più tardi.");
    }
  };

  return (
    <div>
      <h2>Aggiungi un nuovo Post:</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Testo:
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <br />
        <button type="submit">Aggiungi Post</button>
      </form>
    </div>
  );
};

export default PostAdd;
