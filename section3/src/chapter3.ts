/**
 * 기본 타입간의 호환성 
 */

let num1: number = 10 
let num2: 10 = 10

// num1 이 up-casting 이기 떄문에 가능 
num1 = num2

/**
 * 객테 타입간의 호환성
 * 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string
    color: string
}

type Dog = {
    name: string
    color: string;
    breed: string
}

let animal: Animal = {
    name: 'Lion',
    color: 'red'
}

type Generic = {
    [key: string]: string
}

let dog: Dog = {
    name: "Hee",
    color: 'Green',
    breed: 'Jindo'
}

// up-casting. animal 이 슈퍼 서브 타입. 조건이 더 적은게 슈퍼 타입이 되어버림 
animal = dog

// down-casting
dog = animal

// Book 타입이 슈퍼타입 
type Book = {
    name: string
    price: number
}

// 서브 타입 
type ProgrammingBook = {
    name: string
    price: number
    skill: string
}

let book: Book

let programmingBook: ProgrammingBook = {
    name: 'aaaa',
    price: 123,
    skill: 'hello world'
}

book = programmingBook

// down-casting
programmingBook = book


/**
 * 초과 프로퍼티 검사 
 * 꼭 처음 프로퍼티를 사용해야함 
 */

let book2: Book = {
    name: 'aaaa',
    price: 123,
    skill: 'hello world'
}

let book3: Book = programmingBook

function func (book :  Book) {

}

func({
    name: 'aaaa',
    price: 123,
    // skill: 'hello world' 
})
func(programmingBook)