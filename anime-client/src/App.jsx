import React, { useState, useEffect } from "react";
import AnimeList from "@/componentes/AnimeList";
import AnimeDetails from "@/componentes/AnimeDetails";
import AnimeForm from "@/componentes/AnimeForm";
import EpisodeList from "@/componentes/EpisodeList";
import EpisodeForm from "@/componentes/EpisodeForm"; // Importa o EpisodeForm

const App = () => {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [animeList, setAnimeList] = useState([]);
  const [episodeList, setEpisodeList] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const addAnime = (newAnime) => {
    setAnimeList([...animeList, newAnime]);
  };

  const addEpisode = (newEpisode) => {
    setEpisodeList([...episodeList, newEpisode]);
  };

  return (
    <div>
      <header>
        <h1>Gerente Anime</h1>
      </header>
      <main>
        <section>
          <h2>Anime List</h2>
          <AnimeList animes={animeList} onSelect={setSelectedAnime} />
        </section>
        <section>
          <h2>Anime Details</h2>
          {selectedAnime ? <AnimeDetails anime={selectedAnime} /> : <p>Select an anime to see details</p>}
        </section>
        <section>
          <h2>Add New Anime</h2>
          <AnimeForm onAdd={addAnime} />
        </section>
        <section>
          <h2>Episode List</h2>
          <EpisodeList episodes={episodeList} onSelect={setSelectedEpisode} />
        </section>
        <section>
          <h2>Episode Details</h2>
          {selectedEpisode ? (
            <div>
              <p>Title: {selectedEpisode.title}</p>
              <p>Number: {selectedEpisode.number}</p>
              <p>Description: {selectedEpisode.description}</p>
            </div>
          ) : (
            <p>Select an episode to see details</p>
          )}
        </section>
        <section>
          <h2>Add New Episode</h2>
          <EpisodeForm onAdd={addEpisode} />
        </section>
      </main>
    </div>
  );
};

export default App;
