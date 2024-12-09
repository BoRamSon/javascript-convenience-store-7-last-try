# javascript-convenience-store-precourse

<br><br><br>

# 구현할 기능 목록

( 구현 여부 표시 : ✅ )

<br>

### <참고내용>

#### **라이브러리**

- `@woowacourse/mission-utils`에서 제공하는 `Console` 및 `DateTimes` API를 사용하여 구현해야 한다.
  - 현재 날짜와 시간을 가져오려면 `DateTimes`의 `now()`를 활용한다.
  - 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.

<br><br><br>

### ● ✅ 구현에 필요한 상품 목록과 행사 목록을 파일 입출력을 통해 불러온다.

- `public/products.md`과 `public/promotions.md` 파일을 이용한다.
- 두 파일 모두 내용의 형식을 유지한다면 값은 수정할 수 있다.

<br><br><br>

### ● ✅ [출력] Greeting

안녕하세요. W편의점입니다.

<br><br><br>

### ● [출력] 현재 재고 출력

(객체배열을 해당 내용처럼 출력할 수 있는 함수가 필요합니다.)

현재 보유하고 있는 상품입니다.

- 콜라 1,000원 10개 탄산2+1
- 콜라 1,000원 10개
- 사이다 1,000원 8개 탄산2+1
- 사이다 1,000원 7개
- 오렌지주스 1,800원 9개 MD추천상품
- 오렌지주스 1,800원 재고 없음
- 탄산수 1,200원 5개 탄산2+1
- 탄산수 1,200원 재고 없음
- 물 500원 10개
- 비타민워터 1,500원 6개
- 감자칩 1,500원 5개 반짝할인
- 감자칩 1,500원 5개
- 초코바 1,200원 5개 MD추천상품
- 초코바 1,200원 5개
- 에너지바 2,000원 5개
- 정식도시락 6,400원 8개
- 컵라면 1,700원 1개 MD추천상품
- 컵라면 1,700원 10개

const testClass = new productsManager();
testClass.printProducts();

<br><br><br>

### ● [입력] 구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])

ex [콜라-3],[에너지바-5],[에너지바-5], [콜라-3], [에너지바-5],[에너지바-5]

#### ㄴ validation

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.
- 빈값 입력을 확인한다.
- comma 입력에 대해서 확인한다.
- 정규표현식을 통해서 입력된 String을 확인합니다.
  - 구매할 상품과 수량을 입력 받는다. 상품명, 수량은 하이픈(-)으로, 개별 상품은 대괄호([])로 묶어 쉼표(,)로 구분한다.
- 입력한 상품이 재고에 존재하는지 확인한다. (각 상품의 재고 수량을 고려하여 결제 가능 여부를 확인한다.)
- 입력한 상품 수량이 재고에 존재하는지 확인한다. (각 상품의 재고 수량을 고려하여 결제 가능 여부를 확인한다.)

<br><br><br>

### ● 프로모션 할인 적용하기 (model을 고도화하여 잘 만들어야합니다.)

- 오늘 날짜가 프로모션 기간 내에 포함된 경우에만 할인을 적용한다.
- 프로모션은 N개 구매 시 1개 무료 증정(Buy N Get 1 Free)의 형태로 진행된다.
- 1+1 또는 2+1 프로모션이 각각 지정된 상품에 적용되며, 동일 상품에 여러 프로모션이 적용되지 않는다.
- 프로모션 혜택은 프로모션 재고 내에서만 적용할 수 있다.
- 프로모션 기간 중이라면 프로모션 재고를 우선적으로 차감하며, 프로모션 재고가 부족할 경우에는 일반 재고를 사용한다.

<br><br><br>

### ● [입력] 프로모션 적용이 가능한 상품에 대해 고객이 해당 수량보다 적게 가져온 경우, 필요한 수량을 추가로 가져오면 혜택을 받을 수 있음을 안내하기

- 현재 {상품명}은(는) 1개를 무료로 더 받을 수 있습니다. 추가하시겠습니까? (Y/N)
  ex Y

추가 구매를 한다면!
= 구매 수량에 +1을 합니다.

#### ㄴ validation

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.
- 빈값 입력을 확인한다.
- 한자리만 입력될 수 있도록 제한합니다.
- 정규 표현식을 통해서 Y or N 만 입력될 수 있도록 제한합니다.

<br><br><br>

### ● [입력] 프로모션 재고가 부족하여 일부 수량을 프로모션 혜택 없이 결제해야 하는 경우, 일부 수량에 대해 정가로 결제하게 됨을 안내하기

- 현재 {상품명} {수량}개는 프로모션 할인이 적용되지 않습니다. 그래도 구매하시겠습니까? (Y/N)
  ex N

그렇다면 구매하지 않겠다고 한다면!
= 프로모션을 받지 못하는 수량을 - 뺍니다.

#### ㄴ validation

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.
- 빈값 입력을 확인한다.
- 한자리만 입력될 수 있도록 제한합니다.
- 정규 표현식을 통해서 Y or N만 입력될 수 있도록 제한합니다.

<br><br><br>

### ● [입력] 멤버십 할인 적용여부 물어보기

- 멤버십 할인을 받으시겠습니까? (Y/N)
  ex Y

- 할인을 받는다고 한다면!
  - 멤버십 회원은 프로모션 미적용 금액의 30%를 할인받는다.
  - 프로모션 적용 후 남은 금액에 대해 멤버십 할인을 적용한다.
  - 멤버십 할인의 최대 한도는 8,000원이다.

#### ㄴ validation

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.
- 빈값 입력을 확인한다.
- 한자리만 입력될 수 있도록 제한합니다.
- 정규 표현식을 통해서 Y or N만 입력될 수 있도록 제한합니다.

<br><br><br>

### ● 재고 업데이트 하기

- 고객이 상품을 구매할 때마다, 결제된 수량만큼 해당 상품의 재고에서 차감하여 수량을 관리한다.
- 재고를 차감함으로써 시스템은 최신 재고 상태를 유지하며, 다음 고객이 구매할 때 정확한 재고 정보를 제공한다.

<br><br><br>

### ● [출력] 영수증 출력하기

- 사용자가 입력한 상품의 가격과 수량을 기반으로 최종 결제 금액을 계산한다.

- 총구매액은 상품별 가격과 수량을 곱하여 계산하며, 프로모션 및 멤버십 할인 정책을 반영하여 최종 결제 금액을 산출한다.

- 영수증은 고객의 구매 내역과 할인을 요약하여 출력한다.

- 영수증 항목은 아래와 같다.
  - 구매 상품 내역: 구매한 상품명, 수량, 가격
  - 증정 상품 내역: 프로모션에 따라 무료로 제공된 증정 상품의 목록
  - 금액 정보
    - 총구매액: 구매한 상품의 총 수량과 총 금액
    - 행사할인: 프로모션에 의해 할인된 금액
    - 멤버십할인: 멤버십에 의해 추가로 할인된 금액 (-30%)
    - 내실돈: 최종 결제 금액 (총구매액 - 행사할인 - 멤버십할인)
- 구매 내역과 산출한 금액 정보를 영수증으로 출력한다.
- 영수증의 구성 요소를 보기 좋게 정렬하여 고객이 쉽게 금액과 수량을 확인할 수 있게 한다.

<출력 예시>

```js
===========W 편의점=============
상품명      수량       금액
콜라         3       3,000
에너지바 	    5 	    10,000
===========증	정=============
콜라         1
==============================
총구매액      8	    13,000
행사할인			    -1,000
멤버십할인		 	   -3,000
내실돈			    9,000
```

<br><br><br>

### ● [입력] 영수증 출력 후 추가 구매를 진행할지 또는 종료할지를 선택하기

- 감사합니다. 구매하고 싶은 다른 상품이 있나요? (Y/N)
  ex Y

다른 상품을 추가 구매한다고 한다면

#### ㄴ validation

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.
- 빈값 입력을 확인한다.
- 한자리만 입력될 수 있도록 제한합니다.
- 정규 표현식을 통해서 Y or N만 입력될 수 있도록 제한합니다.
