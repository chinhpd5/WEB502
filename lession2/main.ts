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

sum(1,2)



