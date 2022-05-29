import React from 'react';
import HP from '../img/HP.png';
import '../Styles/computer.scss';
import AudioPlayer from './AudioPlayer';
import PowerAssets from './PowerAssets';

export default function Computer(){

    return (
        <>
            <div className="pc-container">
                <div className="pc">
                    <div className="inner-elements-container">
                        <div className="inner-element"></div>
                        <div className="inner-element periferal-container">
                            <div className='disc-player'>
                                <div className="inner-player"></div>
                            </div>
                            <div className="pItem-container">
                                <div className="aux-Container">
                                    <img id="headPhones" src={HP}></img>
                                    <div id="aux"></div>
                                </div>
                                <AudioPlayer/>
                            </div>
                        </div>
                        <div className="inner-element"></div>
                        <div className="inner-element"></div>
                        <div id="last-element">
                            <div className="memory-container">
                                <div className="memory-outlet">
                                    <div id='inner-left' />
                                    <div id='inner-center' />
                                    <div id='inner-right' />
                                </div>
                                <div id='empty-outlet'></div>
                            </div>
                            <PowerAssets/>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}