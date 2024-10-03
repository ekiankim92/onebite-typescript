/**
 * Generic Class 
 */

class NumberList {
    constructor(private list: number[]) {
        // private 접근 제어자가 있으면 밑에 안써줘도됨 
        // this.list = list
    }

    push(data: number) {
        this.list.push(data)
    }

    pop () {
        return this.list.pop()
    }

    print() {
        console.log(this.list)
    }
}

const numberList = new NumberList([1,2,3])

numberList.pop()
numberList.push(4)
numberList.print


// 위에 코드는 숫자 배열이지만 예를 들어 string 배열로 만들어야하만다면 복사 복붙을 해서 다시 해야함. 그걸 방지하게 위해서 generic interface 사용함 
class List<T> {
    constructor(private list: T[]) {
        // private 접근 제어자가 있으면 밑에 안써줘도됨 
        // this.list = list
    }

    push(data: T) {
        this.list.push(data)
    }

    pop () {
        return this.list.pop()
    }

    print() {
        console.log(this.list)
    }
}

const numberList2 = new List([1,2,3])

numberList2.pop()
numberList2.push(4)
numberList2.print

const stringList = new List(['a', 'b', 'c'])
