import React, { useState } from "react";
import AnimeList from "@/componentes/AnimeList";
import AnimeDetails from "@/componentes/AnimeDetails";
import AnimeForm from "@/componentes/AnimeForm";

const App = () => {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [animeList, setAnimeList] = useState([]);

  const addAnime = (newAnime) => {
    setAnimeList([...animeList, newAnime]);
  };

  const handleAnimeSelect = (anime) => {
    setSelectedAnime(anime);
  };

  return (
    <div>
      <header>
        <h1>Anime Manager</h1>
      </header>
      <main>
        <section>
          <h2>Anime List</h2>
          <AnimeList animes={animeList} onSelect={handleAnimeSelect} />
        </section>
        <section>
          <h2>Anime Details</h2>
          {selectedAnime ? <AnimeDetails anime={selectedAnime} /> : <p>Select an anime to see details</p>}
        </section>
        <section>
          <h2>Add New Anime</h2>
          <AnimeForm onAdd={addAnime} />
        </section>
      </main>
    </div>
  );
};

export default App;
