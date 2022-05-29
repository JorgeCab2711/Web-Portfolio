import React, { Component } from "react";
import '../Styles/AudioPlayer.scss'
import lofi from "../audio/lofi.mp3";
import playBtn from "../img/play.png";
import pauseBtn from "../img/pause.png";


export class AudioPlayer extends Component {
  state = {
    audio: new Audio(lofi),
    isPlaying: false,
    lastPressed: 'pause'
  };


  play = () => {
    let isPlaying = this.state.isPlaying;

    if (!isPlaying) {
      this.state.audio.play();
      this.setState({ isPlaying: true });
    }
  };


  pause = () => {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.audio.pause();
      this.setState({ isPlaying: false });
    } 
  };

  render() {
    return (
      <div className="playNPause">
        <button className='boton' onClick={this.play}>
          <img className='pnpImage' src={playBtn}></img>
        </button>
        <button className='boton' onClick={this.pause}>
            <img className='pnpImage' src={pauseBtn}></img>
        </button>
      </div>
    );
}
}


export default AudioPlayer;