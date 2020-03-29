import React, { Component } from 'react';
import $ from 'jquery';

import flipTo1 from './png/flip_to_1.png';
import flipTo2 from './png/flip_to_2.png';
import flipTo3 from './png/flip_to_3.png';
import flipTo4 from './png/flip_to_4.png';
import flipTo5 from './png/flip_to_5.png';
import flipTo6 from './png/flip_to_6.png';

import './BookPage.css';

const Arrows = [null, flipTo1, flipTo2, flipTo3, flipTo4, flipTo5, flipTo6];

const baseStyle = {
  background: '#991',
  position: 'relative',
};

const imgStyle = {
  height: '100%',
  userDrag: 'none',
  userSelect: 'none',
  MozUserSelect: 'none',
  MozUserDrag: 'none',
  WebkitUserDrag: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
  cursor: 'pointer',
}

const hintStyle = {
  position: 'absolute',
  bottom: 0,
  fontSize: '175%',
  color: '#0007',
  userDrag: 'none',
  userSelect: 'none',
  MozUserSelect: 'none',
  MozUserDrag: 'none',
  WebkitUserDrag: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
  cursor: 'pointer',
};

const hintNextStyle = {
  right: 0,
}

const hintPrevStyle = {
  left: 0,
}

const pageFlipThreshold = 0.4;

const hintTitle = {
  sv: 'Bläddra till nästa sida',
  en: 'Flip to the next page',
}

export default class BookPage extends Component {
  constructor(props) {
      super(props);
      this.imgRef = React.createRef();
      this.state = { lastClick: new Date(), showNextHint: false, showPrevHint: false };
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onMouseExit = this.onMouseExit.bind(this);
      this.onClick = this.onClick.bind(this);
  }

  getRelX(inputX) {
    const { left } = $(this.imgRef.current).offset();
    const { width } = this.props;
    return (inputX - left) / width;
  }

  onMouseMove(evt) {
    const relImgX = this.getRelX(evt.pageX);
    this.setState({
      showNextHint: (relImgX > 1 - pageFlipThreshold),
      showPrevHint: (relImgX < pageFlipThreshold),
    });
  }

  onMouseExit() {
    this.setState({ showNextHint: false, showPrevHint: false });
  }

  onClick(evt) {
    const relImgX = this.getRelX(evt.pageX);
    if (relImgX > 1 - pageFlipThreshold) this.props.onNextPage();
    if (relImgX < pageFlipThreshold) this.props.onPrevPage();
    this.setState({ lastClick: new Date() });
  }

  render() {
      const {
        width,
        height,
        page,
        forceNextHint,
        forcePrevHint,
        language,
        nextPageIdx,
        prevPageIdx,
        altText
      } = this.props;
      const { showNextHint, showPrevHint} = this.state;
      if (width == null || isNaN(width)) return <div />;
      const style = Object.assign({}, baseStyle, { width, height });
      if (page == null) return <div style={style} />;
      let RenderNextHint;
      let RenderPrevHint;
      if ((showPrevHint && forcePrevHint !== false) || forcePrevHint === true) {
        RenderPrevHint = <img
          className="previous-hint"
          title={hintTitle[language]}
          alt={hintTitle[language]}
          style={Object.assign({}, hintStyle, hintPrevStyle, { width: 0.1 * width })}
          src={Arrows[prevPageIdx]}
        />
      }
      if ((showNextHint && forceNextHint !== false) || forceNextHint === true) {
        RenderNextHint = <img
          title={hintTitle[language]}
          alt={hintTitle[language]}
          style={Object.assign({}, hintStyle, hintNextStyle, { width: 0.1 * width })}
          src={Arrows[nextPageIdx]}
        />
      }
      return (
        <div style={style}
          onClick={this.onClick}
          onMouseMove={this.onMouseMove}
          onMouseLeave={this.onMouseExit}
        >
          <img
            src={page}
            alt={altText == null ? 'No alt text set' : altText}
            style={imgStyle}
            ref={this.imgRef}
          />
          {RenderPrevHint}
          {RenderNextHint}
        </div>
      );
  }
}
