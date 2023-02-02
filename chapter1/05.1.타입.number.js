// number 타입 - Number 라고 쓰지만, 타입체크 할 떄, number 를 나오는 등
// 처음에 햇갈릴 수 있어, number라고 씀

// 부호(+,-) 를 가진 값

// Number 타입의 특수한 3개 값
// NaN : Not a number
// Infinity : 양수 무한대
// -Infinity : 음수 무한대

var price = 10000 + '문자열';
console.log(price);
console.log(typeof price);
console.log(isNaN(price));

console.log(typeof 129312912893829131931298391283129389128192381231232132131312312312313123);

console.log(-1 / 0);