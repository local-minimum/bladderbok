import React, { Component } from 'react';
import BokPageAnna1 from '../containers/BokPageAnna1';
import BokPageAnna2 from '../containers/BokPageAnna2';
import BokPageAnna3 from '../containers/BokPageAnna3';
import BokPageAnna4 from '../containers/BokPageAnna4';

const WAIT_UNTIL_ASSIST = 1000 * 2;

const baseStyle = {
  position: 'absolute', top: '50%', left: '50%',
  margin: 0, padding: 0, background: '#000',
};

export default class Bok extends Component {
  constructor(props) {
    super(props);
    this.state = { showHint: false, lastClick: new Date(), isOpen: false };
    this.showHint = this.showHint.bind(this);
    this.recievedClick = this.recievedClick.bind(this);
    this.onFlipAll = this.onFlipAll.bind(this);
  }

  componentDidMount() {
    window.setTimeout(this.showHint, WAIT_UNTIL_ASSIST + 1);
  }

  showHint() {
    const { showHint, lastClick } = this.state;
    if (!showHint && (new Date() - lastClick) > WAIT_UNTIL_ASSIST) {
      this.setState({ showHint: true });
    }
  }

  recievedClick() {
    this.setState({ showHint: false, lastClick: new Date() });
    // window.setTimeout(this.showHint, WAIT_UNTIL_ASSIST + 1);
  }

  onFlipAll() {
    this.setState({ isOpen: true, lastClick: new Date(), showHint: false });
    // window.setTimeout(this.showHint, WAIT_UNTIL_ASSIST + 1);
  }


  render() {
    const { width, height, offsetY, language } = this.props;
    const { showHint, isOpen } = this.state;
    const  style = Object.assign({}, baseStyle, {
      width, height,
      marginTop: -height * 0.5 + offsetY, marginLeft: -width * 0.5,
    });
    if (width == null || isNaN(width)) return <div />;
    return (
      <div style={style}>
        <BokPageAnna1 height={height} width={width} isOpen={isOpen} onFlipAll={this.onFlipAll} onInteraction={this.recievedClick} language={language}/>
        <BokPageAnna2 height={height} width={width} isOpen={isOpen} onFlipAll={this.onFlipAll} onInteraction={this.recievedClick} language={language}/>
        <BokPageAnna3 height={height} width={width} isOpen={isOpen} onFlipAll={this.onFlipAll} onInteraction={this.recievedClick} language={language}/>
        <BokPageAnna4 height={height} width={width} isOpen={isOpen} onFlipAll={this.onFlipAll} showHint={showHint} onInteraction={this.recievedClick} language={language} />
      </div>
    )
  }
}
