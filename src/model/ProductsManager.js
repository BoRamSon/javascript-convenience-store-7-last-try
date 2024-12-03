import OutputView from '../view/OutputView.js';
import products from './products.js';

class ProductsManager {
  existingProducts;
  updatedProducts;

  constructor() {
    this.existingProducts = products;
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

  productsUpdate() {
    //
  }
}

export default ProductsManager;
