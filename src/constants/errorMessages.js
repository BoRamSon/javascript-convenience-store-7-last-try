const ERROR_PREFIX = '[ERROR]';

const createMsg = (msg) => `${ERROR_PREFIX} ${msg} 다시 입력해주세요.\n`;

const ERROR_MESSAGES = {
  emptyValue: createMsg('값이 존재하지 않습니다.'),
  regexpTest: createMsg('형식이 잘 못되었습니다.'),
  startComma: createMsg('입력이 콤마(,)부터 시작할 수 없습니다.'),
  endComma: createMsg('입력 끝에 콤마(,)로 끝날 수 없습니다.'),
  enteredMoreFiveTimes: '5회 이상 잘못 입력하여 종료되없습니다. 다시 실행해주세요.',
  isExistItems: createMsg('입력하신 상품 중 재고에 없는 상품이 존재합니다.'),
  isExistQyantity: createMsg('입력하신 상품수량 중 부족한 재고가 존재합니다.'),
};

export { ERROR_PREFIX, ERROR_MESSAGES };
