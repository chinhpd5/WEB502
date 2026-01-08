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
// union
let myVar2 = 'abc';
myVar2 = 12;
myVar2 = true;
let myArray = [1, 2, 3, 4];
myArray = ['a', 'b', 'c'];
let myArray2 = [1, "a", -3, 'abc'];
// literal
let myLiteral = "warning";
let person1 = {
    id: 1,
    name: 'Nguyễn Văn A',
    gender: true
};
let person2 = {
    id: 2,
    name: "Trần Thị B",
};
let student1 = {
    id: 3,
    name: "Nguyễn Văn C",
    gender: true,
    major: "Công nghệ thông tin"
};
let person3 = {
    id: 5,
    name: "Đặng Thị F"
};
let student2 = {
    id: 6,
    name: "Nguyễn Văn H",
    major: "Marketing",
    GPA: 8.5
};
// Generic
function doSomeThing1(a) {
    return a;
}
function doSomeThing2(a) {
    return a;
}
function doSomeThing(a) {
    return a;
}
doSomeThing(1);
doSomeThing("a");
doSomeThing(student2);
