"use strict";
class Person {
    id; // private: chỉ có thể truy xuất bên trong class
    name; // public: có thể truy xuất bên trong và ngoài class
    gender; // protected: chỉ có thể truy xuất bên trong call hoặc class con kế thừa
    constructor(id, name, gender) {
        this.id = id;
        this.name = name;
        this.gender = gender;
    }
    // nếu không khai báo thì mặc định: public
    showInfo() {
        return `Id: ${this.id}, Họ và tên: ${this.name}, Giới tính: ${this.gender ? 'Nam' : "Nữ"}`;
    }
    getID() {
        return this.id;
    }
    setID(id) {
        if (id > 0)
            this.id = id;
    }
}
const person1 = new Person(1, 'chinhpd5', true);
// person1.name = 'new chinhpd5' // lỗi vì name: read-only
console.log(person1.name);
console.log(person1.showInfo());
// console.log(person1.id); // lỗi do id: private
// console.log(person1.gender); // lỗi do gender: protected
// tính đóng gói
person1.setID(2);
console.log(person1.getID());
// tính kế thừa
class Student extends Person {
    major;
    GPA;
    constructor(id, name, gender, major, GPA) {
        super(id, name, gender);
        this.major = major;
        this.GPA = GPA;
    }
}
const student1 = new Student(2, "chinhpd6", false, 'Công nghệ thông tin', 8.5);
console.log(student1.name);
console.log(student1.showInfo());
