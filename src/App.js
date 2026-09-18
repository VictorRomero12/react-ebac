import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Library from './components/Library/Library';
import SongDetail from './components/SongDetail/SongDetail';
import { useFetch } from './hooks/useFetch';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('Coldplay'); 
  const [library, setLibrary] = useState([]);
  

const { data, loading, error } = useFetch(
    `/api/v1/json/2/searchalbum.php?s=${searchTerm}`
  );
  useEffect(() => {
    console.log(` La biblioteca se ha actualizado. Total de álbumes/canciones: ${library.length}`);
  }, [library]);

  const addToLibrary = (cancion) => {
    if (!library.find(item => item.idAlbum === cancion.idAlbum)) {
      setLibrary([...library, cancion]);
    } else {
      alert("¡Esto ya está en tu biblioteca!");
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const Home = () => (
    <>
      <SearchBar onSearch={handleSearch} />
      <main className="main-content">
        <section className="search-section">
          {loading && <p>Cargando datos...</p>}
          {error && (
            <div>
              <p className="error-msg">Hubo un problema al cargar los datos. Intenta nuevamente.</p>
              <button onClick={() => setSearchTerm(searchTerm)}>Reintentar</button>
            </div>
          )}
          {!loading && !error && data?.album && (
            <SearchResults results={data.album} onAdd={addToLibrary} />
          )}
          {!loading && !error && !data?.album && (
            <p>No se encontraron resultados para "{searchTerm}".</p>
          )}
        </section>
        
        <Library songs={library} />
      </main>
    </>
  );

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;