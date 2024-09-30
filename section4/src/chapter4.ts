/**
 * 사용자 정의 타입가드 
 */

type Dog = {
    name: string
    isBark: boolean
}

type Cat = {
    name: string
    isScratch: boolean
}

type Animal = Dog | Cat

function isDog (animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined
}


function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined
}
 
function warning (animal: Animal) {
    // 밑에처럼 할수 있지만 코드리딩이 어려움 
    if ('isBark' in animal) {
        // Dog
    } else if ('isScratch' in animal) {
        // cat
    }

    if (isDog(animal)) {
        // Dog 
        animal
    } else {
        // Cat
    }
}