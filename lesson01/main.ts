// string;
let myName: string = 'chinhpd5';
console.log(myName);

// number
let myAge: number = 10;
let score: number = 9.5;
let math = -10;

// boolean
let myGender: boolean = true;

// array
let myArray: string[] = ["nam", "Long", "bình"];
// myArray.push(10);
let myArray2: number[] = [0, 1, -3, 4.5];

for(let i: number = 0; i< myArray.length; i++){
  console.log(myArray[i]);
}

// object
let myInfo: {
  name: string,
  age: number,
  gender: boolean
} = {
  name: 'chinhpd5',
  age: 10,
  gender: false
}

console.log(
  `Tôi tên là ${myInfo.name}, 
  Tuổi: ${myInfo.age}, 
  Giới tính: ${myInfo.gender ? 'Nam': 'Nữ'}`
);
