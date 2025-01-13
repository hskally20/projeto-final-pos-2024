import React, { useState, useEffect } from "react";
import AnimeList from "@/componentes/AnimeList";
import AnimeDetails from "@/componentes/AnimeDetails";
import AnimeForm from "@/componentes/AnimeForm";
import EpisodeList from "@/componentes/EpisodeList";
import EpisodeForm from "@/componentes/EpisodeForm";

import AnimeComments from "@/componentes/AnimeComments";
import CommentForm from "@/componentes/CommentForm";
import axios from "axios";

const App = () => {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [animeList, setAnimeList] = useState([]);
  const [episodeList, setEpisodeList] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // Estado para armazenar os comentários do anime selecionado
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Buscar lista de animes da API (Exemplo de chamada)
    axios.get("http://127.0.0.1:8000/api/animes/")
      .then(response => {
        setAnimeList(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar lista de animes", error);
      });
  }, []);

  useEffect(() => {
    if (selectedAnime) {
      // Buscar os comentários do anime selecionado
      axios.get(`http://127.0.0.1:8000/api/comments/?anime=${selectedAnime.id}`)
        .then(response => {
          setComments(response.data);
        })
        .catch(error => {
          console.error("Erro ao buscar comentários", error);
        });
    }
  }, [selectedAnime]);

  const addAnime = (newAnime) => {
    setAnimeList([...animeList, newAnime]);
  };

  const addEpisode = (newEpisode) => {
    setEpisodeList([...episodeList, newEpisode]);
  };

  // Função para adicionar o novo comentário
  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]); // Atualiza a lista de comentários com o novo comentário
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

        {/* Selecionei Anime, agora podemos adicionar e ver comentários */}
        {selectedAnime && (
          <>
            <section>
              <h2>Comments for {selectedAnime.name}</h2>
              <AnimeComments comments={comments} />
            </section>
            <section>
              <h2>Add New Comment</h2>
              <CommentForm animeId={selectedAnime.id} onAddComment={handleAddComment} />
            </section>
          </>
        )}
      </main>
    </div>
    </section>
  );
};

export default App;
