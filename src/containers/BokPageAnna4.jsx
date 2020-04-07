import BokPageContainer from './BokPageContainer';
import { IMAGE_HEIGHTS, IMAGE_HEIGHTS_TOTAL } from './util';

import svImg0 from './png/sv/utsida_kant.png';
import svImgAbout from './png/sv/infosida_sve.png';
import svImg1 from './png/sv/1_4_kant.png';
import svImg2 from './png/sv/2_4_kant.png';
import svImg3 from './png/sv/3_4_kant.png';
import svImg4 from './png/sv/4_4_kant.png';
import svImg5 from './png/sv/5_4_kant.png';
import svImg6 from './png/sv/6_4_kant.png';

import enImg0 from './png/en/utsida_eng.png';
import enImgAbout from './png/en/infosida_eng.png';
import enImg1 from './png/en/1_4_eng.png';
import enImg2 from './png/en/2_4_eng.png';
import enImg3 from './png/en/3_4_eng.png';
import enImg4 from './png/en/4_4_eng.png';
import enImg5 from './png/en/5_4_eng.png';
import enImg6 from './png/en/6_4_eng.png';

const pages = {
  sv: [svImg0, svImgAbout, svImg1, svImg2, svImg3, svImg4, svImg5, svImg6],
  en: [enImg0, enImgAbout, enImg1, enImg2, enImg3, enImg4, enImg5, enImg6],
};

export default class BokPageAnna4 extends BokPageContainer {
  constructor(props) {
      super(props);
      this.state = {
        pagePart: 3,
        pages,
        claimHeight: IMAGE_HEIGHTS[3] / IMAGE_HEIGHTS_TOTAL,
      }
  }
}
