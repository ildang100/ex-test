// 정수 - 소수가 없는 숫자
// ex)
// 1234, -1234

// 실수 - 소수를 가진 숫자
// 1.23, 1.0

// JS는 정수, 실수를 구분하지 않는다.
// ex)
// 1, 1., 1.0 모두 1.0 으로 간주
// 단, 표시는 1로 표현
// console.log(1);
// console.log(1.);
// console.log(1.0);
// console.log(1.01);

// 64비트 부동 소수점 처리
// IEEE 754 표준

// 부동소수점 처리란?
// 123을 123.0 으로 처리
// 단, ES6 에 정수, 실수 구분 추가

// 숫자 타입
var price = 10000;
// 문자 타입
var category = '홍길동';
// typeof 연산자
console.log(typeof price);
console.log(typeof category);

// 자바스크립트의 언어 타입
// undefined, null, boolean, number, string, object
// Array 가 없는 이유는, Array는 Object 타입
console.log(typeof []);
// Array와 object를 어떻게 구별할 수 있는가?
console.log(typeof []);
console.log(typeof {});
// 방법
var array = [];
var object = {};
console.log(typeof array === 'object' && Array.isArray(array));
console.log(typeof object === 'object' && Array.isArray(object));