import BokPageContainer from './BokPageContainer';
import { IMAGE_HEIGHTS, IMAGE_HEIGHTS_TOTAL } from './util';

import svImg1 from './png/sv/1_3_kant.png';
import svImg2 from './png/sv/2_3_kant.png';
import svImg3 from './png/sv/3_3_kant.png';
import svImg4 from './png/sv/4_3_kant.png';
import svImg5 from './png/sv/5_3_kant.png';
import svImg6 from './png/sv/6_3_kant.png';

import enImg1 from './png/en/1_3_eng.png';
import enImg2 from './png/en/2_3_eng.png';
import enImg3 from './png/en/3_3_eng.png';
import enImg4 from './png/en/4_3_eng.png';
import enImg5 from './png/en/5_3_eng.png';
import enImg6 from './png/en/6_3_eng.png';

const pages = {
  sv: [null, svImg1, svImg2, svImg3, svImg4, svImg5, svImg6],
  en: [null, enImg1, enImg2, enImg3, enImg4, enImg5, enImg6],
};

export default class BokPageAnna3 extends BokPageContainer {
  constructor(props) {
      super(props);
      this.state = {
        pagePart: 2,
        pages,
        claimHeight: IMAGE_HEIGHTS[2] / IMAGE_HEIGHTS_TOTAL,
      }
  }
}
