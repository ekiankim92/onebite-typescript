/**
 * 타입스크립트의 클래스 
 */

const employee = {
    name: "Ian",
    age: 30, 
    position: "FE",
    work () {
        console.log("Working")
    }
}

class Employee {
    // 밑에 에러가 나오는 이유는 타입을 추론할수 없어서 나오는 에러 
    // name
    // age
    // position

    // Field 
    name: string
    age: number
    position: string

    // 생성자
    constructor (name: string, age: number, position: string) {
        this.name = name
        this.age = age
        this.position = position;
    }

    // Method
    work () {
        console.log("Working")
    }
} 

const employeeB = new Employee('Grade', 32, "BE")
console.log(employeeB)
employeeB.work()


// 타입스크립트 클래스는 타입으로도 활용가능 
const employeeC : Employee = {
    name: "",
    age: 0, 
    position: "",
    work() {}
}

class ExecutiveOfficer extends Employee {
    // Field
    officeNumer: number

    // 생성자
    constructor (name: string, age: number, position: string, officeNumer: number) {
        super(name,age,position) // 부모에서 내려오는 상속 
        this.officeNumer = officeNumer
    }
}