/**
 * 분산적인 조건부 타입 
 */

type StringNumberSwitch<T> = T extends number ? string : number

let a : StringNumberSwitch<number>

let b : StringNumberSwitch<string>

let c : StringNumberSwitch<number | string>
// 이런식으로 유니온 타입이 분리 됨 
// StringNumberSwitch<number>
// StringNumberSwitch<string>

let d : StringNumberSwitch<boolean | number | string>
// 1 단계
// 각각 다 분리 
// StringNumberSwitch<boolean>
// StringNumberSwitch<number>
// StringNumberSwitch<string>

// 2 단계 
// 값이 falsy 니까 number 
// string 
// number

// 결과
// number | string

/**
 * 실용적인 예제 
 */

type Exclude<T, U> = T extends U ? number : T 

type A  = Exclude<number | string | boolean, string>
// 1 단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2 단계 
// number |
// never |
// boolen

// 결과
// number | never | boolean

// 결과에 never 가 있으면 never 는 사라짐

// 최종 결과
// number | boolean

type Extract <T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>

// 1 단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string> 

// 2 단계
// never |
// string |
// never

// 최종 결과 
// string
