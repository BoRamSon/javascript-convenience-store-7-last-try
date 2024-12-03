import { MissionUtils } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGES from '../constants/outputMessages.js';

const OutputView = {
  printGreeting() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.greeting);
  },

  printProducts() {
    MissionUtils.Console.print('- 콜라 1,000원 10개 탄산2+1');
  },

  print() {
    MissionUtils.Console.print(OUTPUT_MESSAGES);
    // MissionUtils.Console.print(`${}${}`);
  },
};

export default OutputView;
