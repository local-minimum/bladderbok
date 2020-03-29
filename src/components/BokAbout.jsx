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

const about = {
  sv: {
    title: 'Denna bok ger dig svar på viktiga frågor som',
    questions: [
      'Var har du glömt stövlarna?',
      'Var är tårtan?',
      'Vad har du sparat bakom kiosken?',
    ],
    fun: 'Mycket nöje!',
    credits: 'Anna Hedenrud, författare och illustratör',
    minimize: 'Minimera',
    expand: 'Expandera',
  },
  en: {
    title: 'This book answers crucial questions like',
    questions: [
      'Where did you hide the rubber boots?',
      'Where is the cake?',
      'What have you saved behind the shop?',
    ],
    fun: 'Have fun!',
    credits: 'Anna Hedenrud, author and illustrator',
    minimize: 'Minimize',
    expand: 'Expand',
  }
};

export default class BokAbout extends Component {
  constructor(props) {
      super(props);
      this.state = { expanded: false };
  }

  render() {
    const { language } = this.props;
    const { expanded } = this.state;
    const texts = about[language];
    if (expanded) {
      return (
        <div style={aboutStyle}>
          <h1 style={styleH1}>{texts.title}</h1>
          {
            texts.questions.map((q, i) => (
              <p key={`q-${i}`}><em>{q}</em></p>
            ))
          }
          <div style={styleSpacer}/>
        <p>{texts.fun}</p>
          <div style={styleSpacer}/>
          <p>{texts.credits}<span title={texts.minimize} style={styleClicker} onClick={() => {this.setState({expanded: false})}}>▼</span></p>
        </div>
      );
    }
    return (
      <div style={aboutStyle}>
          <p>Av: Anna Hedenrud<span title={texts.expanded} style={styleClicker} onClick={() => {this.setState({expanded: true})}}>▲</span></p>
      </div>
    );
  }
}
