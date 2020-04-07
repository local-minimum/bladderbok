import BokPageContainer from './BokPageContainer';
import { IMAGE_HEIGHTS, IMAGE_HEIGHTS_TOTAL } from './util';

import svImg1 from './png/sv/1_1_kant.png';
import svImg2 from './png/sv/2_1_kant.png';
import svImg3 from './png/sv/3_1_kant.png';
import svImg4 from './png/sv/4_1_kant.png';
import svImg5 from './png/sv/5_1_kant.png';
import svImg6 from './png/sv/6_1_kant.png';

import enImg1 from './png/en/1_1_eng.png';
import enImg2 from './png/en/2_1_eng.png';
import enImg3 from './png/en/3_1_eng.png';
import enImg4 from './png/en/4_1_eng.png';
import enImg5 from './png/en/5_1_eng.png';
import enImg6 from './png/en/6_1_eng.png';

const pages = {
  sv: [null, null, svImg1, svImg2, svImg3, svImg4, svImg5, svImg6],
  en: [null, null, enImg1, enImg2, enImg3, enImg4, enImg5, enImg6],
};

export default class BokPageAnna1 extends BokPageContainer {
  constructor(props) {
      super(props);
      this.state = {
        pagePart: 0,
        pages,
        claimHeight: IMAGE_HEIGHTS[0] / IMAGE_HEIGHTS_TOTAL,
      }
  }
}
