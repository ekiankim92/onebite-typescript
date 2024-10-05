/**
 * Indexed Assess Type 
 * 인덱스드 엑세스 타입 
 */

interface Post {
    title: string
    content: string
    author: {
        id: number
        name: string
        age: number
    }
}

// 타입을 이렇게 선언도 나쁘지는 않지만 author 안에 정보가 계속적으로 추가해야함 
// ₩function printAuthorInfo (author: {id: number, name: string}) {
//     console.log(`${author.name}-${author.id}`)
// }

const key = 'author'
// Post[key] 이렇게 사용할수는 없음. 오로지 타입만 들어올수 있음 
// key 는 변수도 값이라서 못들어감 

// index 에 타입을 쓰더라도 객체에 있어야하는 값을 써야함 
// Post["What"] 이런건 못씀 

// 해당 author 프로퍼티에서 아이디만 갖고오고 싶다면 
// 일단 먼저 Post['author'] 값을 갖고 와야함 
// Post['author'][id] 중첩으로 사용 가능 

function printAuthorInfo (author: Post['author']) {
    console.log(`${author.name}-${author.id}`)
}

const post: Post = {
    title : "Title",
    content: "Content", 
    author: {
        id: 1,
        name: "Author",
        age: 31
    }
}

type PostList = {
    title: string
    content: string
    author: {
        id: number
        name: string
        age: number
    }
}[]

function printAuthorInfo2 (author: PostList[number]['author']) {
    console.log(`${author.name}-${author.id}`)
}

const post2: PostList[number] = {
    title : "Title",
    content: "Content", 
    author: {
        id: 1,
        name: "Author",
        age: 31
    }
}

type Tup = [number, string, boolean]

type Tup0 = Tup[0]

type Tup1 = Tup[1]

type Tup2 = Tup[2]

type Tup3 = Tup[3]

type TupNum = Tup[number]