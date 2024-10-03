/**
 * Class 클래스 
 */

// 예를 들어 수강생들을 만들려면 studentA 를 복사해서 여러개를 고쳐야하지만, class 를 만들어놓으면 붕어빵 기계처럼 한번만 하면 됨 
let studentA = {
    name: "Ian",
    grade: "A+",
    age: 27,
    study () {
        console.log("Study hard")
    },
    introduce () {
        console.log("hello")
    }
}

// 클래스는 객체를 찍어내는 붕어빵 기계 같은것 
class Student {
    // 필드 Field 
    name;
    grade;
    age;

    // 생성자. 실제로 객체를 만드는곳 
    constructor (name, grade, age) {
        this.name = name
        this.grade = grade
        this.age = age

    }

    // Method 만들기. Method 는 그냥 함수처럼 사용 가능 
    study () {
        console.log("Study hard")
    }

    introduce () {
        console.log("hello")
    }

    introduct2 () {
        console.log(`Hi, my name is ${this.name}`)
    }
}

// new 로 사용해서 새로운 객체를 생성 
// 클래스를 이용해서 만든 객체를 인스턴스라고 부름 
// stduentB instance 
let studentB = new Student("Grade", "A-", 29)
studentB.study()
studentB.introduce()

// 이렇게 만들면 하나하나 계속 추가해야함. Class 도 상속 받을수 있음 
class StudentDeveloper {
    // 필드 
    name 
    grade 
    age
    favoriteSkill

    // 생성자
    constructor (name, grade, age, favoriteSkill) {
        this.name = name
        this.grade = grade
        this.age = age
        this.favoriteSkill = favoriteSkill
    }

    // Method 
    study () {
        console.log("Study hard")
    }

    introduce () {
        console.log("hello")
    }

    introduct2 () {
        console.log(`Hi, my name is ${this.name}`)
    }

    programming () {
        console.log(`${this.favoriteSkill} is my skill`)
    }
}

const studentDeveloper = new StudentDeveloper('Ian', "A", 29, 'TS')
console.log(studentDeveloper)
studentDeveloper.favoriteSkill()


class StudentDeveloper2 extends Student {
    // 필드 
    favoriteSkill

    // 생성자
    constructor (name, grade, age, favoriteSkill) {
        super(name, grade, age) // 이렇게 하면 슈퍼, 부모 생성자가 호출됨 
        this.favoriteSkill = favoriteSkill
    }

    // Method 
    programming () {
        console.log(`${this.favoriteSkill} is my skill`)
    }
}