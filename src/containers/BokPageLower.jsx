import BokPageContainer from './BokPageContainer';

import img1 from './dev-image/big1.png';
import img2 from './dev-image/big2.png';
import img3 from './dev-image/big3.png';
import img4 from './dev-image/big4.png';

export default class BokPageLower extends BokPageContainer {
  constructor(props) {
      super(props);
      this.state = {
        currentPage: 0,
        pages: [img1, img2, img3, img4],
        claimHeight: .35,
      }
  }
}
