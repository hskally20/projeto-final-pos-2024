// src/componentes/AnimeComments.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "@/componentes/CommentForm";

const AnimeComments = ({ animeId }) => {
  const [comments, setComments] = useState([]);
  const [editingComment, setEditingComment] = useState(null);  // Para gerenciar a edição

  // Buscar os comentários do anime selecionado
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/comments/?anime=${animeId}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar comentários:", error);
      });
  }, [animeId]);

  const handleDeleteComment = (commentId) => {
    axios
      .delete(`http://127.0.0.1:8000/api/comments/${commentId}/`)
      .then(() => {
        setComments(comments.filter((comment) => comment.id !== commentId));
      })
      .catch((error) => {
        console.error("Erro ao deletar o comentário", error);
      });
  };

  const handleEditComment = (comment) => {
    setEditingComment(comment);  // Passa o comentário completo para edição
  };

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>
              <strong>{comment.user_name}:</strong> {comment.comment}
            </p>
            <button onClick={() => handleEditComment(comment)}>Editar</button>
            <button onClick={() => handleDeleteComment(comment.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      {/* Exibe o formulário de edição ou de adicionar dependendo do estado de edição */}
      <CommentForm
        animeId={animeId}
        onAddComment={handleAddComment}
        editingComment={editingComment}  // Passa o comentário sendo editado
        setEditingComment={setEditingComment} // Função para limpar a edição
      />
    </div>
  );
};

export default AnimeComments;
