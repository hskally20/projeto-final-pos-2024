import React, { useState } from "react";

const EpisodeForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [animeId, setAnimeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEpisode = {
      id: Date.now(),
      title,
      number: parseInt(number),
      description,
      anime_id: parseInt(animeId),
    };
    onAdd(newEpisode);
    setTitle("");
    setNumber("");
    setDescription("");
    setAnimeId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Anime ID:</label>
        <input
          type="number"
          value={animeId}
          onChange={(e) => setAnimeId(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Episode</button>
    </form>
  );
};

export default EpisodeForm;
