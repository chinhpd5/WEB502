// tuple
let myTuple: [string, number, boolean];
myTuple = ['chinhpd5', 20, true];

let myRGB: [number,number, number] = [0,0,255];
myRGB = [1,100,255];

// enum
enum Status {
  SUCCESS = 'success',
  WARNING = 'warn',
  ERROR = 'error'
}

let myStatus: Status = Status.WARNING

// console.log(myStatus);

// any
let myName: any = 'chinhpd5';
// myName = 10;
console.log(myName.toUpperCase());


// unknow
let myAge: unknown = 'chinhpd5';
// myAge =10

if(typeof myAge == 'string'){
  console.log(myAge.toUpperCase());
}

