import React from 'react';
import '../Styles/About.scss';

export default function About() {
  return (
    <div className="about-container">
      <h1>About this page:</h1>
      <p>
        The development on this page was possible by using the following technologies:
        <br />
        -ReactJS as the framework.
        <br />
        -React Hooks.
        <br />
        -Babel for older js compatibility.
        <br />
        -webpack and webpack loaders.
        <br />
        -eslint for better code practices.
        <br />
      </p>
    </div>
  );
}
