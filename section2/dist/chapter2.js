// 배열 
let numArr = [1, 2, 3];
let strArr = ['hello', "123", '456'];
let boolArr = [true, false, true, false];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, 'string', 2, 'hi'];
let multiArr2 = [1, 'string', 2, 'hi'];
// 다차원 배열의 타입을 정의하는 방법. 2차원 3차원 배열 
let doubleArr = [[1, 2, 3], [4, 5, 6]];
let doubleArr2 = [[1, 2, 3], [4, 5, 6]];
// 튜플. 타입스크립트에서만 제고오디는 타입 
// 길이와 타입이 고정된 배열 
let tup1 = [1, 2];
let tup2 = [1, "2", true];
// 튜플 사용 예시 
const users = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    [5, 'e'] // 여기서 에러가 남. 순서나 보장되어야하는 값이 있으면 튜플이 이용가능
];
export {};
