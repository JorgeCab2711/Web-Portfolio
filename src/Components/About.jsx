import React from 'react';
import '../Styles/About.scss';

export default function About() {
  return (
    <div className="about-container">
      <h1>About this page:</h1>
      <p>
        {'>>'}
        {' '}
        The development on this page was possible by using the following technologies:
        <br />
        {'-->'}
        {' '}
        ReactJS as the framework.
        <br />
        {'-->'}
        {' '}
        React Hooks.
        <br />
        {'-->'}
        {' '}
        Context API
        <br />
        {'-->'}
        {' '}
        Babel for older js compatibility.
        <br />
        {'-->'}
        {' '}
        webpack and webpack loaders.
        <br />
        {'-->'}
        {' '}
        eslint for better code practices.
        <br />
        {'-->'}
        {' '}
        sSCSS for easier styling.
        <br />
        Github for this project is uploaded and in my github:
        <a href="https://github.com/JorgeCab2711/Web-Portfolio" label="GithubLink">  Here</a>
      </p>
      <h1>About me:</h1>
      <p>
        I am a 3rd year Computer Science Engineer College student. Love programming and
        listening to horror stories while I do it, here are some of my skills:
        <br />
        <br />
        <br />

        <div className="skills">
          <div className="description">
            <div className="title">Web Development</div>
            <p>
              -HTML/CSS
              <br />
              -JavaScript
              <br />
              -React
              <br />
              -Git and Github
              <br />
              -Babel
              <br />
              -Eslint
              <br />
              -Context API
              <br />
              -AWS management
            </p>
          </div>
          <div className="description">
            <div className="title">As a programer in general</div>
            <p>
              -Java
              <br />
              -Python
              <br />
              -C++/C
              <br />
              -Unity Game Development / C#
              <br />
              -Algorithms and data Structures
              <br />
              -Linux
              <br />
              -Object Oriented Programming
              <br />
              -Microprocessor Programming
              <br />
              -PostgreSQL/Relational Databases
              <br />
              -HCI and Software Engineering
              <br />
            </p>
          </div>
          <div className="description">
            <div className="title">Extras</div>
            <p>
              -Figma
              <br />
              -Canva
              <br />
              -Filmora
              <br />
              -Microsoft Office
              <br />
              -VSCode
              <br />
              -VRoid Studio
              <br />
            </p>
          </div>
        </div>
      </p>
    </div>
  );
}
