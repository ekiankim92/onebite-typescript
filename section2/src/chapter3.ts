// 객체 
// 객체 리터럴 타입 
// object type. property type 까지 다 정의 해야힘  
let user: {id?: number, name: string} = {
    id: 1,
    name: "Ian"
}

let dog: {name: string, color: string} = {
    name: 'sookhee',
    color: 'blue'
}

// 유저 객체에 아이디를 모르거나 아직 없을수도 있을때. 선택적으로 바꿈 
// optional property
user = {
    name: "Grace"
}

// 객체 안에서 apiKey 속성을 아예 못바꾸게 하는게 readonly
let config: {readonly apiKey: string} = {
    apiKey: 'asdalksjdlkajsd',
}

config.apiKey = 'hello world'