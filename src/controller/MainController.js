import { MissionUtils } from '@woowacourse/mission-utils';
import Greeting from '../model/Greeting.js';

class MainController {
  constructor() {
    //
  }

  async openStore() {
    new Greeting();
  }

  async re() {
    //
  }
}

export default MainController;
