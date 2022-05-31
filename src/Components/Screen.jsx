import React, {useState} from 'react';
import '../Styles/Screen.scss';
import { usePower } from '../Context/usePower';
import gitHub from '../img/gitLogo.png';
import linkLogo from '../img/LILogo.png';
import IG from '../img/IGlogo.png';
import disc from '../img/discordLogo.png';
import MyRouter from './myRouter';
import RenderIntro from './RenderIntro';
import Calculadora from './Calculadora'

const pagesComponets = {
    intro:      <RenderIntro/>,
    calculadora: <Calculadora/>
};

const pages = {
    INTRO: 'intro',
    CALCULADORA: 'calculadora'
};

export default function Screen(){
    const {isGreen} = usePower();
    const [page, setPage] = useState(pages.INTRO);
    
    if(true){
        
        return(
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
                    <div>{pagesComponets[page]}</div>
                    <div style={{position: 'relative', top: '-50px'}}>
                        <button onClick={() => {
                            setPage(pages.INTRO)
                        }}>Some web Page</button>
                        <button onClick={() => {
                            setPage(pages.CALCULADORA)
                        }}>Some web Page 2</button>
                    
                    </div>
                </div>
        );
    }
    return(
        <div className='screen'>Is Off</div>
    );
}