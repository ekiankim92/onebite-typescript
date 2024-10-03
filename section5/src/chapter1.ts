/**
 * inteface 확장 
 */

// 이렇게 4개를 거의 중복된걸 반복 하고 있음 
interface Animal {
    name: string
    age: number
}

interface Dog {
    name: string
    age: number
    isBark: boolean
}

interface Cat {
    name: string
    age: number
    isScratch: boolean
}

interface Chicken {
    name: string
    age: number
    isFly: boolean
}

// 인터페이스에 확정을 사용해서 중복된걸 제거 할수 있음 

// Animal 에 타입과 더불어 isBark 를 추가 하겠다는 내용 
// extends 를 사용할때는 원본 타입에 서브타입으로 사용해야함. 슈퍼타입에 string  인데 서브타입에 number 로 사용할수 없음 
interface Dog extends Animal {
    isBark: boolean
}

interface Cat extends Animal {
    isScratch: boolean
}

interface Chicken extends Animal {
    isFly: boolean
}

const dog : Dog = {
    name: '',
    age: 0,
    isBark: true
}

// 다중 확정도 가능 
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: '',
    age: 0,
    isBark: true,
    isScratch: false
}