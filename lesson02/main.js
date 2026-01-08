"use strict";
// tuple
let myTuple = [1, 'chinhpd5', true];
let myRGB = [0, 0, 255];
let myRGB1 = [1, 1, 100];
// enum
var Status;
(function (Status) {
    Status["SUCCESS"] = "success";
    Status["WARNING"] = "warn";
    Status["ERROR"] = "error";
})(Status || (Status = {}));
let myStatus = Status.WARNING;
console.log(myStatus);
// any
let myVar = 'chinhpd5';
console.log(myVar.toUpperCase());
myVar = 10;
myVar = true;
// unknown
let myVar1 = 'abc';
if (typeof myVar1 == 'string') {
    console.log(myVar1.toUpperCase());
}
myVar1 = 10;
