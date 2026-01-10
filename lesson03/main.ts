class Person {
  private id: number // private: chỉ có thể truy xuất bên trong class
  public readonly name: string // public: có thể truy xuất bên trong hoặc ngoài class và class con kế thừa
  protected gender: boolean // protected: chỉ có thể truy xuất bên trong class hoặc class con kế thừa

  constructor(id: number, name: string, gender: boolean){
    this.id = id;
    this.name = name;
    this.gender = gender
  }

  showInfo():string { // public
    return `Id: ${this.id},Họ và tên: ${this.name}, Giới tính: ${this.gender ? 'Nam' : 'Nữ'}`
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    if(id > 0){
      this.id = id
    }
  }

}

const person1: Person = new Person(1,'chinhpd5',true);
// person1.name = 'new chinhpd5'; // lỗi vì name: readonly
// console.log(person1.name);
// console.log(person1.id); lỗi vì id: private

// console.log(person1.showInfo());

// tính đóng gói: private, protected
person1.setId(-10)
console.log(person1.getId());


// kế thừa
class Student extends Person {
  major: string
  GPA: number

  constructor(id: number, name: string, gender: boolean, major: string, GPA: number){
    super(id, name, gender);
    this.major = major;
    this.GPA = GPA
  }

  // tính đa hình
  showInfo(): string {
    return `
      Họ và tên: ${this.name}, 
      Giới tính: ${this.gender ? 'Nam' : 'Nữ'}
      Khoa: ${this.major}
      Điểm TB: ${this.GPA}
    `
  }
}

const student1: Student = new Student(2,'chinhpd6', false, 'Công nghệ thông tin', 8.5);

// console.log(student1.GPA);
// console.log(student1.showInfo());


// tính trừu tượng
abstract class Shape {
  abstract area(): number 
}

class Circle extends Shape {
  r: number

  constructor(r: number){
    super();
    this.r = r
  }

  area(): number {
    return Math.PI * this.r * this.r
  }
}

const circle1: Circle = new Circle(10);
console.log(circle1.area());


class Square extends Shape {
  d: number
  constructor (d: number){
    super();
    this.d = d;
  }

  area(): number {
    return this.d*this.d
  }
}

const square1: Square = new Square(10);

console.log(square1.area());

