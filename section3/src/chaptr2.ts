/**
 * Unknown 타입 
 * 모든 타입에 슈퍼 타입 
 * Unknown 은 전체 집합 포함 
 * Upcasting 모든 타입이 허용 
 */

function unknownExam () {
    // up-casting 이라서 가능 
    let a: unknown = 1
    let b: unknown = 'hi'
    let c: unknown = true
    let d: unknown = null
    let e: unknown = undefined

    let unknownVar: unknown

    // 이건 down-casting 이니까 안됨 
    let num: number = unknownVar
    let str: string = unknownVar
}

/**
 * Never 타입
 * 아무것도 없는 집합 
 * 공집합 
 */
function neverExam () {
    // 아무것도 반환할수가 없다 
    function neverFunc (): never {
        while (true) {}
    }


    // never 타입은 서브 타입이기 때문에 지금 이게 up-casting 
    let num: number = neverFunc()
    let str: string = neverFunc()

    // down-casting 때문에 안됨 
    let never1: never = 10 
    let never2: never = 'hi'
}

/**
 * Void 타입
 * Void 는 undefined 에 슈퍼 타입 
 */

function voidExam () {
    // 반환값이 없음 
    function voidFunc (): void {
        console.log('hi')
    }

    // up-casting 이라서 가능 
    let voidVar: void = undefined
}

/**
 * any 타입
 * 타입 계층을 다 무시함 
 */
function anyExam () {
    let unknownVar: unknown
    let anyVar: any
    let undefinedVar: undefined
    let neverVar: never

    // down-casting 이지만 허용 가능 
    anyVar = unknownVar

    // down-casting 이지만 허용 가능 
    undefinedVar = anyVar

    // never 타입은 공집합이기 때문에 어떤 타입도 down-casting 할수 없음 
    neverVar = anyVar 

}