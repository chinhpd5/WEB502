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

// union
let myVar: string|number|boolean = 'chinhpd5';
myVar = true

let myArray: string[]|number[] = ['a', 'b', 'c']
myArray = [1, 2, 3]

let myArray1: (string|number)[] = [1, 'a', 2]

// Literal
let myLiteral: 'success'|'warn'|'error';
myLiteral = 'success';
// myLiteral = 'warn1';

// type
type Person = {
  id: number,
  name: string,
  gender?: boolean
}

let person1: Person = {
  id: 1,
  name: "chinhpd5",
  gender: true
}

let person2: Person = {
  id: 2,
  name: "Nguyễn Văn A",
  // gender: false
}

type Student = Person & {
  major: string
}

let student1: Student = {
  id: 3,
  name: "Trần Thị B",
  gender: false,
  major: "Công nghệ thông tin"
}

// interface

interface IPerson {
  id: number,
  name: string,
  gender?: boolean
}

let person3: IPerson = {
  id: 4,
  name: "Trần Văn D",
  gender: true
}

// IStudent kế thừa IPerson
interface IStudent extends IPerson {
  major: string,
  GPA: number
}

let student3: IStudent = {
  id: 5,
  name: "Nguyễn F",
  gender: true,
  major: 'Marketing',
  GPA: 9.0
}

// Generic <>
function dosomething1 (a: number): number {
  return a;
}

function dosomething2 (a: string): string {
  return a;
}

function dosomething<T>(a: T):T {
  return a
}

dosomething<number>(1);
dosomething<string>("a");
dosomething<IPerson>(person1);
