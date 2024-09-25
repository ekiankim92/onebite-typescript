// void 
// 아무것도 없음을 뜻함 
// 아무것도 없음을 의미하는 타입 

// func 에 반환값이 문자열 
function func (): string {
    return 'hello'
}

// 반환값이 없는 타입
// return 문을 사용하지 않을 경우 
function func2 (): void {
    console.log('hello')
}

// strictNullChecks 로 가능하게끔 가능 
let a: void;
 a= 1
 a= 'hi'
 a={}
 a= undefined // void 는 undefined 만 가능 


 // never 
 // 불가능한 타입 
 // 절대로 정상적으로 종료될수가 없음. 반환값이 있는것 자체가 모순 
 function func3 (): never {
    while (true) {}
 }

 function func4 (): never {
    throw new Error()
 }

 // strictNullChecks 로 해도 불가능 
let b: never;
b= 1
b= 'hi'
b={}
b= undefined // void 는 undefined 만 가능 