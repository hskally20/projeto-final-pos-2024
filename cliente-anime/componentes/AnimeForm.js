import React, { useState } from "react";
import { createAnime, updateAnime } from "../api/api";

function AnimeForm({ currentAnime, onSave }) {
  const [formData, setFormData] = useState(currentAnime || { title: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      updateAnime(formData.id, formData).then(() => onSave());
    } else {
      createAnime(formData).then(() => onSave());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Titulo"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Descrição"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default AnimeForm;