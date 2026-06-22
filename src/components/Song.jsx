import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { titulo, artista, album, duracion } = this.props;

    return (
      <div className="song-card">
        <div className="song-info">
          <h3>{titulo}</h3>
          <p className="song-meta">{artista} • {album}</p>
        </div>
        <div className="song-duration">
          <span>{duracion}</span>
        </div>
      </div>
    );
  }
}

export default Song;