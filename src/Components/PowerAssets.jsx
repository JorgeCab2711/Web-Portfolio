import React, {createContext, useState} from 'react';
import '../Styles/PowerAssets.scss';
import powerSymbol from "../img/powerSymbol.png";
import resetSymbol from "../img/resetSymbol.png";
import { PowerContext } from '../Context/Context';
import Screen from './Screen';


export default function PowerAssets(){
    //React hooks for the small Green and Red lights
    const [greenState, setGreenState] = useState('greenLightInactive');
    const [redState, setRedState] = useState('redLightInactive');
    
    
    //Changes the state of the green Light when pressed
    const changeGreenState = () => {
        if (greenState !== 'greenLightActive'){
            setGreenState('greenLightActive');
           
        }
        else{
            setGreenState('greenLightInactive');
            
            
        }
    }

    //Changes the state of the red Light when pressed awaits 5 seconds and changes to the original state
    const changeRedState = () => {
        if (redState !== 'redLightActive'){
            setRedState('redLightActive');
            setTimeout(() => {
                console.log('waiting');
                setRedState('redLightInactive');
            }, 5000);
            
        }
        
    }
    
    return (
        
        <PowerContext.Provider value={{greenState, setGreenState}}>
            
            <div id='alignment'>
                <button id='resetButton' className='mainBtn' onClick={changeRedState}  >
                    <img id='rImage' src={resetSymbol}/>
                </button>
                <button id='powerButton' className='mainBtn' onClick={changeGreenState}>
                    Hola
                    <img id='pImage' src={powerSymbol}/>
                </button>
                <div className='lightContainer'>
                    <div className='light' id={greenState} ></div>
                    <div className='light' id={redState}></div>
                </div>
            </div>
        </PowerContext.Provider>
      
       
        
        
    );
}