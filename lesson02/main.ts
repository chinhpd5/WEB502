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

// type
type Person = {
  id: number,
  name: string,
  gender?: boolean
}

let person1: Person = {
  id: 1,
  name: 'Nguyễn Văn A',
  gender: true
}

let person2: Person = {
  id: 2,
  name: "Trần Thị B",
}

type Student = Person & {
  major: string
}

let student1: Student = {
  id: 3,
  name: "Nguyễn Văn C",
  gender: true,
  major: "Công nghệ thông tin"
}

// interface
interface IPerson {
  id: number,
  name: string
}

let person3: IPerson = {
  id: 5,
  name: "Đặng Thị F"
}

interface IStudent extends IPerson {
  major: string,
  GPA: number
}

let student2: IStudent = {
  id: 6,
  name: "Nguyễn Văn H",
  major: "Marketing",
  GPA: 8.5
}