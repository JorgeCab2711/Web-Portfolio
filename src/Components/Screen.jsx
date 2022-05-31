import React, {useState} from 'react';
import '../Styles/Screen.scss';
import { usePower } from '../Context/usePower';
import gitHub from '../img/gitLogo.png';
import linkLogo from '../img/LILogo.png';
import IG from '../img/IGlogo.png';
import disc from '../img/discordLogo.png';
import RenderIntro from './RenderIntro';
import Calculadora from './Demo_Proyects/Calculadora/Calculadora'
import HomeBtn from '../img/home.png';
import file from '../img/file.png';
import chat from '../img/chat.png';



const pagesComponets = {
    intro:      <RenderIntro/>,
    calculadora: <Calculadora/>,
    chat: <iframe src='http://some-webpage.com/Laboratorios/lab5java/index.html'/>,
};

const pages = {
    INTRO: 'intro',
    CALCULADORA: 'calculadora',
    CHAT: 'chat',
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
                    <div className="content">{pagesComponets[page]}</div>
                    <div className='last-row-container'>
                        <button className='last-row-btn' onClick={() => {
                            setPage(pages.INTRO)
                        }}>
                            <img className='logo' src={HomeBtn}/>
                        </button>
                        <div className='proyect-container'>
                            <div className='header'>Proyects I've made</div>
                            <div className='proyect'>
                                <button className='last-row-btn' onClick={() => {
                                    setPage(pages.CALCULADORA)}}>
                                        <img className='logo' src={file}/>
                                </button>
                            </div>
                            <div className='proyect'>
                                <button className='last-row-btn' onClick={() => {
                                    setPage(pages.CHAT)}}>
                                        <img className='logo' src={chat}/>
                                </button>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
        );
    }
    return(
        <div className='screen'>Is Off</div>
    );
}