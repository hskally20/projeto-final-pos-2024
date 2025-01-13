import React, { useState, useEffect } from "react";
import AnimeList from "@/componentes/AnimeList";
import AnimeDetails from "@/componentes/AnimeDetails";
import AnimeForm from "@/componentes/AnimeForm";
import EpisodeList from "@/componentes/EpisodeList";
import EpisodeForm from "@/componentes/EpisodeForm";

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
    <section class="seila">
    <div>
      <header>
        <h1>Gerente Anime</h1>
      </header>
      <main>
        <section>
          <h2>Lista de animes</h2>
          <AnimeList animes={animeList} onSelect={setSelectedAnime} />
        </section>
        <section>
          <h2>Detalhes do anime</h2>
          {selectedAnime ? <AnimeDetails anime={selectedAnime} /> : <p>Selecione o detalhe do anime</p>}
        </section>
        <section>
          <h2>Adicionar novo anime</h2>
          <AnimeForm onAdd={addAnime} />
        </section>
        <section>
          <h2>Lista de episódios</h2>
          <EpisodeList episodes={episodeList} onSelect={setSelectedEpisode} />
        </section>
        <section>
          <h2>Detalhes do episódio</h2>
          {selectedEpisode ? (
            <div>
              <p>Titulo: {selectedEpisode.title}</p>
              <p>Numero do episodio: {selectedEpisode.number}</p>
              <p>Descrição: {selectedEpisode.description}</p>
            </div>
          ) : (
            <p>Selecione um episódio para ver detalhes</p>
          )}
        </section>
        <section>
          <h2>Adicionar novo episódio</h2>
          <EpisodeForm onAdd={addEpisode} />
        </section>
      </main>
    </div>
    </section>
  );
};

export default App;
