/**
 * 대수 타입
 * 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * 합집합 타입과 교집합 타입이 존재 
 */

/**
 * 1. Union Type 
 * 두 가지 다른 집합을 Union 이라고 칭함 
 * 두가지의 타입 
 * 객체는 집합이라고 이해하면 쉬움 
 */

let a : string | number | boolean
a = 'hi'
a = 10
a = true    

let arr: (number | string | boolean)[] = [1, 'hello', true]

type Dog = {
    name: string
    color: string
}

type Person = {
    name: string
    language: string 
}

type Union1 = Dog | Person

let union1: Union1 = {
    name: '',
    color: ''
}

let union2: Union1 = {
    name: '',
    language: ''
}

let union3: Union1 = {
    name: '',
    color: '',
    language: ''
}

// 교집합에 없기 때문에 타입 에러 
let union4: Union1 = {
    name: ""
}

/**
 * 2. 교집합 타입 - Intersection 타입 
 */

// number 타입 과 string 타입에 교집합 
// never - 공집합 타입 
 let variable: number & string

 type Intersection = Dog & Person

 let intersection1: Intersection = {
    name: "",
    color: "",
    language: ''
 }