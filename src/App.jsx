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
    this.state = {
      language: 'sv',
      currentPages: [0, 0, 0, 0],
    };
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    this.handleCloseBook = this.handleCloseBook.bind(this);
    this.handleSetPages = this.handleSetPages.bind(this);
  }

  handleChangeLanguage(language) {
    this.setState({ language });
  }

  handleSetPages(pages) {
    this.setState({ currentPages: pages });
  }

  handleCloseBook() {
    this.setState({ currentPages: [0, 0, 0 , 0] });
  }
  
  render() {
    const { language, currentPages } = this.state;
    return (
      <div style={pageStyle} >
        <BokContainer
          ratio={IMAGE_WIDTH / IMAGE_HEIGHTS_TOTAL}
          marginTop={5}
          marginBottom={15}
          marginSides={5}
          language={language}          
          onSetPages={this.handleSetPages}
          currentPages={currentPages}
        />
        <BokAbout language={language} />        
        <SelectLanguage
          onSelectLanguage={this.handleChangeLanguage}
          onCloseBook={this.handleCloseBook}
          language={language}          
        />
      </div>
    );
  }
}
