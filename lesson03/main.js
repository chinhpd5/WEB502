"use strict";
class Person {
    id; // private: chỉ có thể truy xuất bên trong class
    name; // public: có thể truy xuất bên trong hoặc ngoài class và class con kế thừa
    gender; // protected: chỉ có thể truy xuất bên trong class hoặc class con kế thừa
    constructor(id, name, gender) {
        this.id = id;
        this.name = name;
        this.gender = gender;
    }
    showInfo() {
        return `Id: ${this.id},Họ và tên: ${this.name}, Giới tính: ${this.gender ? 'Nam' : 'Nữ'}`;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        if (id > 0) {
            this.id = id;
        }
    }
}
const person1 = new Person(1, 'chinhpd5', true);
// person1.name = 'new chinhpd5'; // lỗi vì name: readonly
// console.log(person1.name);
// console.log(person1.id); lỗi vì id: private
// console.log(person1.showInfo());
// tính đóng gói: private, protected
person1.setId(-10);
console.log(person1.getId());
// kế thừa
class Student extends Person {
    major;
    GPA;
    constructor(id, name, gender, major, GPA) {
        super(id, name, gender);
        this.major = major;
        this.GPA = GPA;
    }
    // tính đa hình
    showInfo() {
        return `
      Họ và tên: ${this.name}, 
      Giới tính: ${this.gender ? 'Nam' : 'Nữ'}
      Khoa: ${this.major}
      Điểm TB: ${this.GPA}
    `;
    }
}
const student1 = new Student(2, 'chinhpd6', false, 'Công nghệ thông tin', 8.5);
// console.log(student1.GPA);
// console.log(student1.showInfo());
// tính trừu tượng
class Shape {
}
class Circle extends Shape {
    r;
    constructor(r) {
        super();
        this.r = r;
    }
    area() {
        return Math.PI * this.r * this.r;
    }
}
const circle1 = new Circle(10);
console.log(circle1.area());
class Square extends Shape {
    d;
    constructor(d) {
        super();
        this.d = d;
    }
    area() {
        return this.d * this.d;
    }
}
const square1 = new Square(10);
console.log(square1.area());
