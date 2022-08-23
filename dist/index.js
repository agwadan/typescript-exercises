"use strict";
//Basic Types
let id = 5;
let company = 'Aya';
let isDope = true;
let something = 'Hello'; //-------------- Can be set to anything as seen below
something = 45;
//Arrays
let ids = [1, 2, 3, 4, 5, 6]; //--------- Array of numbers
let anything = [1, false, "WhatsApp"]; //--- An array of anything
//Tuple
let person = [1, 'Cow', false]; //----- Has to be in the same order
//Tuple Array
let employee;
employee = [
    [1, "Pete"],
    [2, "John"]
];
//Union
let pid; //----------- Can be one of the two types
pid = 22;
pid = '22';
//Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["Down"] = 6] = "Down";
    Direction1[Direction1["Left"] = 7] = "Left";
    Direction1[Direction1["Right"] = 8] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Juu";
    Direction2["Down"] = "chini";
    Direction2["Left"] = "Kono";
    Direction2["Right"] = " Dyo";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Pete'
};
//Type Assertion
//-------- Changing the original type of a variable to be used somewhere else
let cid = 1;
//Method 1
const CustomerId = cid;
//Method 2
const clientId = cid;
//Functions
const AddNum = (x, y) => {
    return x - y;
};
console.log(AddNum(10, 3));
//Void Functions
const Log = (message) => {
    console.log(message);
};
Log('Pete');
Log(3);
console.log("_________________________________\n\n\nINTERFACES");
const user1 = {
    id: 1,
    name: "James",
    age: 43
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(4, 3) + sub(8, 2));
console.log("_________________________________\n\n\nCLASSES");
class Person {
    constructor(id_passedIn, name_passedIn) {
        this.id = id_passedIn;
        this.name = name_passedIn;
    }
    register() {
        return `${this.name} is now Registered`;
    }
}
const brad = new Person(4, "Colin Mcrae");
const jane = new Person(3, "Jane Doe");
console.log(brad.register());
//Access Modifiers
//---- Public Leaves it open
//---- Private means that class property can be accessed or modified within the class.
//---- Protected means the class property can be accessed even by other classes that extend that particular class.
//Class Inheritance
//Employee is a subclass
class Employee extends Person {
    constructor(id, name, position_passedIn) {
        super(id, name);
        this.position = position_passedIn;
    }
}
const emp = new Employee(2, 'Jennifer', 'CEO');
console.log(emp.register());
