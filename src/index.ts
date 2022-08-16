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