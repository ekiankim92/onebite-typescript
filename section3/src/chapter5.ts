/**
 * 타입 추론 
 */

// 자동으로 잘 추론 할수 있음 
// 변수에 초기값을 타입을 추론함
let a = 10 
let b = 'hi'
let c = {
    id: 1,
    name: 'hi',
    profile: {
        nickname: 'kookoo'
    },
    urls: ['https://hi']
}

let {id, name, profile} = c

let [one, two, three] = [1,'hi', true]

// 반환값 기준으로 타입을 추론 
function func (message: 'hello') {
    return 'hello'
}

// 초기값 타입을 잡지 않으면 any 타입 진화가 될수 있음 

// d 를 숫자로 추론 
let d; 
d = 10
d.toFixed()
// d.toUpperCase()

// any 진화로 하고 암묵적으로 any 타입으로 하고 진화함 
// 타입이 한번 더 바꿀수 있음 
d = 'hello'
d.toUpperCase()

// const 는 재선언 재할당이 안되기 때문에 아예 값이 박힘 
const num = 10 
const str = 'hello'

let arr = [1, 'hi']

// 타입 넓히기를 하여 let 이나 const 에 타입을 추론 함 