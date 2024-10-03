/**
 * Promise object 
 * 프로미스
 */

// promise 는 resolve 나 reject 에 호출해서 전달하는 비동기 작업에 결과 값을 자동적으로 추론하지 않음 
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20) // resolve 는 비동기 작업이 성공 했을때 호출 되는 함수 . 20 은 인수에 값은 결과값 
        // reject() // reject 함수는 비동기 작업이 실패 했을떄 호출 . () 안에는 실패 이유 
        reject('~~ 때문에 실패 ')
    }, 3000)
})

// 결과값을 이용 
// response 에는 resolve 에서 인수로 전달되는 값이 들어옴 
promise.then((response) => {
    // console.log(response) // 20
    console.log(response * 10) 
})

promise.catch((error) => {
    if (typeof error === 'string'){
        console.log(error)
    }
})

/**
 * 프로미스를 반환하는 함수의 타입을 정의 
 */

interface Post {
    id: number
    title: string
    content: string
}

function fetchPost (): Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "Title",
                content: "Content"
            })
        }, 3000)
    })
}

const postRequest = fetchPost()

postRequest.then((res) => {
    res
})