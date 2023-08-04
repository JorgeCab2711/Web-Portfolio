/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import '../Styles/Screen.scss';
import { usePower } from '../Context/usePower';
import gitHub from '../img/gitlogo.png';
import linkLogo from '../img/LIlogo.png';
import IG from '../img/IGlogo.png';
import disc from '../img/discordLogo.png';
import RenderIntro from './RenderIntro';
import Calculadora from './Demo_Proyects/Calculadora/Calculadora';
import About from './About';
import HomeBtn from '../img/home.png';
import file from '../img/file.png';
import chat from '../img/chat.png';
import resume from '../img/resume.png';

const pagesComponets = {
  intro: <RenderIntro />,
  calculadora: <Calculadora />,
  chat: <iframe src="http://some-webpage.com/Laboratorios/lab5java/index.html" title="Calculadora" />,
  about: <About />,
};

const pages = {
  INTRO: 'intro',
  CALCULADORA: 'calculadora',
  CHAT: 'chat',
  ABOUT: 'about',
};

export default function Screen() {
  const { isGreen } = usePower();
  const [page, setPage] = useState(pages.INTRO);

  if (isGreen) {
    return (
      <div className="screen">
        <div className="first-row">
          <div className="element">GitHub</div>
          <button id="gitButton" className="rowBtn">
            <a href="https://github.com/JorgeCab2711">
              <img className="logo" src={gitHub} />
            </a>
          </button>
          <div className="element">LinkedIn</div>
          <button id="linkButton" className="rowBtn">
            <a href="https://www.linkedin.com/in/jorge-caballeros-pérez-b477251a0/">
              <img className="logo" src={linkLogo} />
            </a>
          </button>
          <div className="element">Discord</div>
          <button id="discButton" className="rowBtn">
            <a href="https://discord.gg/2sCX5Bbs">
              <img className="logo" src={disc} />
            </a>
          </button>
          <div className="element">Instagram</div>
          <button id="IgButton" className="rowBtn">
            <a href="https://www.instagram.com/george_knight_27/">
              <img className="logo" src={IG} />
            </a>
          </button>
        </div>
        <div className="content">{pagesComponets[page]}</div>
        <div className="last-row-container">
          <button
            className="last-row-btn"
            onClick={() => {
              setPage(pages.INTRO);
            }}
          >
            <img className="logo" src={HomeBtn} />
          </button>
          <div className="proyect-container">
            <div className="header">Small Projects</div>
            <div className="proyect">
              <button
                className="last-row-btn"
                onClick={() => {
                  setPage(pages.CALCULADORA);
                  // eslint-disable-next-line no-alert
                  alert('A calculator using react hooks');
                }}
              >
                <img className="logo" src={file} />
              </button>
            </div>
            <div className="proyect">
              <button
                className="last-row-btn"
                onClick={() => {
                  setPage(pages.CHAT);
                  // eslint-disable-next-line no-alert
                  alert('A chat using JavaScript only');
                }}
              >
                <img className="logo" src={chat} />
              </button>
            </div>
          </div>
          <div className="download">
            About me and these page
            <div id="resume">
              <button className="last-row-btn" label="Resume">
                <img
                  className="logo"
                  src={resume}
                  onClick={() => {
                    setPage(pages.ABOUT);
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="screen">Is Off</div>
  );
}
