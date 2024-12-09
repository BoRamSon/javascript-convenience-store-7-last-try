import { MissionUtils } from '@woowacourse/mission-utils';
import INPUT_MESSAGES from '../constants/inputMessages.js';
import removeSpace from '../utils/removeSpace.js';
import validation from '../validation/validation.js';
import convertObjectArray from '../utils/convertObjectArray.js';
import products from '../model/products.js';

class InputView {
  async readItemsAndQuantity() {
    const inputItemsAndQuantity = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.itemsAndQuantity
    );
    const removeInputSpace = removeSpace(inputItemsAndQuantity);
    this.validInputItemAndQuantity(removeInputSpace);
    const purchasedList = convertObjectArray(removeInputSpace);
    this.validPurchasedList(purchasedList, products);
    return purchasedList;
  }

  validInputItemAndQuantity(value) {
    validation.empty(value);
    validation.startedComma(value);
    validation.endedComma(value);
    const regExp = /^\[([가-힣]+)-(\d)\](,(\s*)\[([가-힣]+)-(\d)\])*$/;
    validation.regularExpression(value, regExp);
  }

  validPurchasedList(purchasedList, products) {
    validation.isExistItems(purchasedList, products);
    validation.isExistQuantity(purchasedList, products);
  }

  async read() {
    await MissionUtils.Console.readLineAsync(INPUT_MESSAGES);
    return removeSpace();
  }

  validate() {}

  async read() {
    await MissionUtils.Console.readLineAsync(INPUT_MESSAGES);
    return removeSpace();
  }

  validate() {}

  async read() {
    await MissionUtils.Console.readLineAsync(INPUT_MESSAGES);
    return removeSpace();
  }

  async read() {
    await MissionUtils.Console.readLineAsync(INPUT_MESSAGES);
    return removeSpace();
  }

  async read() {
    await MissionUtils.Console.readLineAsync(INPUT_MESSAGES);
    return removeSpace();
  }
}

export default InputView;
