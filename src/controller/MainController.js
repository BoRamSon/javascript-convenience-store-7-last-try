import Greeting from '../model/Greeting.js';
import productsManager from '../model/productsManager.js';

class MainController {
  constructor() {
    this.productsManager = new productsManager();
  }

  async openStore() {
    new Greeting();
    this.productsManager.printProducts();
    const itemAndQuantity = await this.productsManager.inputItemsAndQuantity();
    console.log(itemAndQuantity);
  }
}

export default MainController;
