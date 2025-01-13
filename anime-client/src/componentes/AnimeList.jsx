// src/componentes/AnimeList.jsx
import React, { useState } from "react";

const AnimeList = ({ animes, onSelect, onDelete, onEdit }) => {
  const [editingAnime, setEditingAnime] = useState(null);
  const [editedAnimeData, setEditedAnimeData] = useState({ title: "", description: "" });

  const handleEdit = (anime) => {
    setEditingAnime(anime.id);
    setEditedAnimeData({ title: anime.title, description: anime.description });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAnimeData({ ...editedAnimeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ id: editingAnime, ...editedAnimeData });
    setEditingAnime(null); // Fecha o formulário de edição
  };

  return (
    <div>
      <ul>
        {animes.map((anime) => (
          <li key={anime.id}>
            {anime.title}
            <button onClick={() => onSelect(anime)}>Ver detalhes</button>
            <button onClick={() => handleEdit(anime)}>Editar</button>
            <button onClick={() => onDelete(anime.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      {/* Formulário de Edição */}
      {editingAnime && (
        <div>
          <h2>Editar Anime</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Título:</label>
              <input
                type="text"
                name="title"
                value={editedAnimeData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Descrição:</label>
              <textarea
                name="description"
                value={editedAnimeData.description}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Salvar</button>
            <button type="button" onClick={() => setEditingAnime(null)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AnimeList;
