import React, { Component } from 'react';
import BokPage from '../components/BokPage';
const NO_DOUBLEFLIP = 200;

export default class BokPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPage: 0,
      claimHeight: 0.2,
      lastFlip: new Date()
    };
  }

  onFlipPage(direction) {
    const now = new Date();
    const { pages, currentPage, lastFlip } = this.state;
    if ((now - lastFlip) < NO_DOUBLEFLIP) return;
    const { onInteraction } = this.props;
    let nextPage = currentPage + direction;
    if (nextPage < 1) {
      nextPage = pages.length - 1;
    } else if (nextPage >= pages.length) {
      nextPage = 1;
    }
    this.setState({ currentPage: nextPage, lastFlip: now });
    onInteraction();
  }

  noFlip() {}

  render() {
    const { width, height, onFlipAll, isOpen, showHint, language } = this.props;
    const { claimHeight, pages } = this.state;
    let { currentPage } = this.state;
    if (isOpen && currentPage === 0) currentPage = 1;
    const page = pages[language][currentPage];
    const onNext = currentPage === 0 ? onFlipAll: this.onFlipPage.bind(this, 1);
    const onPrev = currentPage === 0 ? this.noFlip.bind(this) : this.onFlipPage.bind(this, -1);
    return <BokPage
      width={width} height={height * claimHeight} page={page}
      onNextPage={onNext}
      onPrevPage={onPrev}
      showHint={showHint}
      language={language}
    />;
  }

  componentDidUpdate() {
    const { isOpen } = this.props;
    const { currentPage } = this.state;
    if (isOpen && currentPage === 0) {
      this.setState({ currentPage: 1 });
    }
  }
}
