import React, { Component } from 'react';
class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
      <section id="buttons">
      <button id="previous" onClick={this.props.handlePrevClick}>
      <span>{"|<"}</span>
      </button>
      <button id="play-pause" onClick={this.props.handleSongClick}>
      <span>{this.props.isPlaying ? "||" : ">"}</span>
      </button>
      <button id="next" onClick={this.props.handleNextClick}>
      <span>{">|"}</span>
      </button>
      </section>
      <section id="time-control">
      <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
      <input
      type="range"
      className="seek-bar"
      value={(this.props.currentTime / this.props.duration) || 0}
      max="1"
      min="0"
      step="0.01"
      onChange={this.props.handleTimeChange}
      />
      <div className="total-time">{" Total Time: "}{this.props.formatTime(this.props.duration)}</div>
      </section>
      <section id="volume-control">
      <input type="range"
      className="seek-bar"
      value={(this.props.volume || 0)}
      max="1"
      min="0.0"
      step="0.1"
      onChange={this.props.handleVolumeChange}
      />
      <div>{"Volume = " + this.props.volume}</div>
      </section>
      </section>
    );
  }
}
export default PlayerBar;
