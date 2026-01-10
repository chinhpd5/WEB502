"use strict";
class Person {
    id;
    name;
    gender;
    constructor(id, name, gender) {
        this.id = id;
        this.name = name;
        this.gender = gender;
    }
    showInfo() {
        return `Id: ${this.id}, Họ và tên: ${this.name}, Giới tính: ${this.gender ? 'Nam' : "Nữ"}`;
    }
}
const person1 = new Person(1, 'chinhpd5', true);
console.log(person1.name);
console.log(person1.showInfo());
