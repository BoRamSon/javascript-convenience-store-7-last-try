import Greeting from '../model/Greeting.js';
import productsManager from '../model/productsManager.js';
import InputView from '../view/InputView.js';

class MainController {
  constructor() {
    this.inputView = new InputView();
    this.productManager = new productsManager();
  }

  async openStore() {
    new Greeting();
    this.productManager.printProducts();
  }
}

export default MainController;
