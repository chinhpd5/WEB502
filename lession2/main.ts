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


//union |

let a : string | number;
a = "chinhpd5"
a = 20
// a = true

let newArr : number[] | string[];
newArr = [1,2,3,4,5];
newArr = ["chinh", "long", "cường"]
// newArr = [1, "chính"]

let newArr2 : (number | string)[];
newArr2 = [1, "chính", 4.5, 'Bắc'];

// enum
enum myEnum {
    "a"= "Chính",
    "b" = "Nam",
    "c" = "Hoa"
}

// console.log(myEnum.b);
let myKey: myEnum= myEnum.b;
// console.log(myKey);

// type
type myType ={
    name: string,
    age: number,
    gender: boolean
}

let myInfo: myType;
let chinhInfo: myType= {
    name: "Chính",
    age: 20,
    gender: true
}

// interface

enum eJob {
    "IT"="Công nghệ thông tin",
    "FREE"= "Tự do" 
}

interface IPerson {
    name: string;
    age: number,
    gender: boolean
}
interface IRelationship {
    relationship?: boolean
}

interface IEmployee extends IPerson,IRelationship{
    job: eJob
}

let info :IEmployee={
    name: "chinhpd5",
    age: 20,
    gender: false,
    job: eJob.IT
}

// any và unknow

let abc : any;
abc = "chinh";
abc.toUpperCase();
abc= 20;
abc = true;
abc =[1,2,3]

let xyz : unknown;
xyz = "chinh";
// xyz= 20;
// xyz = true;

if(typeof xyz == 'string'){
    xyz.toUpperCase();
}

// generic

// type Data1 ={
//     data: {id: number, name: string},
//     status: boolean
// }

// type Data2 ={
//     data: {title: string, gender: boolean},
//     status: boolean
// }

type Data<myType>={
    data: myType,
    status: boolean
}

let myData1 : Data<{id: number, name : string}>={
    data: {id: 1, name: "chinhpd5"},
    status: true
}

let myData2 : Data<{title: string, gender: boolean}>={
    data: {title: "1", gender: true},
    status: false
}





