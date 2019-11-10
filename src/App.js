import React from 'react';
import imac from './imac.png';
import keyboard from './keyboard.png';
import mouse from './mouse.png';
import glasses from './glasses.png';
import light_switch from './light-switch.png';
import desktop_image from './desktop-image.jpg';
import './App.css';

function App() {
  const isBackgroundDark = false;

  return (
    <div className="App">
      <div className={isBackgroundDark ? 'App-dark-header' : 'App-ligth-header'}>
        <div className="Desk">
          <img src={imac} className="App-logo" alt="imac" />
          <img src={keyboard} className="Keyboard-logo" alt="keyboard" />
          <img src={mouse} className="Mouse-logo" alt="mouse" />
          <img src={glasses} className="Glasses-logo" alt="glasses" />
        </div>
        <img src={desktop_image} className="Desktop-image-logo" alt="desktop_image" />
        <img src={light_switch} className="Light-switch-logo" alt="light_switch" />
      </div>
    </div>
  );
}

export default App;
