import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import products from './products.js';

class ProductsManager {
  existingProducts;
  updatedProducts;

  constructor() {
    this.existingProducts = products;
    this.inputView = new InputView();
  }

  printProducts() {
    this.convertProductsData();
    OutputView.printSpace();
  }

  convertProductsData() {
    products.map((array) => {
      let quantity = `${array.quantity}개`;
      let promotion = array.promotion;
      if (promotion === null) promotion = '';
      if (quantity === '0개') promotion = '재고 없음';
      if (quantity === '0개') quantity = '';
      OutputView.printProducts(array.name, array.price, quantity, promotion);
    });
  }

  async inputItemsAndQuantity() {
    for (let i = 0; i <= 5; i++) {
      try {
        return await this.inputView.readItemsAndQuantity();
      } catch (error) {
        OutputView.printError(error);
        if (i === 5) throw new Error(ERROR_MESSAGES.enteredMoreFiveTimes);
      }
    }
  }

  productsUpdate() {
    //
  }
}

export default ProductsManager;
