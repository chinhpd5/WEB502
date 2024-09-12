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

// console.log(name);
// console.log(parentAge);
// console.log(gender);
// console.log(childName);

//rest(...): phần còn lại

var arr = [1,2,3,4,5];

var [a,...rest] = arr

// console.log(a);
// console.log(rest);
var {name,...restObj}= obj;

// console.log(name);
// console.log(restObj);

function sum (a,...rest){
    // console.log(rest);
    // let total =0;
    rest.forEach((item)=>{
        a += item;
    })
    return a;
}

// console.log(sum(1,2,3,4));
// console.log(sum(1,2,3,4,5,6,7,8,9));

// spread (...): phân rã

var arr =[1,2]
var arr2 =[3,4]

var newArr1 = [...arr,...arr2];

// console.log(newArr1);
var obj1 = {
    name: "chinhpd5"
}

var obj2 = {
    name: "chinhpd6",
    age: 20
}

var newObj = {...obj2,...obj1}

// console.log(newObj);

var newObj3 = {...obj2} //obj2

obj2.name='long'

// console.log(obj2);
// console.log(newObj3);


// Nullish (??)

var x ; // undefinded , null

// x = x ?? 'deflaut value';
x ??= 'deflaut value'

// console.log(x);

// optional chaining (?.)

var obj = {
    name: "chinhpd5",
    // child:{name: "chinhpd6"}
}
// console.log(obj.child);

// console.log(obj?.child?.name);

// Xử lý bất đồng bộ trong JS

// setTimeout, setInterval, call api (fecth axios,...), click submit,

// console.log(1); // 1 // đồng bộ

// setTimeout(()=>{ // bất đồng bộ
//     console.log(2); // chờ 2s -> 2
// },2000)

// console.log(3); // 3 // đồng bộ

//1
//3
// sau 2s -> 2

// 1
// chờ 2s -> 2
// 3

// callback
// promise
// async/await

// callback

var sayHello =(name) =>{
    console.log(`Xin chào ${name}`);
}

var doing = (callback)=>{
    callback("chinhpd5")
}

// doing(sayHello);

//fake 1 tác vụ bất đồng bộ
var delay = (callback,ms)=>{
    setTimeout(()=>{
        let data ='Dữ liệu';
        callback(data)
    },ms)
}

var doing = ()=>{
    //việc 1
    console.log("Bắt đầu");
    delay((data)=>{
        console.log(data);
        console.log("Kết thúc");

        //việc 2
        console.log("Bắt đầu2");
        delay((data)=>{
            console.log(data);
            console.log("Kết thúc2");

            // việc 3
            console.log("Bắt đầu 3");
            delay((data)=>{
                console.log(data);
                console.log("Kết thúc 3");
                
            },2000)
            
        },2000)

    },1500)

}

// doing(); 
// callback hell

// promise 

var myPromise = new Promise((reslove, reject)=>{
    const isCheck = true;
    if(isCheck){
        reslove("Thành công")
    }else{
        reject("Thất bại")
    }
})

// myPromise
//     .then((data)=>{
//         console.log(data);
//         return myPromise;
//     })
//     .then(data2=>{
//         console.log(data2);
//         return myPromise;
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log(err);
//     })
//     .finally(()=>{
//         console.log("Kết thúc");
//     })

var delay = (ms)=>{

    return new Promise((reslove, reject)=>{

        setTimeout(()=>{
            reslove("Thực thi")
        },ms)

    })
}

var doing= ()=>{
    delay(2000)
        .then((data)=>{
            console.log("Bắt đầu 1");
            console.log(data);
            console.log("Kết thúc 1");
            return  delay(1500);
        })
        .then((data)=>{
            console.log("Bắt đầu 2");
            console.log(data);
            console.log("Kết thúc 2");
            return  delay(1000);
        })
        .then((data)=>{
            console.log("Bắt đầu 3");
            console.log(data);
            console.log("Kết thúc 3");
            // return  delay(2000);
        })
        .catch(()=>{
            console.log("lỗi");
        })

}

doing();



















    





