import OutputView from '../src/view/OutputView.js';
import ProductsManager from '../src/model/productsManager.js';

jest.mock('../src/view/OutputView');

describe('재고 출력', () => {
  beforeEach(() => {
    OutputView.printProducts.mockClear();
  });

  const productsManager = new ProductsManager();

  test('[출력] 현재 존재하는 재고를 출력한다.', () => {
    productsManager.printProducts();

    expect(OutputView.printProducts).toHaveBeenCalledTimes(18);
  });
});
