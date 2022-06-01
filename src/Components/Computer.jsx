/* eslint-disable import/no-named-as-default */
import React from 'react';
import HP from '../img/HP.png';
import '../Styles/computer.scss';
import AudioPlayer from './AudioPlayer';
import PowerAssets from './PowerAssets';

export default function Computer() {
  return (
    <div className="pc-container">
      <div className="pc">
        <div className="inner-elements-container">
          <div className="inner-element" />
          <div className="inner-element periferal-container">
            <div className="disc-player">
              <div className="inner-player" />
            </div>
            <div className="pItem-container">
              <div className="aux-Container">
                <img id="headPhones" src={HP} alt="Headphones" />
                <div id="aux" />
              </div>
              {/* Ambient music */}
              <AudioPlayer />
            </div>
          </div>
          <div className="inner-element" />
          <div className="inner-element" />
          <div id="last-element">
            <div className="memory-container">
              <div className="memory-outlet">
                <div id="inner-left" />
                <div id="inner-center" />
                <div id="inner-right" />
              </div>
              <div id="empty-outlet" />
            </div>
            {/* Power and Reset Button with respective lights and light efects */}
            <PowerAssets />

          </div>
        </div>
      </div>
    </div>
  );
}
