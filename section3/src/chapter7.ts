/**
 * 타입 좁히기 
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
    name: string
    age: number
}

// value 이 숫자면 toFixed 아님 toUpperCase
// value 에 타입이 Date 일때는 getTime
// value => Person : name은 age 살입니다
function func (value: number | string | Date | null | Person) {
    if (typeof value === 'number') {
        console.log(value.toFixed())
    } else if (typeof value === 'string') {
        console.log(value.toLocaleUpperCase())
    } else if (value instanceof Date) { // 왼쪽에 있는 value 가 오른쪽에 있는 Date 에 포함이 되어있느냐. 내장함수일때는 사용 가능  
        console.log(value.getTime())
    } else if (value && 'age' in value) { // 직접 타입을 만들었을시. 타입 좁히기를 돕는 타입 가드 
        console.log(`${value.name}은 ${value.age}살`)
    }
}