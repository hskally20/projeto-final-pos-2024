// src/componentes/CommentForm.jsx
import React, { useState } from "react";
import axios from "axios";

const CommentForm = ({ animeId, onAddComment }) => {
  const [userName, setUserName] = useState("");  // Nome do usuário
  const [comment, setComment] = useState("");  // Texto do comentário

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      user_name: userName,  // Nome do usuário
      comment: comment,  // Texto do comentário
      anime: animeId,  // ID do anime relacionado
    };

    // Enviar comentário para a API Django
    axios
      .post("http://127.0.0.1:8000/api/comments/", newComment)
      .then((response) => {
        onAddComment(response.data);  // Atualiza a lista de comentários com o novo comentário
        setUserName("");  // Limpar o campo do nome do usuário
        setComment("");   // Limpar o campo do comentário
      })
      .catch((error) => {
        console.error("Erro ao enviar comentário:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Usuário:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Comentário:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <div>
        <label>ID do Anime:</label>
        <input
          type="number"
          value={animeId}
          onChange={(e) => setAnimeId(e.target.value)}
          required
        />
      </div>
      <button type="submit">Adicionar Comentário</button>
    </form>
  );
};

export default CommentForm;
