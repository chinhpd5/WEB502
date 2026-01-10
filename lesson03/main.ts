class Person {
  private id: number
  public readonly name: string
  protected gender: boolean

  constructor(id: number, name: string, gender: boolean){
    this.id = id;
    this.name = name;
    this.gender = gender
  }

  showInfo():string { // public
    return `Id: ${this.id},Họ và tên: ${this.name}, Giới tính: ${this.gender ? 'Nam' : 'Nữ'}`
  }
}

const person1: Person = new Person(1,'chinhpd5',true);
// person1.name = 'new chinhpd5'; // lỗi vì name: readonly
console.log(person1.name);
// console.log(person1.id); lỗi vì id: private

console.log(person1.showInfo());

