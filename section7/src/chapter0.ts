/**
 * Generic 제네릭 
 */

// generic 함수 
// 원하는 대로 함수에 인수에 따라 반환값에 타입을 가변적으로 정의할수 있음 
// <T> 타입 변수
function func<T> (value: T): T {
    // <T> 는 타입을 담는 변수. 상황에 따라 다른 타입을 받을수 있음 
    // 함수를 호출할때마다 타입이 정의 됨 
    return value
}

let num = func(10)
num.toUpperCase()

if (typeof num === 'number') {
    num.toFixed()
}

let bool = func(false)

let str = func('hello')

let arr = func<[number, number, number]>([1,2,3])
