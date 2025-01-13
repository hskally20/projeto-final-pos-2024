import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnimeList = () => {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Substitua pela URL da sua API Django
        axios.get('http://127.0.0.1:8000/api/')
            .then(response => {
                setAnimes(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Carregando...</div>;

    return (
        <div>
            <h1>Lista de Animes</h1>
            <ul>
                {animes.map(anime => (
                    <li key={anime.id}>{anime.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AnimeList;