import BokPageContainer from './BokPageContainer';

import img1 from './dev-image/small1.png';
import img2 from './dev-image/small2.png';

export default class BokPageTop extends BokPageContainer {
  constructor(props) {
      super(props);
      this.state = {
        currentPage: 0,
        pages: [img1, img2],
        claimHeight: .15,
      }
  }
}
