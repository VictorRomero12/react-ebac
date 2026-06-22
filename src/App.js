import React, { Component } from 'react';
import Header from './components/Header';
import Song from './components/Song';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log("🚀 La aplicación de la Biblioteca Musical se ha cargado correctamente.");
  }

  render() {
    const canciones = [
      { id: 1, titulo: "Starboy", artista: "The Weeknd", album: "Starboy", duracion: "3:50" },
      { id: 2, titulo: "Instant Crumb", artista: "Daft Punk", album: "Random Access Memories", duracion: "5:37" },
      { id: 3, titulo: "Blinding Lights", artista: "The Weeknd", album: "After Hours", duracion: "3:20" },
      { id: 4, titulo: "Nightcall", artista: "Kavinsky", album: "Outrun", duracion: "4:18" }
    ];

    return (
      <div className="app-container">
        <Header />
        
        <main className="playlist-container">
          <h2>Mi Playlist</h2>
          <div className="songs-list">
            {canciones.map((cancion) => (
              <Song 
                key={cancion.id}
                titulo={cancion.titulo}
                artista={cancion.artista}
                album={cancion.album}
                duracion={cancion.duracion}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;