//string
let myName: string = "chinhpd5";
// myName = '10';
// console.log(myName);
console.log(myName.toUpperCase());


// number
let myAge: number = 20;
let myScore: number = 5.7;
let myMath: number = -10;
// console.log(myAge.toUpperCase());

// boolean
let myGender: boolean = true;
// myGender = 1

let myArray: string[] = ["Long", "Bình", "Cường"];
let myArray1: number[] = [1, 2, -10, 5.5];

for(let i: number = 0; i< myArray.length; i++){
  console.log(myArray[i]);
}

//object
let myInfo: {
  name: string,
  age: number,
  gender: boolean
} = {
  name: 'chinhpd5',
  age: 10,
  gender: false
}

console.log(`
  Họ và tên: ${myInfo.name},
  Tuổi: ${myInfo.age},
  Giới tính: ${myInfo.gender ? 'Nam': 'Nữ'}  
`);

function sum(a: number, b: number): number {
  return a+b;
}
console.log(sum(1, 1));

const sayHello = (name: string): string => {
  return `Xin chào ${name}`
}
console.log(sayHello('chinhpd5'));

const doLogic = (): void => {
  console.log("123");
}





