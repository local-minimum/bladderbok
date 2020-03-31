import React, { Component } from 'react';
import Bok from '../components/Bok';

export default class BokContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }

  onWindowResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }

  get widthHeight() {
    let { windowWidth, windowHeight } = this.state;
    const { ratio, marginBottom, marginTop, marginSides } = this.props;
    windowWidth -= 2 * marginSides;
    windowHeight -= marginTop + marginBottom;
    const windowRatio = windowWidth / windowHeight;

    let width = windowWidth;
    let height = width / ratio;

    if (windowRatio > ratio) {
      height = windowHeight - marginBottom;
      width =  height * ratio;
    }
    return { width, height };
  }

  get offsetY() {
    return this.props.marginTop - this.props.marginBottom;
  }

  render() {
    const { isOpen } = this.state;
    const { language, currentPages, onSetPages } = this.props;
    return <Bok
      {...this.widthHeight}
      offsetY={this.offsetY}
      isOpen={isOpen}
      language={language}
      currentPages={currentPages}
      onSetPages={onSetPages}
    />;
  }
}
