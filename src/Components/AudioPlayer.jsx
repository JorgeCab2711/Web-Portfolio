/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import '../Styles/AudioPlayer.scss';
import lofi from '../audio/lofi.mp3';
import playBtn from '../img/play.png';
import pauseBtn from '../img/pause.png';

export class AudioPlayer extends Component {
  state = {
    audio: new Audio(lofi),
    isPlaying: false,
    lastPressed: 'pause',
  };

  play = () => {
    const { isPlaying } = this.state;

    if (!isPlaying) {
      this.state.audio.play();
      this.setState({ isPlaying: true });
    }
  };

  pause = () => {
    const { isPlaying } = this.state;

    if (isPlaying) {
      this.state.audio.pause();
      this.setState({ isPlaying: false });
    }
  };

  render() {
    return (
      <div className="playNPause">
        <button className="boton" onClick={this.play}>
          <img className="pnpImage" src={playBtn} alt="Play" />
        </button>
        <button className="boton" onClick={this.pause}>
          <img className="pnpImage" src={pauseBtn} />
        </button>
      </div>
    );
  }
}

export default AudioPlayer;
