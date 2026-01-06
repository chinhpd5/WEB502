# TypeScrpit

Mục tiêu môn học:
- Cài đặt và biên dịch `typescript`
- Các loại dữ liệu, hàm trong `typescipt`
- Lập trình hướng đối tượng trong `typescript`
- `React` với `TypeScript`

## TypeScript là gì?
`TypeScript` là một ngôn ngữ mở rộng của `JavaScript`, được `Microsoft` phát triển.

> 1. Bạn viết `TypeScript`
> 2. Sau đó `TypeScript` sẽ biên dịch (compile) thành `JavaScript`
> 3. Trình duyệt và `Node.js` chỉ chạy `JavaScript`, không chạy trực tiếp `TypeScript`
> 4. `TypeScript` = `JavaScript` + Kiểu dữ liệu (Type)

## JavaScript có vấn đề gì?
JavaScript là ngôn ngữ:
- Linh hoạt
- Dễ học
- Nhưng không kiểm soát kiểu dữ liệu

```js
function sum(a, b) {
  return a + b
}

sum(5, "10") // "510"
```
> Không báo lỗi
> Chỉ phát hiện khi chạy chương trình
> Dễ gây bug trong dự án lớn

## TypeScript giải quyết vấn đề gì?
TypeScript giúp:
- Phát hiện lỗi ngay khi viết code
- Ép kiểu dữ liệu rõ ràng
- Code dễ đọc, dễ bảo trì
- Dễ làm việc nhóm
```ts
function sum(a: number, b: number): number {
  return a + b
}

sum(5, "10") // Báo lỗi ngay
```

## TypeScript khác JavaScript ở điểm nào?
| JavaScript            | TypeScript        |
| --------------------- | ----------------- |
| Không có kiểu dữ liệu | Có kiểu dữ liệu   |
| Dễ viết sai           | Phát hiện lỗi sớm |
| Phù hợp code nhỏ      | Phù hợp dự án lớn |
| Khó refactor          | Refactor an toàn  |
| Ít gợi ý              | Autocomplete tốt  |

## Tại sao cần học TypeScript?
- Giảm bug trong quá trình phát triển.
> Bắt lỗi trước khi chạy, Không cần test mới phát hiện lỗi cơ bản
- Code dễ đọc, dễ hiểu
- Là tiêu chuẩn trong dự án thực tế
> React, Angular (bắt buộc), NestJS, Next.js
- Hỗ trợ IDE cực tốt
- Dễ mở rộng dự án

## Tổng hợp 
- `TypeScript` là `JavaScript` có thêm kiểu dữ liệu
- File `TypeScript` có đuôi `.ts`
- TypeScript KHÔNG chạy trực tiếp
- Phải biên dịch (compile) sang `JavaScript`
```
TypeScript (.ts) → Compile → JavaScript (.js) → Chạy(Trình duyệt / NodeJS)
```