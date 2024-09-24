// enum type
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// type enum 은 compile 해도 안사라지고, 자바스크립트에 객체로 변환됨

enum Role {
    ADMIN = 0, // 숫자를 부여하지 않아도 0 부터 시작함. 10으로 시작해도 +1 이 다음으로 부여가됨
    USER = 1,
    GUEST = 2
}

enum Language {
    korean = 'ko',
    english = 'en'
}

const user1 = {
    name: 'Ian',
    role: Role.ADMIN,
    language: Language.korean
}

const user2 = {
    name: 'Grace',
    role: Role.USER
}

const user3 = {
    name: 'Park',
    role: Role.GUEST
}

console.log(user1, user2, user3)