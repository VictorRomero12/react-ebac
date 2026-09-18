import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './SongDetail.js';

const SongDetail = () => {
  const { id } = useParams(); 
const { data, loading, error } = useFetch(
    `/api/v1/json/2/album.php?m=${id}`
  );
  if (loading) return <h2 className="loading-msg">Cargando detalles...</h2>;
  if (error) return <h2 className="error-msg">Hubo un problema: {error}</h2>;
  if (!data || !data.album) return <h2 className="error-msg">No se encontraron detalles.</h2>;

  const album = data.album[0];

  return (
    <div className="song-detail-container">
      <Link to="/" className="back-link">← Volver a la búsqueda</Link>
      
      <div className="detail-card">
        <img src={album.strAlbumThumb || 'https://via.placeholder.com/300'} alt={album.strAlbum} className="detail-image" />
        <div className="detail-info">
          <h2>{album.strAlbum}</h2>
          <h3>Artista: {album.strArtist}</h3>
          <p><strong>Año de lanzamiento:</strong> {album.intYearReleased}</p>
          <p><strong>Género:</strong> {album.strGenre || 'Desconocido'}</p>
          <p className="description">{album.strDescriptionEN?.substring(0, 300)}...</p>
        </div>
      </div>
    </div>
  );
};

export default SongDetail;