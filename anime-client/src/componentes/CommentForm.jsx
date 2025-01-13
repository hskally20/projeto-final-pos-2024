// src/componentes/CommentForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentForm = ({
  animeId,
  onAddComment,
  editingComment,
  setEditingComment,
}) => {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");

  // Quando `editingComment` muda, preenche o formulário com os dados do comentário a ser editado
  useEffect(() => {
    if (editingComment) {
      setUserName(editingComment.user_name);
      setComment(editingComment.comment);
    }
  }, [editingComment]); // Preenche os campos ao receber um comentário para edição

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      user_name: userName,
      comment: comment,
      anime: animeId,
    };

    if (editingComment) {
      // Atualiza o comentário existente
      axios
        .put(`http://127.0.0.1:8000/api/comments/${editingComment.id}/`, newComment)
        .then((response) => {
          // Atualiza a lista de comentários com o comentário editado
          onAddComment(response.data);
          setEditingComment(null); // Limpa o estado de edição
        })
        .catch((error) => {
          console.error("Erro ao editar comentário:", error);
        });
    } else {
      // Cria um novo comentário
      axios
        .post("http://127.0.0.1:8000/api/comments/", newComment)
        .then((response) => {
          onAddComment(response.data); // Adiciona o novo comentário
        })
        .catch((error) => {
          console.error("Erro ao enviar comentário:", error);
        });
    }

    // Limpa os campos do formulário após o envio
    setUserName("");
    setComment("");
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
      <button type="submit">{editingComment ? "Salvar Comentário" : "Adicionar Comentário"}</button>
      {editingComment && (
        <button type="button" onClick={() => setEditingComment(null)}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default CommentForm;
