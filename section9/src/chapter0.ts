/**
 * 조건부 타입 
 * 삼항연산자 
 */

type A = number extends string ? string : number

type ObjA = {
    a : number
}

type ObjB = {
    a: number
    b : number
}

// ObjA 는 슈퍼타입이라서 조건이 참 
// 앞에 있는 타입이 뒤에 있는 타입에 서브타입 인지 
type B = ObjB extends ObjA ? number : string

/**
 * 제네릭과 조건부 타입 
 */

type StringNumberSwitch<T> = T extends number ? string : number

let varA : StringNumberSwitch<number>

let varB : StringNumberSwitch<string>

function removeSpaces<T> (text: T) : T extends string ? string : undefined
function removeSpaces<T> (text: any){
    if (typeof text === 'string') {
        return text.replaceAll(' ', "")
    } else {
        return undefined
    }
}

let result = removeSpaces('hello world!') as string
result.toUpperCase()

let result2 = removeSpaces(undefined)

let result3 = removeSpaces(1234)