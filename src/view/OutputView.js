import { MissionUtils } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGES from '../constants/outputMessages.js';

const OutputView = {
  printGreeting() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.greeting);
    MissionUtils.Console.print(OUTPUT_MESSAGES.currentProducts);
    MissionUtils.Console.print('');
  },

  printProducts(name, price, quantity, promotion) {
    MissionUtils.Console.print(`- ${name} ${price.toLocaleString()}원 ${quantity} ${promotion}`);
  },

  printError(error) {
    MissionUtils.Console.print(error);
  },

  printSpace() {
    MissionUtils.Console.print('');
  },

  print() {
    MissionUtils.Console.print(OUTPUT_MESSAGES);
    // MissionUtils.Console.print(`${}${}`);
  },
};

export default OutputView;
