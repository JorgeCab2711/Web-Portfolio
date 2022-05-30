import React, { useContext } from 'react';
import '../Styles/Screen.scss';
import { usePower } from '../Context/usePower';
import gitHub from '../img/gitLogo.png';
import linkLogo from '../img/LILogo.png';
import IG from '../img/IGlogo.png';
import disc from '../img/discordLogo.png';

export default function Screen(){
    const {isGreen} = usePower();
    
    
    if(true){
        
        return(
            <>
                <div className='screen'>
                    <div className='first-row'>
                        <div className='element'>GitHub</div>
                        <button  id='gitButton' className='rowBtn'>
                            <a href='https://github.com/JorgeCab2711'>
                                <img className='logo' src={gitHub}></img>
                            </a>
                        </button>
                        <div className='element'>LinkedIn</div>
                        <button  id='linkButton' className='rowBtn'>
                            <a href='https://www.linkedin.com/in/jorge-caballeros-pérez-b477251a0/'>
                                <img className='logo' src={linkLogo}></img>
                            </a>
                        </button>
                        <div className='element'>Discord</div>
                        <button  id='discButton' className='rowBtn'>
                            <a href='https://discord.gg/2sCX5Bbs'>
                                <img className='logo' src={disc}></img>
                            </a>
                        </button>
                        <div className='element'>Instagram</div>
                        <button  id='IgButton' className='rowBtn'>
                            <a href='https://www.instagram.com/george_knight_27/'>
                                <img className='logo' src={IG}></img>
                            </a>
                        </button>
                    </div>
                    <div className='intro'>
                        <p className='console-animation '>
                            Hey! My name is George. Welcome!
                        </p>
                    </div>
                    <div>This is where the work done will be</div>
                </div>
                
            </>
            
        );
    }
    return(
        <div className='screen'>Is Off</div>
    );
}