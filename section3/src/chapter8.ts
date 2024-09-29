/**
 * 서로소 유니온 타입 
 * 서로소는 교집합이 없는 타입들로만 만든 유니온 타입을 말함 
 * 공통적으로 하나도 포함되지 않음 
 */

type Admin = {
    tag: "ADMIN"
    name: string
    kickCount: number
}

type Member = {
    tag: "MEMBER"
    name: string
    point: number
}

type Guest = {
    tag: "GUEST"
    name: string
    visitCount: number
}

type User = Admin | Member | Guest 

// Admin = {name}님 현재까지 {kickCount}명 강퇴했습니다
// Member = {name}님 현재까지 {point}모았습니다
// Guest = {name}님 현재까지 {visitCount}번 오셨습니다
function login (user: User) {
    // 이런식으로 타입 가드를 만들수 있지만 코드리딩이 어려움
    if ('kickCount' in user) {
        // 어드민
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`)
    } else if ('point' in user) {
        // member type
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`)
    } else {
        // guest type 
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 왔어`)
    }
}

// 위에 코드를 이렇게 바꿀수 있음 
function login1 (user: User) {
    if (user.tag === "ADMIN") {
        // 어드민
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`)
    } else if (user.tag === 'MEMBER') {
        // member type
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`)
    } else {
        // guest type 
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 왔어`)
    }
}

// 위에 보다 더 직관적으로 
function login2 (user: User) {
    switch (user.tag) {
        case "ADMIN" : {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`)
            break
        }
        case "MEMBER" : {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다`)
            break
        }
        case "GUEST" : {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 왔어`)
            break
        }
    }
}


/**
 * 복습겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체 
type AsyncTask = {
    state: "LOADING" | "FAILED" | "SUCCESS"
    error?: {
        message: string
    }
    response?: {
        data: string
    }
}

// 이렇게 위와 아래에 해버리면 옵션널 체이닝이 붙어서 우리가 원하는게 아닐수도 있음. 이럴때는 3개를 아예 놔누는것이 서로소 유니온 타입으로 만듦

// 로딩중 = 콘솔에 로딩중 
// 실패 => 실패: 에러메시지 출력
// 성공 => 성공 : 데이터 출력 
function processResult (task: AsyncTask) {
    switch (task.state) {
        case "LOADING" : {
            console.log("Loading")
            break
        }
        case "FAILED" : {
            console.log(`${task.error?.message}`)
            break
        }
        case "SUCCESS" : {
            console.log(`${task.response?.data}`)
            break
        }
    }
}

type LoadingTask = {
    state: "LOADING"
}

type FailedTask = {
    state: 'FAILED',
    error: {
        message: "Error message ~"
    }
}

type SuccessTask = {
    state: "SUCCESS",
    response: {
        data: string
    }
}

type AsyncTask2 = LoadingTask | FailedTask | SuccessTask
// 위에껄로 하면 optional chaining 이 안붙음. 타입들 간에 교집합이 없음 
function processResul2 (task: AsyncTask2) {
    switch (task.state) {
        case "LOADING" : {
            console.log("Loading")
            break
        }
        case "FAILED" : {
            console.log(`${task.error.message}`)
            break
        }
        case "SUCCESS" : {
            console.log(`${task.response.data}`)
            break
        }
    }
}

const loading: AsyncTask = {
    state: "LOADING"
}

const failed: AsyncTask = {
    state: 'FAILED',
    error: {
        message: "Error message ~"
    }
}

const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "Date"
    }
}
