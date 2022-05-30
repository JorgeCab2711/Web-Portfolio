import React, { useContext } from 'react';
import '../Styles/Screen.scss';
import { PowerContext } from '../Context/Context';



export default function Screen(){
    const {greenState, setGreenState} = useContext(PowerContext);
    console.log('A',greenState)
    
    if(greenState === 'greenLightActive'){
        return(
            <div className='screen'>
                isOn
            </div>
        );
    }
    else if (greenState == 'greenLightInactive'){
        return(
            <div className='screen'>Is Off</div>
        );
    }
}