class Person{
  id: number
  name: string
  gender: boolean

  constructor(id: number, name: string, gender: boolean){
    this.id = id;
    this.name = name;
    this.gender = gender;
  }

  showInfo():string {
    return `Id: ${this.id}, Họ và tên: ${this.name}, Giới tính: ${this.gender? 'Nam':"Nữ"}`
  }
}

const person1: Person = new Person(1, 'chinhpd5',true);

console.log(person1.name);
console.log(person1.showInfo());


