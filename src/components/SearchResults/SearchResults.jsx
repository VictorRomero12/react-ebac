import Song from '../Song/Song';
import './SearchResults.css';

const SearchResults = ({ results, onAdd }) => {
  return (
    <section className="playlist-container">
      <h2>Resultados de búsqueda</h2>
      <div className="songs-list">
        {results.map((cancion) => (
          <Song 
            key={cancion.id} 
            cancion={cancion} 
            onAdd={onAdd} 
            isLibrary={false} 
          />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;