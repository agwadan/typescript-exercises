//Basic Types
let id: number = 5;
let company: string = 'Aya'
let isDope: boolean = true

let something: any = 'Hello' //-------------- Can be set to anything as seen below
something = 45

//Arrays
let ids: number[] = [1, 2, 3, 4, 5, 6]//--------- Array of numbers
let anything: any[] = [1, false, "WhatsApp"]//--- An array of anything

//Tuple
let person: [number, string, boolean] = [1, 'Cow', false] //----- Has to be in the same order

//Tuple Array
let employee: [number, string][]
employee = [
  [1, "Pete"],
  [2, "John"]
]

//Union
let pid: number | string //----------- Can be one of the two types
pid = 22
pid = '22'

//Enums
enum Direction1 {//------------------- Enumerated values numbered from 0 ff by default ------ Given the first initial value, it continues to count from there.
  Up = 5,
  Down,
  Left,
  Right
}

enum Direction2 {//------------------- Enumerated values numbered from 0 ff by default ------ Given the first initial value, it continues to count from there.
  Up = 'Juu',
  Down = 'chini',
  Left = 'Kono',
  Right = " Dyo"
}

console.log(Direction1.Up, Direction2.Left);
