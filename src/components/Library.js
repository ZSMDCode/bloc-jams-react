import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
  render() {
    return (
      <section className='library'>
      {
        this.state.albums.map( (album, index) =>
        <Link to={`/album/${album.slug}`} key={index}>
        <h3><img className='library-image'src={album.albumCover} alt={album.title} />
        <div>{"Click here to explore the album: " + album.title}</div>
        <div>{album.artist}</div>
        <div>{album.songs.length} songs</div>
        </h3>
        </Link>
      )
    }
    </section>
  );
}
}
export default Library;
