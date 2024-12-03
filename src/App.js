import MainController from './controller/MainController.js';

class App {
  async run() {
    await new MainController().openStore();
  }
}

export default App;
