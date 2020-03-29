import React, { Component } from 'react';
import $ from 'jquery';

import flipTo1 from './png/flip_to_1.png';
import flipTo2 from './png/flip_to_2.png';
import flipTo3 from './png/flip_to_3.png';
import flipTo4 from './png/flip_to_4.png';
import flipTo5 from './png/flip_to_5.png';
import flipTo6 from './png/flip_to_6.png';

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
  right: 0,
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

const pageFlipThreshold = 0.4;

const hintTitle = {
  sv: 'Bläddra till nästa sida',
  en: 'Flip to the next page',
}

export default class BookPage extends Component {
  constructor(props) {
      super(props);
      this.imgRef = React.createRef();
      this.state = { lastClick: new Date(), showNextHint: false };
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
    this.setState({ showNextHint: (relImgX > 1 - pageFlipThreshold) });
  }

  onMouseExit() {
    this.setState({ showNextHint: false });
  }

  onClick(evt) {
    const relImgX = this.getRelX(evt.pageX);
    if (relImgX > 1 - pageFlipThreshold) this.props.onNextPage();
    if (relImgX < pageFlipThreshold) this.props.onPrevPage();
    this.setState({ lastClick: new Date(), showHint: false });
  }

  render() {
      const {
        width, height, page, forceNextHint, language,
        nextPageIdx, altText
      } = this.props;
      const { showNextHint} = this.state;
      if (width == null || isNaN(width)) return <div />;
      const style = Object.assign({}, baseStyle, { width, height });
      if (page == null) return <div style={style} />;
      let RenderHint;
      if ((showNextHint && forceNextHint !== false) || forceNextHint === true) {
        RenderHint = <img
          title={hintTitle[language]}
          alt={hintTitle[language]}
          style={Object.assign({}, hintStyle, { width: 0.1 * width })}
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
          {RenderHint}
        </div>
      );
  }
}
