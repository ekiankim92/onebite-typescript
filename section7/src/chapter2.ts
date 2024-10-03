/**
 * map method 정의 
 */

const arr = [1,2,3]
const newArr = arr.map((el) => el * 2) // [2,4,6]

function map<T, U> (arr: T[], callback: (item: T) => U) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]))
    }

    return result
}

map(arr, (el) => el * 2)
map(['a', 'b', 'c'], (el) => el.toUpperCase())
map(['a', 'b', 'c'], (el) => parseInt(el))

/**
 * forEach method 정의
 * 어떤 값을 반환하지 않고 배열에 각 요소를 한번씩만 수행 
 */

const arr2 = [1,2,3]
arr2.forEach((el) => console.log(el))

function forEach<T, U> (arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

forEach(arr2, (el) => {
    console.log(el.toFixed())
})

forEach(['a', 'b', 'c'], (el) => {
    el
})
