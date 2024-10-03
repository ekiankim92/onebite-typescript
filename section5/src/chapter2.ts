/**
 * 선언 합침
 */


// type 으로 동일한 이름으로 하면 에러 생김 
type Person = {
    name: string
}

type Person = {
    age: number
}

// interface 으로 하면 동일한 이름으로 해도 에러 안생김. 중복 선언 가능. 그리고 declaration merging 
// 동일한 interface 는 선언 합침으로 인해 서로 합쳐지게됨 
interface Person1 {
    name: string
}

interface Person1 {
    age: number
}

interface Developer extends Person {
    name: "hello"
}

const person: Person1 = {
    name: "",
    age: 0
}

/**
 * 모듈 보강 할때 사용
 */
interface Lib {
    a: number
    b: number
}

// 이렇게 중복된 이름을 사용해서 선언 합침을 이용 
interface Lib {
    c: string
}


const lib: Lib = {
    a : 1, 
    b : 2, 
    c: "hello", // 라이브러리를 사용하다가 추가를 해야할 경우가 있음 
}

