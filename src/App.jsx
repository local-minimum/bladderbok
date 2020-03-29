import React, { Component } from 'react';
import './App.css';
import BokContainer from './containers/BokContainer';
import BokAbout from './components/BokAbout';
import SelectLanguage from './components/SelectLanguage';
import { IMAGE_WIDTH, IMAGE_HEIGHTS_TOTAL } from './containers/util';

const pageStyle = {
  backgroundColor: '#FFFAFA',
  width: '100%',
  height: '100%',
  position: 'fixed',
  left: 0,
  top: 0,
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { language: 'sv' };
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  handleChangeLanguage(language) {
    this.setState({ language });
  }
  
  render() {
    const { language } = this.state;
    return (
      <div style={pageStyle} >
        <BokContainer
          ratio={IMAGE_WIDTH / IMAGE_HEIGHTS_TOTAL}
          marginTop={5}
          marginBottom={15}
          marginSides={5}
          language={language}
        />
        <BokAbout language={language} />
        <SelectLanguage onSelectLanguage={this.handleChangeLanguage} language={language} />
      </div>
    );
  }
}
