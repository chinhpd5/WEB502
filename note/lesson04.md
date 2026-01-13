# Lab

## Bài 1. Yêu cầu:
1. Tạo một object `person` gồm các thuộc tính:
- `name: string`
- `age: number`
- `isStudent: boolean`

2. Viết hàm `describePerson` nhận một `object` như trên và in ra thông tin theo `format`:
```
Tên: <name>, Tuổi: <age>, Là sinh viên: Có/Không
```

## Bài 2. Yêu cầu:
1. Tạo type tên là `Product` gồm: `id: number`, `name: string`, `price: number`.
2. Tạo một mảng `products: Product[]` gồm ít nhất 3 sản phẩm.
3. Viết hàm `getTotalPrice(products: Product[])` để tính tổng giá.
Gợi ý:
```ts
const products: Product[] = [
  { id: 1, name: "Chuột", price: 200 },
  { id: 2, name: "Bàn phím", price: 500 },
  { id: 3, name: "Màn hình", price: 3000 }
];

function getTotalPrice(products: Product[]): number {
  // Tính tổng giá
}
```

## Bài 3. Yêu cầu:
1. Tạo `interface` `Student` gồm: `id: number`, `name: string`, `score: number`.
2. Tạo mảng `students: Student[]`.
3. Viết các hàm sau:
  - `printStudents(students: Student[])`: In danh sách sinh viên.
  - `getPassedStudents(students: Student[])`: Trả về danh sách sinh viên có điểm ≥ 5.
  - `findTopStudent(students: Student[])`: Trả về sinh viên có điểm cao nhất.
Gợi ý:
```ts
const students: Student[] = [
  { id: 1, name: "An", score: 7.5 },
  { id: 2, name: "Bình", score: 4.5 },
  { id: 3, name: "Chi", score: 8.0 }
];

function printStudents(students: Student[]): void {
  // ...
}

function getPassedStudents(students: Student[]): Student[] {
  // ...
}

function findTopStudent(students: Student[]): Student {
  // ...
}
```

## Bài 4: Yêu cầu:
1. Tạo class `Person` có thuộc tính `name`, `age` và phương thức `introduce()`.
2. Tạo class `Employee` kế thừa `Person`, thêm `employeeId`, `position`.
3. Viết phương thức `introduce()` trong `Employee`.
4. Tạo mảng `employees: Employee[]` và thêm 5 phần tử.
5. Viết hàm `printAllEmployees(employees: Employee[])` để gọi `introduce()` từng người.
