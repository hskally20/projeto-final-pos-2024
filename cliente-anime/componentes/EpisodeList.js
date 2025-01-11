import React, { useState } from "react";
import { createEpisode } from "../api/api";

function EpisodeList({ anime }) {
  const [episodes, setEpisodes] = useState(anime.episodes || []);
  const [newEpisode, setNewEpisode] = useState({ title: "", number: 0 });

  const handleAddEpisode = () => {
    const episodeData = { ...newEpisode, anime: anime.id };
    createEpisode(episodeData).then((response) =>
      setEpisodes([...episodes, response.data])
    );
  };

  return (
    <div>
      <h3>Episodios</h3>
      <ul>
        {episodes.map((ep) => (
          <li key={ep.id}>
            {ep.title} - Episode {ep.number}
          </li>
        ))}
      </ul>
      <input
        placeholder="Title"
        value={newEpisode.title}
        onChange={(e) => setNewEpisode({ ...newEpisode, title: e.target.value })}
      />
      <input
        placeholder="Number"
        type="number"
        value={newEpisode.number}
        onChange={(e) => setNewEpisode({ ...newEpisode, number: e.target.value })}
      />
      <button onClick={handleAddEpisode}>Add Episode</button>
    </div>
  );
}

export default EpisodeList;