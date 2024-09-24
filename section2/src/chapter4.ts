// 타입 별칭. 중복되는 타입을 합침 
let user: User = {
    id: 1, 
    name: 'Ian',
    nickname: 'koo',
    birth: 'seoul',
    bio: 'dddd'
}

let user2: User = {
    id: 2, 
    name: 'Ian',
    nickname: 'koo',
    birth: 'seoul',
    bio: 'dddd'
}

type User = {
    id: number,
    name: string;
    nickname: string;
    birth: string;
    bio: string
}


// 인덱스 시그니처 
// 객체에 프로퍼티에 규칙을 보면됨 
// key 와 value 에 규칙으로 객체에 타입을 정의 할수 있음 
// 객체에 key 와 value 에 타입을 지정해줌 
type country = {
    [key: string]: string
}

let countryCodes: country = {
    Korea: "ko",
    USA: 'us',
    UK: 'uk'
}

type countryNum = {
    [key: string]: number; 
    Korea: number // 이렇게 하면 Korea 는 무조건 들어가야함 
}

let countryNumCodes: countryNum = {
    Korea: 123,
    // USA: 310,
    // UK: 239
}

