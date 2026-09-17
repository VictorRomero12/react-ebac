import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import Library from './components/Library/Library';
import './App.css';

const App = () => {
  const cancionesFicticias = [
    { id: 1, titulo: "Starboy", artista: "The Weeknd", album: "Starboy", duracion: "3:50" },
    { id: 2, titulo: "Instant Crush", artista: "Daft Punk", album: "Random Access Memories", duracion: "5:37" },
    { id: 3, titulo: "Blinding Lights", artista: "The Weeknd", album: "After Hours", duracion: "3:20" },
    { id: 4, titulo: "Nightcall", artista: "Kavinsky", album: "Outrun", duracion: "4:18" }
  ];


  const [searchResults] = useState(cancionesFicticias);
  const [library, setLibrary] = useState([]);


  useEffect(() => {
    console.log(` La biblioteca se ha actualizado. Total de canciones: ${library.length}`);
  }, [library]);

  const addToLibrary = (cancion) => {
    // Evitar duplicados
    if (!library.find(item => item.id === cancion.id)) {
      setLibrary([...library, cancion]);
    } else {
      alert("Esta canción ya está en tu biblioteca");
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <SearchResults results={searchResults} onAdd={addToLibrary} />
        <Library songs={library} />
      </main>
    </div>
  );
}

export default App;