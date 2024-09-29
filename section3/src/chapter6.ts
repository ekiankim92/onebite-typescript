/**
 * 타입 단언 
 * Type Assertion
 */

// 타입은 대부분에 상황에 변수에 타입을 잘 추론 함 

type Person = {
    name: string
    age: number
}

// 이걸 타입 단언
let person = {} as Person
person.name = 'Ian'
person.age = 32

type Dog = {
    name: string
    color: string
}

// 초과 프로퍼티가 발동되어서 타입이 달라서 에러가 남 
let dog = {
    name: 'Sook',
    color: "red",
    breed: "Jindo"
} as Dog 

/**
 * 타입 단언의 규칙 
 * 값 as 단언 <- 단언식
 * A as B
 * A 가 B의 슈퍼타입이거나
 * A 가 B의 서브타입이어야함 
 */

let num1 = 10 as never;
let num2 = 10 as unknown
// 이건 단언 오류. A 와 B 가 하나도 겹치지 않음 
var num3 = 10 as string
// 이렇게 다중단언을 하면 A 를 unknown 이란 전체 집합으로 바꾸고 다시 string 으로 변환 
var num3 = 10 as unknown as string

/**
 * const 단언
 */

// const 로 동일하게 
let num4 = 10 as const

var cat = {
    name: "wa",
    color: 'yellow'
} 

// 이렇게 하면 객체 안에 있는 내용은 못바꿈. readonly
var cat = {
    name: "wa",
    color: 'yellow'
} as const 

/**
 * Non Null 단언
 */

type Post = {
    title: string
    author?: string
}

let post : Post = {
    title: "Title 1",
    author: "Ian Kim"
}

// optional chaining 일때는 값이 있을때 없을때를 구분 
// 지금 옵션널 체이닝을 사용하고 있기 때문에 값이 undefined 일수도 있음 
var len : number = post.author?.length

// 이렇게 바꿔서 author 는 무조건 있다는 타입. 살짝 위험할수도 있음 
var len : number = post.author!.length

