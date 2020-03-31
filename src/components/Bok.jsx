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
    this.state = {
      forceNextHint: null,
      lastClick: new Date(),
    };
    this.showHint = this.showHint.bind(this);
    this.filpOne = this.filpOne.bind(this);
    this.onFlipAll = this.onFlipAll.bind(this);
  }

  componentDidMount() {
    window.setTimeout(this.showHint, WAIT_UNTIL_ASSIST + 1);
  }

  showHint() {
    const { showHint, lastClick } = this.state;
    if (!showHint && (new Date() - lastClick) > WAIT_UNTIL_ASSIST) {
      this.setState({ forceNextHint: true });
    }
  }

  filpOne(newPage, pageIdx) {
    const { currentPages, onSetPages } = this.props;
    this.setState({
      forceNextHint: null,
      lastClick: new Date(),
    },
      () => onSetPages(currentPages.map((page, idx) => idx === pageIdx ? newPage : page))
    );
  }

  onFlipAll(newPage) {
    const { currentPages, onSetPages } = this.props;
    this.setState({
      lastClick: new Date(),
      forceNextHint: null,
    },
      () => onSetPages(currentPages.map(_ => newPage))
    );
  }


  render() {
    const { width, height, offsetY, language, currentPages } = this.props;
    const { forceNextHint } = this.state;
    const  style = Object.assign({}, baseStyle, {
      width, height,
      marginTop: -height * 0.5 + offsetY, marginLeft: -width * 0.5,
    });
    if (width == null || isNaN(width)) return <div />;
    return (
      <div style={style}>
        <BokPageAnna1
          height={height}
          width={width}
          onInteraction={this.filpOne}
          language={language}
          currentPage={currentPages[0]}
        />
        <BokPageAnna2
          height={height}
          width={width}
          onInteraction={this.filpOne}
          language={language}
          currentPage={currentPages[1]}
        />
        <BokPageAnna3
          height={height}
          width={width}
          onInteraction={this.filpOne}
          language={language}
          currentPage={currentPages[2]}
        />
        <BokPageAnna4
          height={height}
          width={width}
          claimAll={currentPages[3] < 1}
          forceNextHint={forceNextHint}
          forcePrevHint={currentPages[3] === 0 ? false : null}
          onInteraction={currentPages[3] === 0 ? this.onFlipAll : this.filpOne}
          language={language}
          currentPage={currentPages[3]}
        />
      </div>
    )
  }
}
