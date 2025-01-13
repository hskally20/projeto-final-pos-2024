import React, { useState } from "react";
import AnimeList from "./components/AnimeList";
import AnimeForm from "./components/AnimeForm";
import AnimeForm from "./components/CommentList";
import AnimeForm from "./components/teste";

function App() {
  const [editingAnime, setEditingAnime] = useState(null);

  const handleSave = () => {
    setEditingAnime(null);
  };

  return (
    <div>
      <h1>Anime Manager</h1>
      <AnimeList onEdit={setEditingAnime} />
      <AnimeForm currentAnime={editingAnime} onSave={handleSave} />
    </div>
  );
}

export default App;