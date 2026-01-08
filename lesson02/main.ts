// tuple
let myTuple: [number, string, boolean] = [1, 'chinhpd5', true];

let myRGB: [number, number, number] = [0,0,255];
let myRGB1: [number, number, number] = [1,1,100];

// enum
enum Status {
  SUCCESS = 'success',
  WARNING = 'warn',
  ERROR = 'error'
}

let myStatus: Status = Status.WARNING
console.log(myStatus);

// any
let myVar: any = 'chinhpd5';
console.log(myVar.toUpperCase());
myVar = 10;
myVar = true;

// unknown
let myVar1: unknown = 'abc';
if(typeof myVar1 == 'string'){
  console.log(myVar1.toUpperCase());
}
myVar1 = 10;

// union
let myVar2: string | number | boolean = 'abc';
myVar2 = 12;
myVar2 = true;

let myArray: number[]|string[] = [1,2,3,4];
myArray = ['a','b','c']

let myArray2: (number|string)[] = [1, "a", -3, 'abc']

// literal

let myLiteral: "success"|"warning"|"error" ="warning"

// myLiteral = 'abc'
