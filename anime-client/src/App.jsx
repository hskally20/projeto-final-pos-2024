import React, { useState, useEffect } from "react";
import EpisodeForm from "./componentes/EpisodeForm";
import EpisodeList from "./componentes/EpisodeList";
import AnimeForm from "./componentes/AnimeForm";
import AnimeList from "./componentes/AnimeList";
import AnimeComments from "./componentes/AnimeComments";

const App = () => {
  const [episodes, setEpisodes] = useState([]);
  const [animes, setAnimes] = useState([]);

  // Configurar título da página
  useEffect(() => {
    document.title = "Anime Manager - Gestão de Animes";
  }, []);

  const handleAddEpisode = (newEpisode) => {
    setEpisodes([...episodes, newEpisode]);
  };

  const handleAddAnime = (newAnime) => {
    setAnimes([...animes, newAnime]);
  };

  const handleEditEpisode = (updatedEpisode) => {
    setEpisodes(
      episodes.map((ep) => (ep.id === updatedEpisode.id ? updatedEpisode : ep))
    );
  };

  const handleEditAnime = (updatedAnime) => {
    setAnimes(
      animes.map((anime) =>
        anime.id === updatedAnime.id ? updatedAnime : anime
      )
    );
  };

  const handleDeleteEpisode = (id) => {
    setEpisodes(episodes.filter((ep) => ep.id !== id));
  };

  const handleDeleteAnime = (id) => {
    setAnimes(animes.filter((anime) => anime.id !== id));
  };

  return (
    <div>
      <h1>Anime Manager - Gestão de Animes</h1>
      <AnimeForm onAdd={handleAddAnime} />
      <AnimeList
        animes={animes}
        onSelect={(anime) => console.log("Selecionado:", anime)}
        onDelete={handleDeleteAnime}
        onEdit={handleEditAnime}
      />
      <EpisodeForm onAdd={handleAddEpisode} />
      <EpisodeList
        episodes={episodes}
        onSelect={(episode) => console.log("Selecionado:", episode)}
        onDelete={handleDeleteEpisode}
        onEdit={handleEditEpisode}
      />
      <AnimeComments animeId={1} />
    </div>
  );
};

export default App;
