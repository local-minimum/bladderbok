import BokPageContainer from './BokPageContainer';

import img0 from './png/0_1.png';
import img1 from './png/1_1.png';
import img2 from './png/2_1.png';
import img3 from './png/3_1.png';
import img4 from './png/4_1.png';
import img5 from './png/5_1.png';
import img6 from './png/6_1.png';

export default class BokPageAnna1 extends BokPageContainer {
  constructor(props) {
      super(props);
      this.state = {
        currentPage: 0,
        pages: [img0, img1, img2, img3, img4, img5, img6],
        claimHeight: 109 / (109 + 109 + 190 + 190),
      }
  }
}
