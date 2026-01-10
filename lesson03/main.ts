class Person{
  private id: number // private: chỉ có thể truy xuất bên trong class
  public readonly name: string // public: có thể truy xuất bên trong và ngoài class
  protected gender: boolean // protected: chỉ có thể truy xuất bên trong call hoặc class con kế thừa

  constructor(id: number, name: string, gender: boolean){
    this.id = id;
    this.name = name;
    this.gender = gender;
  }

  // nếu không khai báo thì mặc định: public
  showInfo():string {
    return `Id: ${this.id}, Họ và tên: ${this.name}, Giới tính: ${this.gender? 'Nam':"Nữ"}`
  }

  getID(): number{
    return this.id;
  }

  setID(id: number): void {
    if(id > 0)
      this.id = id
  }
}

const person1: Person = new Person(1, 'chinhpd5',true);

// person1.name = 'new chinhpd5' // lỗi vì name: read-only
console.log(person1.name);
console.log(person1.showInfo());

// console.log(person1.id); // lỗi do id: private

// console.log(person1.gender); // lỗi do gender: protected

// tính đóng gói
person1.setID(2)
console.log(person1.getID());

// tính kế thừa
class Student extends Person{
  major: string
  GPA: number

  constructor(id: number, name: string, gender: boolean,major: string, GPA: number){
    super(id,name,gender);
    this.major = major;
    this.GPA = GPA;
  }

  // tính đa hình
  showInfo(): string {
    return `
      Họ và tên: ${this.name},
      Khoa: ${this.major},
      Điểm: ${this.GPA}
    `
  }
}


const student1: Student = new Student(2,"chinhpd6", false,'Công nghệ thông tin', 8.5);
console.log(student1.name);
console.log(student1.showInfo());

// Tính trừu tượng
abstract class Shape {
  abstract area(): number
}


class Circle extends Shape {
  r: number

  constructor(r: number){
    super();
    this.r = r;
  }

  area(): number {
    return Math.PI * this.r * this.r
  }
}

const circle1: Circle = new Circle(10);
console.log(circle1.area());

class Square extends Shape{
  d: number

  constructor(d: number){
    super();
    this.d = d;
  }

  area(): number {
    return this.d * this.d
  }
}

const square1: Square = new Square(10);
console.log(square1.area());

