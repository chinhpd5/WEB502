// tsc main.ts --watch
/**
 * string
 * number
 * boolean
 */
var myName = "chinhpd5";
myName = "Phí Đức Chính";
// console.log(myName);
var myAge = 20;
// console.log(myAge);
var gender = true;
// console.log(gender);
var myAdrress = "Hà Nội";
// myAdrress = 20
// function
function myFunction(name) {
    return "Xin ch\u00E0o ".concat(name);
}
// console.log(myFunction("chinhpd5"));
function sum(a, b) {
    console.log(a + b);
}
// sum(1,2)
//array
var myArray = [1, 2, 3, 4, -5, 6.5];
var myLove = ["Long", "Bình", 'true', '40'];
// console.log(myArray);
//object
var myObject = {
    name: "chinhpd5",
    age: 20,
    // gender: true
};
//union |
var a;
a = "chinhpd5";
a = 20;
// a = true
var newArr;
newArr = [1, 2, 3, 4, 5];
newArr = ["chinh", "long", "cường"];
// newArr = [1, "chính"]
var newArr2;
newArr2 = [1, "chính", 4.5, 'Bắc'];
