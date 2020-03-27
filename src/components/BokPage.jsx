import React, { Component } from 'react';
import $ from 'jquery';

import arrow from './png/pilknapp2.png';

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
      this.state = { lastClick: new Date(), showHint: false };
  }

  getRelX(inputX) {
    const { left } = $(this.imgRef.current).offset();
    const { width } = this.props;
    return (inputX - left) / width;
  }

  onClick(evt) {
    const relImgX = this.getRelX(evt.pageX);
    if (relImgX > 1 - pageFlipThreshold) this.props.onNextPage();
    if (relImgX < pageFlipThreshold) this.props.onPrevPage();
    this.setState({ lastClick: new Date(), showHint: false });
  }

  render() {
      const { width, height, page, showHint, language } = this.props;
      if (width == null || isNaN(width)) return <div />;
      let { altText } = this.props;
      if (!altText) altText = 'No alt text set';
      const style = Object.assign({}, baseStyle, { width, height });
      if (page == null) return <div style={style} />;
      let RenderHint;
      if (showHint) {
        RenderHint = <img
          title={hintTitle[language]}
          alt={hintTitle[language]}
          style={Object.assign({}, hintStyle, { width: 0.1 * width })}
          onClick={this.onClick.bind(this)}
          src={arrow}
        />
      }
      return (
        <div style={style}>
          <img src={page} alt={altText} onClick={this.onClick.bind(this)} style={imgStyle} ref={this.imgRef}/>
          {RenderHint}
        </div>
      );
  }
}
