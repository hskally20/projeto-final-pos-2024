import React, { useState } from "react";

const AnimeForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");  // Alterado de name para title
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnime = { id: Date.now(), title, description };  // Alterado de name para title
    onAdd(newAnime);
    setTitle("");  // Alterado de name para title
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>  {/* Alterado de Nome para Título */}
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />  {/* Alterado de name para title */}
      </div>
      <div>
        <label>Descrição do anime:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Adicionar Anime</button>  {/* Alterado para "Adicionar Anime" */}
    </form>
  );
};

export default AnimeForm;
