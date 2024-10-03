/**
 * Generic interface 
 */

// <K, V> 타입 변수: 타입 파라미터, 제네릭 타입 변수, 제네릭 타입 파라미터 
interface KeyPair<K, V> {
    key: K,
    value: V
}

// 타입을 사용할떄 반드시 꺽새를 사용해야함 
// 사용하는 타입을 꺽새로 지정해줘야함 
let keyPair : KeyPair<string, number> = {
    key: "key",
    value: 0
}

let keyPair2 : KeyPair<boolean, string[]> = {
    key: false,
    value: ['a', 'b', 'c']
}

/**
 * Index Signature
 */

interface NumberMap {
    [key: string] : number
}

let numberMap1 : NumberMap = {
    one: 1,
    two: 2,
}

interface Map<V> {
    [key: string]: V
}

let stringMap : Map<string> = {
    one: "1",
}

let booleanMap: Map<boolean> = {
    one: true
}

/**
 * Generic 타입 별칭
 */

type Map2<V> = {
    [key: string]: V
}

let stringMap2 : Map2<string> = {
    key: "HE",
} 

/**
 *  제네릭 인터페이스 활용 예시 
 * 유저 관리 프로그램
 * 유저 구분: 학생 유저 / 개발자 유저
 */

// 시로소 타입 
interface Student {
    type: 'student', // string literal 
    school: string,
}

interface Developer {
    type: "developer", // string literal
    skill: string
}

interface User<T> {
    name: string
    profile: T
}

function goToSchool (user: User<Student>) {
    // 제네릭 인터페이스를 사용하면 밑에 처럼 타입 좁히기가 필요 없어짐 
    // if (user.profile.type !== 'student') {
    //     console.log("Wrong site")
    //     return
    // }

    const school = user.profile.school

    console.log(`${school}로 등교 완료`)
}

const developerUser : User<Developer> = {
    name: "Ian",
    profile: {
        type: "developer",
        skill: "TS"
    }
}


const stduentUser : User<Student> = {
    name: "Grace",
    profile: {
        type: 'student',
        school: "BHS"
    }
}