"use strict";
// tuple
let myTuple;
myTuple = ['chinhpd5', 20, true];
let myRGB = [0, 0, 255];
myRGB = [1, 100, 255];
// enum
var Status;
(function (Status) {
    Status["SUCCESS"] = "success";
    Status["WARNING"] = "warn";
    Status["ERROR"] = "error";
})(Status || (Status = {}));
let myStatus = Status.WARNING;
// console.log(myStatus);
// any
let myName = 'chinhpd5';
// myName = 10;
console.log(myName.toUpperCase());
// unknow
let myAge = 'chinhpd5';
// myAge =10
if (typeof myAge == 'string') {
    console.log(myAge.toUpperCase());
}
// union
let myVar = 'chinhpd5';
myVar = true;
let myArray = ['a', 'b', 'c'];
myArray = [1, 2, 3];
let myArray1 = [1, 'a', 2];
// Literal
let myLiteral;
myLiteral = 'success';
// myLiteral = 'warn1';
