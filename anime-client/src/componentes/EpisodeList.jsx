import React from "react";

const EpisodeList = ({ episodes, onSelect }) => {
  return (
    <ul>
      {episodes.map((episode) => (
        <li key={episode.id} onClick={() => onSelect(episode)}>
          {episode.title} - {episode.anime_name} (Episode {episode.number})
        </li>
      ))}
    </ul>
  );
};

export default EpisodeList;
