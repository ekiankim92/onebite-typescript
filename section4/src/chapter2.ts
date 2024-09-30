/**
 * 함수 타입 호환성 
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮을가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가 
 */

// 기준1. 반환값이 호횐되는가 

type A = () => number
type B = () => 10

let a : A = () => 10 // number 타입 
let b : B = () => 10 // number literal (넘버 리터렁) 타입 

a = b // up-casting 이라서 호환이 가능 
b = a // down-casting 이라서 타입 에러가 남 

// 기준2. 매개변수가 호횐되는가 
// 2-1 매개변수의 개수가 같을 때 

type C = (value: number) => void
type D = (value: 10) => void

let c : C = (value) => {}
let d : D = (value) => {}

c = d
d = c

type Animal = {
    name: string
}

type Dog = {
    name: string
    color: string
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name)
}

let dogFunc = (dog: Dog) => {
    console.log(dog.name)
    console.log(dog.color)
}

animalFunc = dogFunc
let testFunc = (animal: Animal) => {
    console.log(animal.name)
    console.log(animal.color)
}

dogFunc = animalFunc
let testFunc2 = (dog: Dog) => {
    console.log(dog.name)
}

// 2-2 매개변수의 개수가 다를 떄 
// 매개변수의 개수가 다를떄 할당하려고 하려고 하는 매개변수에 개수가 더 적을떄에만 호환 됨 
type Func1 = (a: number, b: number) => void

type Func2 = (a: number) => void

let func1 : Func1 = (a,b) => {}

let func2 : Func2 = (a) => {}

func1 = func2
func2 = func1