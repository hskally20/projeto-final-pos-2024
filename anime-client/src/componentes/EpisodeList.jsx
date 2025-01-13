// src/componentes/EpisodeList.jsx
import React, { useState } from "react";

const EpisodeList = ({ episodes, onSelect, onDelete, onEdit }) => {
  const [editingEpisode, setEditingEpisode] = useState(null);
  const [editedEpisodeData, setEditedEpisodeData] = useState({
    title: "",
    number: "",
    description: "",
  });

  const handleEdit = (episode) => {
    setEditingEpisode(episode.id);
    setEditedEpisodeData({
      title: episode.title,
      number: episode.number,
      description: episode.description,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEpisodeData({ ...editedEpisodeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ id: editingEpisode, ...editedEpisodeData });
    setEditingEpisode(null); // Fecha o formulário de edição
  };

  return (
    <div>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            {episode.title} - Episódio {episode.number}
            <button onClick={() => onSelect(episode)}>Ver detalhes</button>
            <button onClick={() => handleEdit(episode)}>Editar</button>
            <button onClick={() => onDelete(episode.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      {/* Formulário de Edição */}
      {editingEpisode && (
        <div>
          <h2>Editar Episódio</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Título:</label>
              <input
                type="text"
                name="title"
                value={editedEpisodeData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Número do Episódio:</label>
              <input
                type="number"
                name="number"
                value={editedEpisodeData.number}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Descrição:</label>
              <textarea
                name="description"
                value={editedEpisodeData.description}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Salvar</button>
            <button type="button" onClick={() => setEditingEpisode(null)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EpisodeList;
