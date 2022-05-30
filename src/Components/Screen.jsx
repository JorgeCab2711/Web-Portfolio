import React, { useContext } from 'react';
import '../Styles/Screen.scss';
import { PowerContext, usePower } from '../Context/usePower';



export default function Screen(){
    const {isGreen} = usePower();
    console.log({isGreen})
    
    if(isGreen){
        return(
            <div className='screen'>
                isOn
            </div>
        );
    }
    return(
        <div className='screen'>Is Off</div>
    );
}