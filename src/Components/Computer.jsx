import React from 'react';
import playImg from '../img/playBtn.png';
import '../Styles/computer.scss';
import useSound  from 'use-sound';
import lofi from '../audio/lofi.mp3';

export default function Computer(){
    const [play] = useSound(lofi);


    return (
        <div className="pc-container">
            <div className="pc">
                <div className="inner-elements-container">
                    <div className="inner-element"></div>
                    <div className="inner-element periferal-container">
                        <div className='disc-player'>
                            <div className="inner-player"></div>
                        </div>
                        <div className='buttons-container'>
                            <div id="aux"></div>
                            <button onClick={play}>
                                
                            </button>
                        </div>
                    </div>
                    <div className="inner-element"></div>
                    <div className="inner-element"></div>
                </div>
            </div>
        </div>
    );
}