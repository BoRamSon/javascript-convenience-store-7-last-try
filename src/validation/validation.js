import createThrowError from '../utils/createError.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class validation {
  static empty(value) {
    if (value === '') createThrowError(ERROR_MESSAGES.emptyValue);
    return true;
  }

  static regularExpression(value, regExp) {
    const regExpTest = regExp.test(value);
    if (!regExpTest) createThrowError(ERROR_MESSAGES.regexpTest);
    return true;
  }

  static startedComma(value) {
    const regExp = /^,/;
    const regExpTest = regExp.test(value);
    if (regExpTest) createThrowError(ERROR_MESSAGES.startComma);
    return true;
  }

  static endedComma(value) {
    const regExp = /,$/;
    const regExpTest = regExp.test(value);
    if (regExpTest) createThrowError(ERROR_MESSAGES.endComma);
    return true;
  }

  static nagativeNumber(value) {
    const changeTypeNumber = Number(value);
    if (0 > changeTypeNumber) createThrowError(ERROR_MESSAGES.negativeNumber);
    return true;
  }

  static isExistItems(purchasedList, products) {
    const isExist = purchasedList.some((purchasedItem) => {
      const existQuantity = products.filter(
        (product) => purchasedItem.name === product.name
      ).length;
      if (existQuantity > 0) return true;
    });
    if (!isExist) createThrowError(ERROR_MESSAGES.isExistItems);
    return true;
  }

  static isExistQuantity(purchasedList, products) {
    const isExist = purchasedList.some((purchasedItem) => {
      const existQuantity = products.filter(
        (product) =>
          purchasedItem.name === product.name && purchasedItem.quantity <= product.quantity
      ).length;
      if (existQuantity > 0) return true;
    });
    if (!isExist) createThrowError(ERROR_MESSAGES.isExistQyantity);
  }

  static validationName(value) {
    //
  }

  static validationName(value) {
    //
  }
}

export default validation;
