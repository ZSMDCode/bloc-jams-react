import React, { Component } from 'react';
import albumData from './../data/albums';
class Album extends Component {
  constructor(props) {
    super(props);
    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });
    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      currentlyHovered: false
    };
    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }
  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }
  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }
  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }
  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }
  handleSongHover(index) {
    console.log("I'm hovered over!");
    console.log(this.state.isPlaying);
    console.log(this.state.currentlyHovered);
    this.setState({ currentlyHovered: index});
  }
  handleSongUnhovered(index) {
    console.log("I'm unhovered!");
    console.log(this.state.isPlaying);
    console.log(this.state.currentlyHovered);
    this.setState({ currentlyHovered: false});
  }
  buttonHovered(song, index) {
    console.log(index);
    if (this.state.isPlaying === true && this.state.currentSong === song){
      console.log("Pause");
      return <span className="icon ion-md-pause"></span>
    }
    else if (this.state.isPlaying === false && this.state.currentSong === song)
    {
      console.log("Play");
      return <span className="icon ion-md-play"></span>
    }
    else if (this.state.currentlyHovered === index)
    {
      console.log("Play");
      return <span className="icon ion-md-play"></span>;
    }
    else
    console.log("Index");
    return <span>{index + 1}</span>
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
      <col id="song-number-column"/>
      <col id="song-title-column"/>
      <col id="song-duration-column"/>
      </colgroup>
      <tbody>
      {
        this.state.album.songs.map((song, index)=>
        <tr className="song" key={index} onClick={() => this.handleSongClick(song)}
        onMouseEnter={() => this.handleSongHover(song, index)}
        onMouseLeave={() => this.handleSongUnhovered(song, index)}
        >
        <td>{this.buttonHovered(song,index)}</td>
        <td>{song.title}</td>
        <td>{song.duration}</td>
        </tr>
      )
    }
    </tbody>
    </table>
    </section>
  );
}
}
export default Album;
