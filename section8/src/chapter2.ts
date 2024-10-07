/**
 * Mapped Type
 * 객체 타입을 조작 
 */

interface User {
    id: number
    name: string
    age: number
}

// mapped type 에 ? 를 더하면 선택적 프로퍼티가 됨 
type PartialUser = {
    [key in 'id' | "name" | "age"]?: User[key]
}

type BooleanUser = {
    [key in "id" | "name" | "age"]: boolean
}

type NumberUser = {
    [key in keyof User] : number
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key]
}

// 한명의 유저 정보를 불러오는 기능 
function fetchUser (): ReadonlyUser {
    return {
        id: 1,
        name: "Ian",
        age: 30
    }
}
// readonly 라서 수정이 불가능 
const user = fetchUser()
user.id = 2

// 한명의 유저 정보를 수정하는 기능 
function updateUser (user) {
    // 수정하는 기능 
}

updateUser({
    id: 1, 
    name: "Ian",
    age: 38
})