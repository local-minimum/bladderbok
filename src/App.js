import React, { Component } from 'react';
import './App.css';
import BokContainer from './containers/BokContainer';
import BokAbout from './components/BokAbout';

const pageStyle = {
  backgroundColor: '#FFFAFA',
  width: '100%',
  height: '100%',
  position: 'fixed',
  left: 0,
  top: 0,
}

export default class App extends Component {
  render() {
    return (
      <div style={pageStyle} >
        <BokContainer
          ratio={435 / (109 + 109 + 190 + 190)}
          marginTop={5}
          marginBottom={15}
          marginSides={5}
        />
        <BokAbout />
      </div>
    );
  }
}
