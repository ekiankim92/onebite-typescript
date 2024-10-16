/**
 * infer 
 * Inference 추론 
 * 특정 타입만 추론할수 있음 
 */

type Func = () => string

type ReturnType<T> = T extends () => string ? string : never

type A = ReturnType<Func>

type FuncB = () => string

type FuncC = () => number

type  B = ReturnType<FuncB>

type C = ReturnType<FuncC>

// R 을 추론 해라
type ReturnType2<T> = T extends () => infer R ? R : never

type D = ReturnType2<FuncC>

// () => 이 넘버 타입에 슈퍼 타입이 될수 없어서 never 타입으로 반환 
type E = ReturnType2<number>

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never
// 1. T 는 프로미스 타입이어야한다 
// 2. 프로미스 타입의 결과값 타입을 반환해야한다 

type PromiseA = PromiseUnpack<Promise<number>>

type PromiseB = PromiseUnpack<Promise<string>>

type PromiseC = PromiseUnpack<Promise<() => string>>