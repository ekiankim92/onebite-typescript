/**
 * 함수 타입 정의 
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기 
// 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지 이야기 
function func (a: number, b: number) {
    // 반환값은 숫자와 숫자가 더해지기 때문에 숫자로 추론이됨 
    return a + b 
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number) => {
    return a + b
}

/**
 * 함수의 매개변수 
 * 선택적 매개변수 
 */
function introduct (name = "Ian", tall?: number) {
    console.log(`name: ${name}`)

    // 이렇게 하면 타입 오류가 나는데 이유는 유니온 타입이라 undefined 가 들어올수 있음 
    console.log(`tall: ${tall + 10 }`)
    
    // 이렇게 타입 가드로 설정
    if (typeof tall === 'number') {
        console.log(`${tall + 10 }`)
    }
}

introduct('Ian', 176)
introduct("Ian")


// 매개변수가 제한없이 들어올때 
function getSum (...rest: number[]) {
    let sum = 0
    rest.forEach((el) => sum += el)

    return sum
}

getSum(1,2,3) // 6
getSum(1,2,3,4,5) // 15

// 매개변수를 제한으로 둘때. 튜플로 길이 제한 
function getSum2 (...rest: [number, number, number]) {
    let sum = 0
    rest.forEach((el) => sum += el)

    return sum
}

getSum2(1,2,3) // 6
getSum2(1,2,3,4,5) // 15