# Kiểu dữ liệu Nâng cao trong TypeScript

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

## 1. Tuple
Tuple là kiểu dữ liệu mảng nhưng:
- Cố định số lượng phần tử
- Cố định kiểu theo vị trí
> Dùng khi dữ liệu có thứ tự và ý nghĩa rõ ràng
```ts
let student: [number, string, boolean]

student = [1, "An", true]
student = ["An", 1, true] // sai
```

## 2. Enum
Enum dùng để:
- Định nghĩa tập giá trị cố định
- Tránh dùng "magic string"

```ts
enum Role {
  Admin,
  User,
  Guest
}
let userRole: Role = Role.Admin

enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE"
}
```

## 3. Any
- Bỏ qua kiểm tra kiểu
- Giống JavaScript thuần
> Hạn chế dùng

```ts
let data: any

data = 10
data = "Hello"
data = true
```

## 4. Unknown
- An toàn hơn `any`
- Bắt buộc kiểm tra kiểu trước khi sử dụng
```ts
let value: unknown
value = "Hello"

if (typeof value === "string") {
  console.log(value.toUpperCase())
}
```

## 5. Union Type (|)
- `Union` cho phép biến nhận nhiều kiểu khác nhau
```ts
let id: number | string

id = 1
id = "A01"
```

## 6. Literal Type
`Literal type` giới hạn giá trị cụ thể

```ts
let status: "success" | "error"

status = "success"
```

## 7. Type Alias (type)
`type` dùng để:
- Đặt tên cho kiểu dữ liệu
- Dễ tái sử dụng

```ts
type Student = {
  id: number
  name: string
  score: number
}
```

## 8. Intersection Type (&)
`Intersection` kết hợp nhiều kiểu thành một kiểu mới
```ts
type Person = {
  name: string
}

type Employee = {
  salary: number
}

type Staff = Person & Employee

let staff: Staff = {
  name: "An",
  salary: 1000
}
```

## 9. Interface
- Mô tả cấu trúc object
- Có thể mở rộng (extend)
```ts
interface Student {
  id: number
  name: string
}

interface CollegeStudent extends Student {
  major: string
}
```

## 10. Generic
- Viết code linh hoạt
- Vẫn giữ kiểm soát kiểu

```ts
function identity<T>(value: T): T {
  return value
}

identity<number>(10)
identity<string>("Hello")
```

## 11. SO SÁNH type vs interface TRONG TYPESCRIPT

### 11.1. Giống nhau
Cả `type` và `interface` đều dùng để:
- Mô tả cấu trúc dữ liệu
- Áp dụng type checking cho `object`, `function`, `class`
- Giúp code dễ đọc – dễ bảo trì

```ts
// type
type StudentType = {
  id: number
  name: string
}

// interface
interface StudentInterface {
  id: number
  name: string
}
```

### 11.2. Khác nhau
| Tiêu chí            | type           | interface      |   |
| ------------------- | -------------- | -------------- | - |
| Mô tả object        | ✅             | ✅            |   |
| Intersection (`&`)  | ✅             | ⚠️ (gián tiếp)|   |
| Tuple               | ✅             | ❌            |   |
| Literal type        | ✅             | ❌            |   |
| Extend / kế thừa    | `&`            | `extends`      |   |
