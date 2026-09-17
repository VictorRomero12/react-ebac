import './Song.css';

const Song = ({ cancion, onAdd, isLibrary }) => {
  return (
    <div className="song-card">
      <div className="song-info">
        <h3>{cancion.titulo}</h3>
        <p className="song-meta">{cancion.artista} • {cancion.album}</p>
      </div>
      
      <div className="song-actions">
        <span className="song-duration">{cancion.duracion}</span>
        {!isLibrary && onAdd && (
          <button className="add-btn" onClick={() => onAdd(cancion)}>
            + Agregar
          </button>
        )}
      </div>
    </div>
  );
};

export default Song;