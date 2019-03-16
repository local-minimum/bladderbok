import React, { Component } from 'react';

const aboutStyle = {
    position: 'fixed',
    bottom: 0,
    right: '2%',
    padding: '2px 10px',
    fontSize: 'small',
    background: '#ff9f00',
    maxWidth: '90%',
    lineHeight: 0.4,
    fontFamily: 'arial',
}

const styleH1 = {
  fontSize: '110%',
  fontWeight: 'bold',
  marginBottom: '0.5em',
  lineHeight: 1.0,
}

const styleSpacer = {
  height: '0.25em',
}

const styleClicker = {
  userDrag: 'none',
  userSelect: 'none',
  MozUserSelect: 'none',
  MozUserDrag: 'none',
  WebkitUserDrag: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
  float: 'right',
  paddingLeft: '1em',
  cursor: 'pointer',
}


export default class BokAbout extends Component {
  constructor(props) {
      super(props);
      this.state = { expanded: true };
  }

  render() {
    const { expanded } = this.state;
    if (expanded) {
      return (
        <div style={aboutStyle}>
          <h1 style={styleH1}>Denna bok ger dig svar på viktiga frågor som</h1>
          <p><em>Var har du glömt stövlarna?</em></p>
          <p><em>Var är tårtan?</em></p>
          <p><em>Vad har du sparat bakom kiosken?</em></p>
          <div style={styleSpacer}/>
          <p>Mycket nöje!</p>
          <div style={styleSpacer}/>
          <p>Anna Hedenrud, författare och illustratör<span title="Minimera" style={styleClicker} onClick={() => {this.setState({expanded: false})}}>▼</span></p>
        </div>
      );
    }
    return (
      <div style={aboutStyle}>
          <p>Av: Anna Hedenrud<span title="Expandera" style={styleClicker} onClick={() => {this.setState({expanded: true})}}>▲</span></p>
      </div>
    );
  }
}
