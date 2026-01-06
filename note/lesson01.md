# Kiểu dữ liệu cơ bản trong TypeScript

```
TypeScript Types
├── Cơ bản
│   ├── string, number, boolean
│   ├── array, tuple
│   ├── object, enum
│   └── any
└── Nâng cao
    ├── union (|)
    ├── intersection (&)
    ├── type, interface
    ├── literal
    ├── unknown
    ├── void, never
    ├── generic
    └── utility types
```

Mục tiêu bài học:
Hiểu về các kiểu dữ liệu cơ bản trong TypeScript
- String
- Number
- Boolean
- Array
- Object
Hàm

## Cài đặt
- Mở `Command Prompt`, Cài đặt bằng `npm`
```bash
npm install -g typescript
```

- Kiểm tra:
```bash
tsc --version
```

## Cấu hình dự án
1. Mở VSC, Tạo thư mục `lesson01`, mở `terminal` tại `lesson01`
2. Tạo file:
```bash
tsc --init
```
> 1 file `tsconfig.json` sẽ được khởi tạo:
```json
{
  "compilerOptions": {
    "target": "ES6",        // Chuẩn JS đầu ra
    "strict": true,         // Bật kiểm tra type chặt chẽ
    "outDir": "dist"        // Thư mục chứa JS sau khi compile
  }
}
```

3. Chạy biên dịch
```bash
tsc fileName.ts --watch
```
Hoặc
```bash
tsc -w
```

## string: Chuỗi
Dùng để lưu chuỗi ký tự: tên, email, mô tả, văn bản,...
s
```ts
let fullName: string = "Nguyen Van A"
let email: string = "a@gmail.com"
fullName = 123 // Lỗi
```

## number: số
Dùng cho số nguyên và số thực

```ts
let age: number = -20
let price: number = 15000
let score: number = 8.5
age = "20" // lỗi
```

## boolean
Chỉ có 2 giá trị: `true` hoặc `false`

```ts
let isActive: boolean = true
let isLogin: boolean = false
```

## array
Dùng để lưu danh sách(mảng) nhiều giá trị cùng kiểu

```ts
let numbers: number[] = [1, 2, 3]
let names: string[] = ["An", "Binh", "Chi"]
let myArray2: Array<number> = [3,1.5,0,-2,40]

numbers.push("4") // lỗi
```

## object
```ts
let student: {
  id: number
  name: string
  score: number
} = {
  id: 1,
  name: "An",
  score: 8.5
}

```
> Phải đủ thuộc tính
> Đúng kiểu
> Không được thừa thuộc tính

## Hàm trong TypeScript là gì?
Hàm trong TypeScript giống JavaScript, nhưng có thêm kiểu dữ liệu cho:
- Tham số
- Giá trị trả về
> Kiểm soát dữ liệu vào – ra của hàm → giảm lỗi

```ts
function functionName(param: type): returnType {
  // code
}

const functionName = (param: type): returnType => { 
  // code
}
```

Ví dụ:
```ts
function sum (num1: number, num2: number): number {
  return num1 + num2
}
```

## Bài tập
1. Viết hàm `toUpperCaseName`:
- Nhận vào `name`: `string`
- Trả về tên viết hoa

2. Viết hàm `calculateSquare`:
- Nhận vào n: `number`
- Trả về bình phương của n

3. Viết hàm `isEven`:
- Nhận vào n: number
- Trả về `true` nếu là số chẵn, ngược lại `false`

4. Viết hàm `sumArray`:
- Nhận vào numbers: number[]
- Trả về tổng các phần tử

5. Viết hàm `getStudentName`:
- Nhận vào student: {name: string, age: number, gender: boolean}
- Trả về thông tin sinh viên dạng chuỗi