//string
var myName = "chinhpd5";
// myName = '10';
// console.log(myName);
console.log(myName.toUpperCase());
// number
var myAge = 20;
var myScore = 5.7;
var myMath = -10;
// console.log(myAge.toUpperCase());
// boolean
var myGender = true;
// myGender = 1
var myArray = ["Long", "Bình", "Cường"];
var myArray1 = [1, 2, -10, 5.5];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
//object
var myInfo = {
    name: 'chinhpd5',
    age: 10,
    gender: false
};
console.log("\n  H\u1ECD v\u00E0 t\u00EAn: ".concat(myInfo.name, ",\n  Tu\u1ED5i: ").concat(myInfo.age, ",\n  Gi\u1EDBi t\u00EDnh: ").concat(myInfo.gender ? 'Nam' : 'Nữ', "  \n"));
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 1));
var sayHello = function (name) {
    return "Xin ch\u00E0o ".concat(name);
};
console.log(sayHello('chinhpd5'));
var doLogic = function () {
    console.log("123");
};
