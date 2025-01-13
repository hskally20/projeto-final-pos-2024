import React from "react";

const AnimeDetails = ({ anime }) => {
  return (
    <div>
      <h3>{anime.title}</h3>
      <p>{anime.description}</p>
    </div>
  );
};

export default AnimeDetails;
