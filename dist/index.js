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
console.log(Direction1.Up, Direction2.Left);
