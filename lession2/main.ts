// tsc main.ts --watch
/**
 * string
 * number
 * boolean
 */

let myName : string = "chinhpd5";
myName = "Phí Đức Chính";

// console.log(myName);

let myAge : number = 20
// console.log(myAge);

let gender : boolean = true;
// console.log(gender);

let myAdrress = "Hà Nội";
// myAdrress = 20


// function

function myFunction(name: string): string{

    return `Xin chào ${name}`
}

// console.log(myFunction("chinhpd5"));

function sum(a: number, b: number): void{
    console.log(a+b);
}

// sum(1,2)

//array

let myArray: number[] = [1,2,3,4,-5,6.5];
let myLove : string[] = ["Long", "Bình", 'true', '40'];

// console.log(myArray);

//object

let myObject : {
    name : string,
    age : number,
    gender? : boolean // ? có thể có hoặc không
} = {
    name: "chinhpd5",
    age: 20,
    // gender: true
}




