/**
 * 첫번째 사례 
 */

// T 를 하나로만 통일하면 이미 string 으로 값이 변수에 담기기 때문에 U 같은걸로 하나 더 선언 해줘야함 
function swap<T, U> (a: T, b: U) {
    return [b,a]
}

const [a,b] = swap("1",2)

/**
 * 두번째 사례
 */

// 튜플. 첫번째 타입만 받아야한다면
// 첫번쨰 요소는 T 이고 나머지는 튜플형식으로 배열 형태로 들어올것 같아라는 의미 
function returnFirstValue<T> (data: [T, ...unknown[]]) {
    return data[0]
}

let num = returnFirstValue([0,1,2])

let str =returnFirstValue(['a', 'b', 'c'])

let mix = returnFirstValue([0, 'b', 'c'])

/**
 * 세번째 사례
 */

interface A {
    length: number
}

interface B extends A {}

function getLength<T extends {length: number}> (data: T) {
    return data.length
}

// 배열에는 length method 가 있어서 허용
let var1 = getLength([1,2,3])

// string 에도 length method 가 있어서 허용
let var2 = getLength('12345')

// 갹체에 length 라는 프로퍼티가 있어서 허용
let var3 = getLength({length: 10})

// 숫자는 length 라는 프로퍼티가 없어서 허용하지 않음 
let var4 = getLength(10)