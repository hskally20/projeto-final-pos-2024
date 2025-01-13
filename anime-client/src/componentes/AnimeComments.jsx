// src/componentes/AnimeComments.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const AnimeComments = ({ animeId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Buscar os comentários associados ao anime
    axios
      .get(`http://127.0.0.1:8000/api/comments/?anime=${animeId}`)
      .then((response) => {
        setComments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar comentários:", error);
        setLoading(false);
      });
  }, [animeId]);

  if (loading) return <div>Carregando comentários...</div>;

  return (
    <div>
      <h4>Comentários:</h4>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.user_name}</strong>: {comment.comment} <br />
            <em>Anime: {comment.anime_title}</em> {/* Exibe o nome do anime */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeComments;
