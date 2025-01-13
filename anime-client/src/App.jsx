import React, { useState, useEffect } from "react";
import AnimeList from "@/componentes/AnimeList";
import AnimeDetails from "@/componentes/AnimeDetails";
import AnimeForm from "@/componentes/AnimeForm";
import EpisodeList from "@/componentes/EpisodeList";
import EpisodeForm from "@/componentes/EpisodeForm";
import AnimeComments from "@/componentes/AnimeComments";
import CommentForm from "@/componentes/CommentForm";
import { getAnimeList, deleteAnime, updateAnime, createAnime } from './fuctions/anime';
import { getEpisodeList, deleteEpisode, updateEpisode, createEpisode } from './fuctions/episodio';
import { getCommentsByAnimeId, createComment } from './fuctions/comentario';

// Função genérica para manipulação de dados (adicionar, editar e excluir)
const handleDataChange = (dataList, setDataList, apiMethod, methodType = 'POST') => {
  return (newData) => {
    const apiCall = methodType === 'POST' ? apiMethod(newData) : apiMethod(newData.id, newData);

    apiCall
      .then((response) => {
        if (methodType === 'POST') {
          setDataList([...dataList, response]);
        } else if (methodType === 'DELETE') {
          setDataList(dataList.filter(item => item.id !== newData.id));
        } else if (methodType === 'PUT') {
          setDataList(dataList.map(item => (item.id === newData.id ? response : item)));
        }
      })
      .catch(console.error);
  };
};

const App = () => {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [animeList, setAnimeList] = useState([]);
  const [episodeList, setEpisodeList] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [comments, setComments] = useState([]);

  // Carregar lista de animes e episódios
  useEffect(() => {
    getAnimeList().then(setAnimeList).catch(console.error);
  }, []);

  useEffect(() => {
    if (selectedAnime) {
      getCommentsByAnimeId(selectedAnime.id).then(setComments).catch(console.error);
      getEpisodeList(selectedAnime.id).then(setEpisodeList).catch(console.error);
    }
  }, [selectedAnime]);

  // Criar, editar e excluir anime
  const handleAddAnime = handleDataChange(animeList, setAnimeList, createAnime);
  const handleDeleteAnime = handleDataChange(animeList, setAnimeList, deleteAnime, 'DELETE');
  const handleEditAnime = handleDataChange(animeList, setAnimeList, updateAnime, 'PUT');

  // Criar, editar e excluir episódio
  const handleAddEpisode = handleDataChange(episodeList, setEpisodeList, createEpisode);
  const handleDeleteEpisode = handleDataChange(episodeList, setEpisodeList, deleteEpisode, 'DELETE');
  const handleEditEpisode = handleDataChange(episodeList, setEpisodeList, updateEpisode, 'PUT');

  // Criar comentário
  const handleAddComment = handleDataChange(comments, setComments, createComment);

  return (
    <div>
      <header>
        <h1>Gerente Anime</h1>
      </header>
      <main>
        <section>
          <h2>Lista de Animes</h2>
          <AnimeList
            animes={animeList}
            onSelect={setSelectedAnime}
            onDelete={handleDeleteAnime}
            onEdit={handleEditAnime}
          />
        </section>
        <section>
          <h2>Detalhes do Anime</h2>
          {selectedAnime ? <AnimeDetails anime={selectedAnime} /> : <p>Selecione um anime para ver detalhes</p>}
        </section>
        <section>
          <h2>Adicionar Novo Anime</h2>
          <AnimeForm onAdd={handleAddAnime} />
        </section>
        <section>
          <h2>Lista de Episódios</h2>
          <EpisodeList
            episodes={episodeList}
            onSelect={setSelectedEpisode}
            onDelete={handleDeleteEpisode}
            onEdit={handleEditEpisode}
          />
        </section>
        <section>
          <h2>Detalhes do Episódio</h2>
          {selectedEpisode ? (
            <div>
              <p>Título: {selectedEpisode.title}</p>
              <p>Número do Episódio: {selectedEpisode.number}</p>
              <p>Descrição: {selectedEpisode.description}</p>
            </div>
          ) : (
            <p>Selecione um episódio para ver detalhes</p>
          )}
        </section>
        <section>
          <h2>Adicionar Novo Episódio</h2>
          <EpisodeForm onAdd={handleAddEpisode} />
        </section>

        {selectedAnime && (
          <>
            <section>
              <h2>Comentários para {selectedAnime.title}</h2>
              <AnimeComments animeId={selectedAnime.id} />
            </section>
            <section>
              <h2>Adicionar Novo Comentário</h2>
              <CommentForm animeId={selectedAnime.id} onAddComment={handleAddComment} />
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
