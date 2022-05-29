import React, { useRef } from 'react';
import '../Styles/PowerAssets.scss';
import powerSymbol from "../img/powerSymbol.png";
import resetSymbol from "../img/resetSymbol.png";

export default function PowerAssets(){
    const greenState = useRef('greenLightInactive')

    return (
        <>
            <div id='alignment'>
                <button id='resetButton' className='mainBtn'>
                    <img id='rImage' src={resetSymbol}/>
                </button>
                <button id='powerButton' className='mainBtn'>
                    <img id='pImage' src={powerSymbol}/>
                </button>
                <div className='lightContainer'>
                    <div className='light' id={greenState.current} ></div>
                    <div className='light' id='redLightInactive'></div>
                </div>
            </div>
        </>
        
    );
}