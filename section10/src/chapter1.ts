/**
 * Partial<T> 
 * 부분적인, 일부분의
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입 
 */

interface Post {
    title: string
    tag: string[]
    content: string
    thumbnailURL?: string
}

// Partial 타입을 직접 구현 
type Partial<T> = {
    [key in keyof T]? : T[key]
}

// 임시저장된 계시글 
// 모든 타입이 들어가지 않아도됨
const draft: Partial<Post> = {
    title: 'later',
    content: 'what...'
}

/**
 * Requried<T>
 * 필수적인 
 * 특정 객체 타입에 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입 
 */

// Required 타입을 직접 구현 
// -? 를 하면 필수적인 요소로 만듦
type Required<T> = {
    [key in keyof T]-?: T[key]
}

const withThumbnailPost : Required<Post> = {
    title: "TS",
    tag: ['ts', 'js'],
    content: "",
    thumbnailURL: "http://"
}

/**
 * Readonly<T>
 * 읽기 전용, 수정 불가 
 * 특정 객체 타입에서 모든 프로퍼티를 읽기 저용 프로퍼티로 만들어주는 타입 
 */

type Readonly<T> = {
    readonly [key in keyof T] : T[key]
}

const readonlyPost : Readonly<Post> = {
    title: "Locked post",
    tag: [],
    content: ""
}

// readonly 수정 불가 
readonlyPost.content = ""