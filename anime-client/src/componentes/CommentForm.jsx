import React, { useState } from "react";
import axios from "axios";

const CommentForm = ({ animeId, onAddComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      anime_name: `Anime ${animeId}`, // Associando o nome do anime (isso pode variar conforme sua estrutura)
      text,
      anime: animeId,  // Associando o comentário ao anime
    };

    // Enviar comentário para a API Django
    axios.post('http://127.0.0.1:8000/api/comments/', newComment)
      .then(response => {
        onAddComment(response.data);  // Atualiza a lista de comentários com o novo comentário
        setText("");  // Limpa o campo do formulário
      })
      .catch(error => {
        console.error("Erro ao enviar comentário:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Comentário:</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <button type="submit">Adicionar Comentário</button>
    </form>
  );
};

export default CommentForm;
