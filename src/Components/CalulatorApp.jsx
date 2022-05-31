import React from 'react';
import calculatorHTML from '../Demo_Proyects/Calculadora/index.html';


export default function CalulatorApp(){
    
    return (
        <div dangerouslySetInnerHTML={{__html: calculatorHTML}}/>
    );
}