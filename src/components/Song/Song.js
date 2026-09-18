import { Link } from 'react-router-dom';
import './Song.css';

const Song = ({ cancion, onAdd, isLibrary }) => {
  return (
    <div className="song-card">
      <div className="song-info">
        <Link to={`/song/${cancion.idAlbum}`} className="song-link">
          <h3>{cancion.strAlbum}</h3>
        </Link>
        <p className="song-meta">{cancion.strArtist} • {cancion.intYearReleased}</p>
      </div>
      
      <div className="song-actions">
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