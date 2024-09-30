/**
 * 함수 타입 표현식 
 * Function Type Expression
 */

// 타입을 별도로 정의 가능 
type Add = (a: number, b: number) => number

type Operation = (a: number, b: number) => number

const add: Add  = (a, b) => a + b

const sub: Operation = (a,b) => a -b 

const multiply: Operation = (a,b) => a * b

const divide: Operation = (a,b) => a / b 

/**
 * 호출 시그니쳐 
 * 콜 시그니쳐 
 */

type Operation2 = {
    (a: number, b: number) : number
}

const add2: Add  = (a, b) => a + b

const sub2: Operation2 = (a,b) => a -b 

const multiply2: Operation2 = (a,b) => a * b

const divide2: Operation2 = (a,b) => a / b 