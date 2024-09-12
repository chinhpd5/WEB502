# Buổi 2:
## Cài đặt node và TypeScript
- Link cài đặt: https://nodejs.org/en/download/prebuilt-installer
- Kiểm tra node version: Mở Command Promit (cmd) -> `node -v` hoặc `node --version`
- Cài đặt typescript: Mở Command Promit (cmd) -> `npm i -g typescript` hoặc `npm install -g typescript`
- Kiểm tra typescript version: Mở Command Promit (cmd) -> `tsc -v` hoặc `tsc --version`

## Tạo Project với Typescript
- Tạo file **index.ts**
- Khởi chạy chương trình: Mở Terminal -> `tsc index.ts --watch`
- Nếu lỗi: Mở Window PowerShell bằng adminitrator(quyền quản trị viên) ->
  ```
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
  ``
- Tạo file **tsconfig.json** và thêm nội dung:
```
{
    "compilerOptions": {
        "target":"es6"
    }
}
```

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


