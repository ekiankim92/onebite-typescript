/**
 * Template Literal Type 
 * 템플릿 리터럴 타입 
 */

type Color = 'red' | "blue" | 'green'

type Animal = 'dog' | 'cat' | 'chicken'

type ColoredAnimal = 'red-dog' | 'red-cat' | 'red-chicken' | 'black-dog'

type ColoredAnimal2 = `${Color}-${Animal}`

// 이렇게 하면 모든 조합이 나옴 
const coloredAnimal : ColoredAnimal2 = ''

