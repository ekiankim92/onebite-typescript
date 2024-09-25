// any 
// 특정 변수의 타입을 우리가 확실히 모를떄 

let anyVar: any = 10 

anyVar = 'hello'
anyVar = false
anyVar = {}
anyVar = () => {}
anyVar.toUpperCase()
anyVar.toFixed()

let num: number = 10 
num = anyVar

// unknown 
// 모든게 통과되진 않음 
let unknownVar: unknown; 
unknownVar = ''
unknownVar = 10 
unknownVar = {}
unknownVar = () => {}

unknownVar.toUpperCase() // unknown 은 활용 안됨 

if (typeof unknownVar === 'number') {
    num = unknownVar
}
 