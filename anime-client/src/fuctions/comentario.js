// src/services/commentServices.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/comments/';

export const getCommentsByAnimeId = (animeId) => {
  return axios.get(`${API_URL}?anime=${animeId}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Erro ao buscar comentários:", error);
      throw error;
    });
};

export const createComment = (newComment) => {
  return axios.post(API_URL, newComment)
    .then(response => response.data)
    .catch(error => {
      console.error("Erro ao adicionar comentário", error);
      throw error;
    });
};
