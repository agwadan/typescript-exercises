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


//Objects
type User = {
  id: number,
  name: String
}

const user: User = {
  id: 1,
  name: 'Pete'
}

//Type Assertion
//-------- Changing the original type of a variable to be used somewhere else
let cid: any = 1;

//Method 1
const CustomerId = <number>cid;

//Method 2
const clientId = cid as number

//Functions
const AddNum = (x: number, y: number): number => {
  return x - y;
}
console.log(AddNum(10, 3));

//Void Functions
const Log = (message: string | number): void => {
  console.log(message);
}

Log('Pete');
Log(3)
console.log("_________________________________\n\n\nINTERFACES");

//Interface
interface UserInterface {
  readonly id: number, //---------- Means this can only be read and not written
  name: String,
  age?: number //------------------ "?"  Means it's optional
}

const user1: UserInterface = {
  id: 1,
  name: "James",
  age: 43
}

// Interfaces with functions
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

console.log(add(4, 3) + sub(8, 2));
