/**
 * 타입스크립트 클래스에서만 사용 가능
 * 접근 제어자
 * Access Modifier 
 * Public, Private, Protected
 */

class Employee {
    // 클래스에 접근 제어자가 기본적으로 public 으로 붙어 있음 
    // public 으로 설정하면 아래에 한것처럼 instance 에 property 에 접근 가능. 아무 제약이 없는 상태 
    public name: string
    public age: number
    public position: string


    // private 은 내부에서만 허용 
    private name: string
    private age: number
    private position: string

    // 외부로는 막고 파생된것들은 허용
    protected name: string
    protected age: number
    protected position: string

    // 생성자
    constructor (name: string, age: number, position: string) {
        this.name = name
        this.age = age
        this.position = position;
    }

    // Method
    work () {
        console.log(`${this.name} 입니당!` )
    }
} 

const employee = new Employee("Ian", 25, "FE")

// 이렇게 가능한 이유는 클래스가 객체이기 떄문 
// private 으로 설정했기 때문에 외부에서는 프로퍼티에 접근 불가능
employee.name = "Grade"
employee.age = 29
employee.position = "FE"

// private 으로 생성된거는 파생된 클래스에 조차 사용이 불가능 
class ExecutiveOfficer extends Employee {
    // Field
    officeNumer: number

    // 생성자
    constructor (name: string, age: number, position: string, officeNumer: number) {
        super(name,age,position) // 부모에서 내려오는 상속 
        this.officeNumer = officeNumer
    }

    // 
    func () {
        // 부모가 private 이기 때문에 에러 
        this.name
    }
}

// public 아무것도 제한 하지 않음 
// private 클래스 내부 아니면 모든곳에서 접근 제안 
// protected 외부에서는 접근 불가능하지만 파생 클래스에서만 접근 가능 