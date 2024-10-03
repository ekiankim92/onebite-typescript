/**
 * Inteface and Class 
 */

// interface 는 무조건 public field만 정의 가능 
interface CharacterInterface {
    name: string
    moveSpeed: number
    move(): void
}

// Character 는 CharacterInterface를 구현한다는 의미가 implements
// Character 클래스가 실제로 CharacterInterface 설계도를 구현하는 거임 
class Character implements CharacterInterface{
    // interface 에 있는걸 사용하지않을려면 밑에 그냥 정의
    constructor(public name: string, public moveSpeed: number, private extra: string) {
        this.name = name
        this.moveSpeed = moveSpeed
        this.extra = extra
    }

    move() {
        console.log(`${this.moveSpeed} is moving speed`)
    }
}