import React from 'react';
import useContext from '../hooks/useContext';
import '../Styles/Screen.scss';

export default function Screen(){
    const isActiveGreen = useContext();
    console.log(isActiveGreen)
    if(isActiveGreen == 'greenLightActive'){
        return(
            <div className='screen'>
                isOn
            </div>
        );
    }
    else{
        return(

            <div className='screen'>Is Off</div>
        );
    }
}