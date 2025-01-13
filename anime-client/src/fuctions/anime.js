// src/services/animeServices.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/animes/';

export const getAnimeList = () => {
  return axios.get(API_URL)
    .then(response => response.data)
    .catch(error => {
      console.error("Erro ao buscar lista de animes:", error);
      throw error;
    });
};

export const deleteAnime = (animeId) => {
  return axios.delete(`${API_URL}${animeId}/`)
    .then(() => animeId) // Retorna o ID do anime excluído
    .catch(error => {
      console.error("Erro ao deletar o anime", error);
      throw error;
    });
};

export const updateAnime = (animeId, updatedData) => {
  return axios.put(`${API_URL}${animeId}/`, updatedData)
    .then(response => response.data)
    .catch(error => {
      console.error("Erro ao editar o anime", error);
      throw error;
    });
};

export const createAnime = (newAnime) => {
  return axios.post(API_URL, newAnime)
    .then(response => response.data)
    .catch(error => {
      console.error("Erro ao adicionar anime", error);
      throw error;
    });
};
