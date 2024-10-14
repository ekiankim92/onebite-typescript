/**
 * Pick<T, K> 
 * 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
 */

interface Post {
    title: string
    tag: string[]
    content: string
    thumbnailURL?: string
}

type Pick<T, K extends keyof T> = {
    // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL' 이 조건식은 참이 됨 
    [key in K] : T[key]
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
    title: "Old title",
    content: "Old Content"
}

/**
 * Omit<T, K>
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<"title", "content" | "tag" | "thumbnailURL" | "title">>
// Pick<Post, "content" | "tag" | "thumbnailURL">

const noTitlePost: Omit<Post, 'title'> = {
    content: "",
    tag: [],
    thumbnailURL: ''
}

/**
 * Record<K, V>
 */

type ThumbnailLegacy = {
    large: {
        url: string
    },
    medium: {url: string},
    small: {url: string},
    watch:  {url: string},
}

type Record<K extends keyof any, V> = {
    [key in K] : V
}


type Thumbnail = Record<"large" | "medium" | "small", {url: string, size: number}>