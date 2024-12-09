import OutputView from '../view/OutputView.js';

class Greeting {
  constructor() {
    this.printGreetingText();
  }

  printGreetingText() {
    OutputView.printGreeting();
  }
}
export default Greeting;
