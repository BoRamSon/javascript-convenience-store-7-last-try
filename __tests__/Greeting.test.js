import OutputView from '../src/view/OutputView.js';
import Greeting from '../src/model/Greeting.js';

jest.mock('../src/view/OutputView');

describe('처음 인사말 출력하기', () => {
  beforeEach(() => {
    OutputView.printGreeting.mockClear();
  });

  test('[출력] Greeting - 안녕하세요. W편의점입니다.', () => {
    new Greeting();
    expect(OutputView.printGreeting).toHaveBeenCalledTimes(1);
  });
});
