// src/componentes/EpisodeForm.jsx
import React, { useState } from "react";

const EpisodeForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEpisode = {
      id: Date.now(),
      title,
      number,
      description,
    };
    onAdd(newEpisode);
    setTitle("");
    setNumber("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Número do Episódio:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Descrição:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Adicionar Episódio</button>
    </form>
  );
};

export default EpisodeForm;
