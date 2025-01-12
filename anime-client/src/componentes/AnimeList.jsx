import React from "react";

const AnimeList = ({ animes, onSelect }) => {
  return (
    <ul>
      {animes.map((anime) => (
        <li key={anime.id} onClick={() => onSelect(anime)}>
          {anime.name}
        </li>
      ))}
    </ul>
  );
};

export default AnimeList;