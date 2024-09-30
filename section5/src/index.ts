console.log("hello")

// type vs interface 
// 타입에 이름을 지어주는 또 다른 문법 

type A = {
    a: string
    b: string 
}

// 상호간에 약속된 규칙
// 이 객체는 이런 형태를 가져야함 
// 약속 및 규칙을 만들어주는 규칙 
// 객체의 구조를 정의하는 특화된 문법 (상속, 합침 등의 특수한 기능을 제공)
interface B {
    a: string
    b: string
}