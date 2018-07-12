import React, { Component } from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom';
class Album extends Component {
  constructor(props) {
    super(props);
    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });
    this.state = {
      album: album
    };
  }
  render() {
    return (
      <section className="album">
      <section id="album-info">
      <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
      <div className="album-details">
      <h1 id="album-title">{this.state.album.title}</h1>
      <h2 className="artist">{this.state.album.artist}</h2>
      <div id="release-info">{this.state.album.releaseInfo}</div>
      </div>
      </section>
      <table id="song-list">
      <colgroup>
      <col id="song-number-column" Number/>
      <col id="song-title-column" Title />
      <col id="song-duration-column" Duration />
      </colgroup>
      <tbody>
      {
        this.state.album.songs.map( (songs, index) =>
        <Link to={`/album/${this.state.album.slug}`} key={index}>
        <tr>
        <div>Song Number:{index+1}</div>
        <div>Title:{songs.title}</div>
        <div>Duration:{songs.duration}sec</div>
        </tr>
        </Link>
      )
    }
    </tbody>
    </table>
    </section>
  );
}
}
export default Album;
