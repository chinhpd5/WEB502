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
}
const person1 = new Person(1, 'chinhpd5', true);
// person1.name = 'new chinhpd5' // lỗi vì name: read-only
console.log(person1.name);
console.log(person1.showInfo());
// console.log(person1.id); // lỗi do id: private
// console.log(person1.gender); // lỗi do gender: protected
