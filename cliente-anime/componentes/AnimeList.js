import React, { useEffect, useState } from "react";
import { fetchAnimes, deleteAnime } from "../api/api";

function AnimeList({ onEdit }) {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetchAnimes().then((response) => setAnimes(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteAnime(id).then(() => setAnimes(animes.filter((anime) => anime.id !== id)));
  };

  return (
    <div>
      <h2>Listas de Animes</h2>
      <ul>
        {animes.map((anime) => (
          <li key={anime.id}>
            {anime.title} - {anime.description}{" "}
            <button onClick={() => onEdit(anime)}>Edit</button>
            <button onClick={() => handleDelete(anime.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimeList;