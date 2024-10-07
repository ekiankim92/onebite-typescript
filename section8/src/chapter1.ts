/**
 * keyof 연산자 
 * 객체 타입에 적용 
 */

interface Person {
    name: string;
    age: number;
}

// keyof 연산자 뒤에는 타입이 와야함 
function getPropertyKey (person: Person, key: keyof Person) {
    return person[key]
}

const person: Person = {
    name: "Ian",
    age: 29
}

getPropertyKey(person, 'name') // "Ian"

// 타입을 정의할때 하면 동작이 바뀌어버림 
typeof person === 'object'

type Person2 = typeof person2

const person2 = {
    name: "Ian",
    age: 30
}

function getPropertyKey2 (person: Person2, key: keyof typeof person2) {
    return person2[key]
}