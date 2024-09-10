// biến: var let const 

var myName ="chinhpd5";
var myName ="chinhpd6";

let age1 =20;
age1 =30;

const PI = 3.14;

// PI =4

//scope

// global scope

var name = 'Chính';

// console.log(name);

function test(){
    console.log(name);
}

// test()

// block scope (if for while switch ...)
{
    // var a =1;
    let b =2; // const
}

// console.log(b);

// local scope (function)
function sayHi(){
    var i = "chính" // let const
}

// console.log(i);

//hosting

i=6;
// console.log(i);
var i;

// console.log(a);
let aa=10; //const 

// Toán tử
/**
 * Toán số học: + - * % **
 * Toán gán: = += (i+=1 => i =i +1) -= ...
 * Toán so sánh: > < == >= <= ===
 * Toán logic: && || !
 */

// Biểu thức

/**
 * if else
 * Toán tử 3 ngôn (check == true ? 'đúng':'sai')
 * switch case
 * 
 * for
 * while 
 * do while
 */

// function

//declaration function
function myFunction(){

}

//expression function
var myFunction1 = function(){

}

//arrow function
var myFunction2 = () => {
    return "chinhpd5"
}

var myFunction3 = () => 'chinhpd6'

// class

//array
/**
 * forEach: duyệt qua 1 mảng
 * map: duyệt qua 1 mảng, trả về 1 mảng mới
 * filter: duyệt qua 1 mảng, trả về 1 mảng mới theo điều kiện
 * reduce: duyệt qua 1 mảng, tính toán
 * find
 * some
 * every
*/

var arr = ["Chinh","Long","Hoàng Anh"]

const newArr = arr.map((item,index)=>{
    return item + 'x2'
})
// console.log(newArr);

var arr1 = [1,2,3,4,5,6]

var newArr1 = arr1.filter((item)=>{
    return item > 3
})

// console.log(newArr1);

const total = arr1.reduce((tol,item)=>{ return tol += item},10)

// console.log(total);

//default parameter
function sum(a=1,b=0){
    return a+b;
}

// console.log(sum(10));

//destructuring

var arr = [1,2,3];
var [a,,c] = arr

// console.log(a);
// // console.log(b);
// console.log(c);

var obj ={
    name: "chinhpd5",
    age: 20,
    gender: true,
    child: {
        name: "chinhpd6"
    }
}

var {name,age: parentAge,gender,child: {name : childName}} = obj

console.log(name);
console.log(parentAge);
console.log(gender);
console.log(childName);







    





