# Cài đặt Project React với vite
## Cách 1:
- Mở terminal thư mục lưu trữ: `npm create vite@latest`
- Nhập tên project: `Project name`
- Chọn: `React`
- Chọn: `TypeScript`
- `cd {Project name}`
- `npm i` hoặc `npm install`

## Cách 2:
- `npm create vite@latest {project-name} -- --template react-ts`

## Khởi chạy project
- `npm run dev`



# Buổi 2 :
## Cài đặt node và TypeScript
- Link cài đặt: https://nodejs.org/en/download/prebuilt-installer
- Kiểm tra node version: Mở Command Promit (cmd) -> `node -v` hoặc `node --version`
- Cài đặt typescript: Mở Command Promit (cmd) -> `npm i -g typescript` hoặc `npm install -g typescript`

- Kiểm tra typescript version: Mở Command Promit (cmd) -> `tsc -v` hoặc `tsc --version`
- Nếu lỗi: Mở Window PowerShell bằng adminitrator(quyền quản trị viên) ->
```
 Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

## Tạo Project với Typescript
- Tạo file **main.ts**
- Khởi chạy chương trình: Mở Terminal -> `tsc main.ts --watch`
- Tạo file **tsconfig.json** và thêm nội dung:
```
{
    "compilerOptions": {
        "target":"es6"
    }
}
```
- Tạo file **index.html** và link file **main.js**

## Các type trong TS

### Core type
- number
- string
- boolean
- object
- array
- any
- unknow
- union ` type1 | type2 `
- enum
- type
- interface
- Literal type
- null
- undefined  


# Buổi 1:
## variable: var let const

### scope
- Global scope
- Block scope
- Local scope

### hosting

## Toán tử
- Toán tử số học
- Toán tử gán
- Toán tử so sánh
- Toán tử logic

## function
- declaration function
- expression function
- arrow function

## class

## array
- forEach
- find
- every
- some
- map
- filter
- reduce

## 1 số cú pháp es6 (2015)
- Default parameters
- Destructuring
- Rest
- Spread
- Nullish operator (??)
- Optional chaining operator (?.)

## Xử lý bất đồng bộ trong JS
- Callback
- Promise
- Async/Await

## Modules


