import React from 'react';
import './Styles/styles.scss';
import Computer from './Components/Computer';
import Monitor from './Components/Monitor';
function App() {
  return (
    <div className="overAllContainer">
      <div></div>
      <Computer />
      <Monitor />
    </div>
  );
}

export default App;
