import React from 'react';
import './Styles/styles.scss';
import Computer from './Components/Computer';
import Monitor from './Components/Monitor';
import { PowerProvider } from './Context/usePower';
function App() {
  return (
    <PowerProvider>
      <div className="overAllContainer">
        <div></div>
        <Computer />
        <Monitor />
      </div>
    </PowerProvider>
  );
}

export default App;
