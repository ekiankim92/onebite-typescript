/**
 * Exclude<T, U>
 * T 에서 U 를 제거하는 타입
 */

type Exclude<T, U> = T extends U ? never : T
// 1 단계 
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2 단계 (관계 성립이 되는가?)
// string |
// never 

// 최종적으로는 
// string | never
// string 

type A = Exclude<string | boolean, boolean>

/**
 * Extract<T, U>
 * T => 에서 U 를 추출하는 타입
 */

type Extract<T, U> = T extends U ? T : never

type B = Extract<string | boolean, boolean>

/**
 * ReturnType<T>
 * 함수에 반환값을 추출 
 */

type ReturnType<T extends (...args : any) => any> = T extends (...args: any) => infer R ? R : never

function funcA() {
    return "hello"
}

function funcB() {
    return 10
}

type ReturnA = ReturnType<typeof funcA>

type ReturnB = ReturnType<typeof funcB>