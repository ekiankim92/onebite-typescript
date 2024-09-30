/**
 * 인터페이스 
 * interface
 */

// 객체 타입을 정의
// 기본적인 기능은 같다 (선택적 프로퍼티로도 만들기 가능, 읽기 전용으로도 readonly 도 만들수 있음 )
// 메서드도 interface 에서 타입 정의 가능 
interface Person {
    name: string
    age: number
    gender?: string
    // 여러가지 표현을 하고 싶으면 이렇게 오버로드 시그니쳐로도 2개를 정의 가능 
    sayHi : () => void;
    // sayHi() : void; 호출 시그니처으로도 가능. 그치만 앞에 sayHi 라는게 붙어야함 
}

// 기존 타입 호출 시그니쳐는 이렇게 사용 했음 
type Func = {
    () : void
}
const func: Func = () => {}

const person: Person = {
    name: "Ian",
    age: 32,
    sayHi: function () {
        console.log("hi")
    }
}

// 이렇게 여러가지 버전으로 만들고 싶다고 호풀 시그니처로 바꿔야함. 함수표현식으로 표현이 안됨 
interface Person {
    name: string
    age: number
    gender?: string
    sayHi : () => void;
    sayHi: (a: number, b: number) =>  void; 
}

person.sayHi()
person.sayHi(1,2)


// interface 와 타입 별칭 
// interface 는 객체 타입을 정의하는데 특화. Intersection 이나 Union 을 직접적으로 사용 불가능 
// 타입 볆칭은 밑에 처럼 만들수 있음 

type Type1 = number | string 
type Typr2 = number & string

// 자바스크립트에서는 camel, snake, pascal 표기법을 쓰는데, 타입을 IPerson 이렇게 헝가리언 표기법을 써야하는가?