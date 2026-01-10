# Class trong typescript

Mục tiêu bài học:
- Tìm hiểu class trong typescript
- Hướng đối tượng(OOP) trong typescript

## 1. Class là gì?
`Class` là khuôn mẫu dùng để:
- Tạo ra các đối tượng (object)
- Gom thuộc tính (property) và phương thức (method) liên quan với nhau
> `TypeScript` kế thừa class từ `ES6` và bổ sung kiểm soát kiểu dữ liệu.

```ts
class Student {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  introduce(): string {
    return `Tôi tên là ${this.name}, ${this.age} tuổi`
  }
}

const s1 = new Student("An", 20)
console.log(s1.introduce())
```

## 2. Thuộc tính (Properties)
Thuộc tính là biến nằm trong `class`, mô tả đặc điểm của `object`.
`TypeScript` yêu cầu:
- Phải khai báo kiểu
- Phải được khởi tạo (constructor hoặc giá trị mặc định)

```ts
class Product {
  id: number
  name: string
  price: number = 0
}
```

## 3. Constructor
`constructor` là hàm khởi tạo:
- Tự động chạy khi tạo object
- Dùng để gán giá trị ban đầu

```ts
class Product {
  id: number
  name: string
  price: number = 0

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price
  }
}
```

## 4. Phương thức (Methods)
Phương thức là hàm trong class:
- Có kiểu dữ liệu trả về
- Có thể truy cập thuộc tính bằng `this`

```ts
class Product {
  id: number
  name: string
  price: number = 0

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price
  }

  show(): string {
    return `Sản phẩm ${this.name}, Giá bán: ${this.price}`
  }
}
```

## 5. Access Modifiers (Phạm vi truy cập)
TypeScript hỗ trợ 3 mức truy cập:
| Modifier  | Truy cập          |
| --------- | ----------------- |
| public    | Mọi nơi           |
| private   | Chỉ trong class   |
| protected | Class & class con |

```ts
class Person {
  public name: string
  private age: number
  protected id: number

  constructor(name: string, age: number, id: number) {
    this.name = name
    this.age = age
    this.id = id
  }
}
```

## 6. Readonly
- Chỉ được gán giá trị 1 lần
- Thường dùng cho `id`

```ts
class Student {
  readonly id: number

  constructor(id: number) {
    this.id = id
  }
}
```

## Các tính chất trong OOP (typescript)

### 1. Tính đóng gói
- Che giấu dữ liệu bên trong `object`
- Chỉ cho phép truy cập thông qua `method` : `getter` / `setter`
> Giúp bảo vệ dữ liệu, tránh sửa sai trực tiếp.


```ts
class Account {
  private balance: number = 0

  setBalance(amount: number): void {
    if (amount > 0) {
      this.balance += amount
    }
  }

  getBalance(): number {
    return this.balance
  }
} 

```

### 2. Inheritance (Kế thừa)
- Class con sử dụng lại thuộc tính & phương thức của class cha
- Giảm trùng lặp code
```ts
class Person {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

class Student extends Person {
  score: number

  constructor(name: string, score: number) {
    super(name)
    this.score = score
  }
}
```

### 3. Abstraction (Trừu tượng)
- Ẩn chi tiết triển khai
- Chỉ quan tâm cái gì làm, không quan tâm làm thế nào

```ts
abstract class Shape {
  abstract area(): number
}

class Circle extends Shape {
  constructor(private r: number) {
    super()
  }

  area(): number {
    return Math.PI * this.r * this.r
  }
}
```

### 4. Polymorphism (Đa hình)
- Cùng một method
- Hành vi khác nhau tùy object

```ts
class Animal {
  speak(): void {
    console.log("Animal sound")
  }
}

class Dog extends Animal {
  speak(): void {
    console.log("Gâu gâu")
  }
}

class Cat extends Animal {
  speak(): void {
    console.log("Meo meo")
  }
}
```

## Bài tập
1. Câu 1: Tạo class `Product` gồm các thuộc tính:
- id: number
- name: string
- price: number
- inStock: boolean

Yêu cầu:
- Viết `constructor` để khởi tạo các thuộc tính.

2. Câu 2: Trong class `Product`, viết phương thức:
- `getInfo(): string`

Yêu cầu:
- Trả về chuỗi thông tin sản phẩm:
```
ID: 1 - Tên: Laptop - Giá: 15000000 - Còn hàng: Có
```
> (Nếu inStock == false hiển thị "Không")

3. Câu 3: Trong class `Product`, viết phương thức:
- `updatePrice(newPrice: number): void`
Yêu cầu:
- Cập nhật lại giá sản phẩm.
- Không cho phép giá ≤ 0.

4. Câu 4: Trong class Product, viết phương thức:
- `toggleStock(): void`
Yêu cầu:
- Đổi trạng thái `inStock` từ `true → false` hoặc ngược lại.

5. Câu 5: Trong class `Product`, viết phương thức:
`isExpensive(threshold: number): boolean`
Yêu cầu:
- Trả về `true` nếu `price ≥ threshold`, ngược lại `false`.

6. Câu 6: Tạo mảng sản phẩm:
- `const products: Product[]`
Yêu cầu:
- Tạo ít nhất 3 đối tượng Product.
Gọi các phương thức:
- Lặp mảng `products` và sử dụng `getInfo()`
- Sử dụng `updatePrice()` để cập nhật giá cho sản phẩm đầu tiên trong `products`
- Sử dụng `toggleStock()` để đổi trạng thái sản phẩm thứ 2
- Sử dụng vòng lặp để kiểm tra các sản phẩm có `isExpensive(1000000)`



