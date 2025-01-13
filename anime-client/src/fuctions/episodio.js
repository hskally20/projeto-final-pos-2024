// src/services/episodeServices.js
import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/episodes/';

export const getEpisodeList = () => {
  return axios.get(API_URL)
    .then(response => response.data)
    .catch(error => {
      console.error("Erro ao buscar lista de episódios:", error);
      throw error;
    });
};

export const deleteEpisode = (episodeId) => {
  return axios.delete(`${API_URL}${episodeId}/`)
    .then(() => episodeId) // Retorna o ID do episódio excluído
    .catch(error => {
      console.error("Erro ao deletar o episódio", error);
      throw error;
    });
};

export const updateEpisode = (episodeId, updatedData) => {
  return axios.put(`${API_URL}${episodeId}/`, updatedData)
    .then(response => response.data)
    .catch(error => {
      console.error("Erro ao editar o episódio", error);
      throw error;
    });
};

export const createEpisode = (newEpisode) => {
  return axios.post(API_URL, newEpisode)
    .then(response => response.data)
    .catch(error => {
      console.error("Erro ao adicionar episódio", error);
      throw error;
    });
};
