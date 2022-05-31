import React, {createContext, useEffect, useState} from 'react';
import '../Styles/PowerAssets.scss';
import powerSymbol from "../img/powerSymbol.png";
import resetSymbol from "../img/resetSymbol.png";
import { usePower } from '../Context/usePower';


export default function PowerAssets(){
    //React hooks for the small Green and Red lights
    const [redState, setRedState] = useState('redLightInactive');
    const {isGreen, setIsGreen} =usePower();
    
    
    
    

    //Changes the state of the red Light when pressed awaits 5 seconds and changes to the original state
    const changeRedState = () => {
        if (redState !== 'redLightActive'){
            setRedState('redLightActive');
            setTimeout(() => {
                console.log('waiting');
                setRedState('redLightInactive');
                window.location.reload();
            }, 3000);
            
        }   
    }

    
    
    return (
            <div id='alignment'>
                <button id='resetButton' className='mainBtn' onClick={changeRedState}  >
                    <img id='rImage' src={resetSymbol}/>
                </button>
                <button id='powerButton' className='mainBtn' onClick={() => {
                    setIsGreen(!isGreen);
                }}>
                    
                    <img id='pImage' src={powerSymbol}/>
                </button>
                <div className='lightContainer'>
                    <div className='light' style={{backgroundColor: isGreen ? 'rgb(0, 255, 0)': 'green'}} ></div>
                    <div className='light' id={redState}></div>
                </div>
                
            </div>
    );
}