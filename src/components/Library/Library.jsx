import Song from '../Song/Song';
import './Library.css';

const Library = ({ songs }) => {
  return (
    <section className="library-container">
      <h2>Mi Biblioteca</h2>
      
      {songs.length === 0 ? (
        <div className="empty-state">
          <p>Tu biblioteca está vacía. ¡Agrega algunas canciones!</p>
        </div>
      ) : (
        <div className="songs-list">
          {songs.map((cancion) => (
            <Song 
              key={`lib-${cancion.id}`} 
              cancion={cancion} 
              isLibrary={true} 
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Library;