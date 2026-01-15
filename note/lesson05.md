# React, Cài đặt dự án React với TypeScript, Tailwind, EsLint,...

Mục tiêu bài học:
- Tìm hiểu thư viện React
- Cài đặt, cấu hình dự án React TS bằng Vite
- Tích hợp Tailwind
- Tích hợp EsLint

## 1. React là gì?
`React` là thư viện `JavaScript` mã nguồn mở được phát triển bởi `Facebook`, dùng để xây dựng giao diện người dùng (UI) – đặc biệt là các ứng dụng web đơn trang (SPA).

### Đặc điểm nổi bật:
- `Component-based`: Ứng dụng được chia thành các thành phần nhỏ, dễ tái sử dụng.
- `Virtual DOM`: React sử dụng cây `DOM` ảo để tăng hiệu năng khi cập nhật giao diện.
- `Unidirectional Data Flow`: Dữ liệu chỉ chảy theo một chiều, giúp dễ quản lý trạng thái.
- Hỗ trợ tốt `TypeScript`: Giúp viết code an toàn hơn, dễ bảo trì hơn.

### React dùng để làm gì?

- Giao diện `web động`, tương tác cao (Facebook, Instagram, Zalo Web…)
- Ứng dụng quản lý trạng thái phức tạp
- `Web app` hiện đại, `responsive`

## 2. Cài đặt dự án React sử dụng TypeScript với Vite
`Vite` là công cụ `build` hiện đại, nhẹ, nhanh và rất phù hợp cho dự án `React` + `TypeScript`.
1. Bước 1: Cài đặt `Node.js`
- Truy cập https://nodejs.org
- Tải và cài bản LTS mới nhất
- Kiểm tra:
```bash
node -v
npm -v
```

2. Bước 2: Tạo project `React` + `TypeScript` bằng `Vite`
```bash
npm create vite@latest
```
Và làm theo hướng dẫn
```bash
Project name:
│  Nhập tên dự án (Ví dụ: WD20306)
Package name:
│  Nhấn phím tab
Select a framework:
│  React
Select a variant:
│  TypeScript + SWC
Use rolldown-vite (Experimental)?:
│  No
Install with npm and start now?
│  Nhấn phím space để chọn No
```

3. Bước 3: Cài đặt thư viện
```bash
cd my-app
npm install
```

4. Bước 4: Chạy ứng dụng
```bash
npm run dev
```

## 4. Tailwind CSS là gì?
`Tailwind CSS` là một `framework` CSS tiện ích (utility-first) giúp bạn viết giao diện nhanh mà không cần tạo nhiều file CSS riêng.

Ưu điểm:
- Không cần viết `CSS` thủ công: Dùng `class` như `bg-blue-500`, `text-center`, `p-4` trực tiếp trong `HTML/JSX`.
- Tùy biến cao: Dễ cấu hình `theme`, màu sắc, `responsive`, d`ark mode`...
- Tối ưu hóa tự động: Sử dụng `purge` để loại bỏ class không dùng → `build` nhẹ.

Ví dụ:
```tsx
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Click me
</button>
```

## 4. Cách cài đặt Tailwind vào dự án React + TypeScript dùng Vite
1. Bước 1: Cài đặt các gói cần thiết
```bash
npm install tailwindcss @tailwindcss/vite
```
2. Bước 2: Cấu hình the Vite plugin tại file `vite.config.ts`
```ts
import { defineConfig } from 'vite'
...
// Import thư viện
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    ...
    // Thêm thư viện
    tailwindcss(),
  ],
})
```
3. Import Tailwind CSS vào file `index.css`
```css
@import "tailwindcss";
```

4. Cài đặt extension: `Tailwind CSS IntelliSense`

5. Chạy lại dự án
```bash
npm run dev
```

### 4.1 Các nhóm class cơ bản
### 4.1.1 Spacing – Margin & Padding
Cú pháp chung:
| Loại        | Cú pháp tổng quát  | Ý nghĩa                                          |
| ----------- | ------------------ | ------------------------------------------------ |
| **Padding** | `p-{side}-{value}` | Khoảng cách bên trong (nội dung với viền)        |
| **Margin**  | `m-{side}-{value}` | Khoảng cách bên ngoài (phần tử với phần tử khác) |

Quy ước ký hiệu:
| Viết tắt     | Mô tả         | Áp dụng cho    |
| ------------ | ------------- | -------------- |
| `t`          | top (trên)    | `pt-4`, `mt-2` |
| `r`          | right (phải)  | `pr-4`, `mr-2` |
| `b`          | bottom (dưới) | `pb-4`, `mb-2` |
| `l`          | left (trái)   | `pl-4`, `ml-2` |
| `x`          | trái + phải   | `px-4`, `mx-2` |
| `y`          | trên + dưới   | `py-4`, `my-2` |
| *(không có)* | cả 4 phía     | `p-4`, `m-2`   |

Các giá trị {value} phổ biến (theo rem): 1rem = 16px
| Class | Kích thước | Pixel tương đương |
| ----- | ---------- | ----------------- |
| `0`   | `0rem`     | `0px`             |
| `1`   | `0.25rem`  | `4px`             |
| `2`   | `0.5rem`   | `8px`             |
| `3`   | `0.75rem`  | `12px`            |
| `4`   | `1rem`     | `16px`            |
| `5`   | `1.25rem`  | `20px`            |
| `6`   | `1.5rem`   | `24px`            |
| `8`   | `2rem`     | `32px`            |
| `10`  | `2.5rem`   | `40px`            |
| `12`  | `3rem`     | `48px`            |
| `16`  | `4rem`     | `64px`            |
| `20`  | `5rem`     | `80px`            |


Ví dụ:
| Class     | Tác dụng                          | Ghi chú       |
| --------- | --------------------------------- | ------------- |
| `p-4`     | Padding tất cả 4 phía             | `1rem = 16px` |
| `pt-2`    | Padding top (trên)                |               |
| `pr-6`    | Padding right (phải)              |               |
| `px-4`    | Padding trái + phải               |               |
| `py-2`    | Padding trên + dưới               |               |
| `m-2`     | Margin đều 4 phía (8px)           |               |
| `ml-4`    | Margin left (bên trái)            |               |
| `mt-0`    | Không có margin trên              |               |
| `mx-auto` | Căn giữa phần tử theo chiều ngang |               |

```html
<div class="p-4 bg-gray-100">Nội dung có padding 16px</div>
<div class="mx-auto mt-4 w-1/2 bg-blue-100">Căn giữa ngang</div>
```

### 4.1.2 Typography – Văn bản
1. Kích thước và trọng số chữ

| Class        | Tác dụng        |
| ------------ | --------------- |
| `text-sm`    | Cỡ chữ nhỏ      |
| `text-lg`    | Cỡ chữ lớn hơn  |
| `text-2xl`   | Rất lớn (~24px) |
| `font-bold`  | Chữ đậm         |
| `font-light` | Chữ mảnh        |

2. Màu chữ & căn chỉnh

| Class           | Tác dụng         |
| --------------- | ---------------- |
| `text-gray-700` | Chữ màu xám đậm  |
| `text-red-500`  | Chữ màu đỏ vừa   |
| `text-center`   | Căn giữa văn bản |
| `text-right`    | Căn phải         |
| `text-left`     | Căn trái         |

### 4.1.3 Màu nền & Viền (Background & Border)
1. Nền (`bg-`) và chữ (`text-`)

| Class         | Tác dụng            |
| ------------- | ------------------- |
| `bg-blue-500` | Nền xanh trung bình |
| `bg-red-100`  | Nền đỏ rất nhạt     |
| `text-white`  | Chữ trắng           |

2. Viền (`border-`)

| Class             | Tác dụng                   |
| ----------------- | -------------------------- |
| `border`          | Thêm viền mặc định         |
| `border-2`        | Viền dày hơn               |
| `border-gray-300` | Viền màu xám nhạt          |
| `rounded`         | Bo nhẹ 4 góc               |
| `rounded-full`    | Bo tròn hoàn toàn (avatar) |

### 4.1.4 Flexbox & Layout
| Class             | Tác dụng                         |
| ----------------- | -------------------------------- |
| `flex`            | Kích hoạt chế độ flexbox         |
| `flex-row`        | Các item xếp hàng ngang          |
| `flex-col`        | Các item xếp dọc                 |
| `items-center`    | Căn giữa item theo trục dọc      |
| `justify-between` | Căn 2 item ra 2 đầu              |
| `gap-4`           | Khoảng cách giữa các item (16px) |

### 4.1.5 Chiều rộng & chiều cao (Width & Height)
| Class      | Tác dụng                       |
| ---------- | -------------------------------|
| `w-full`   | Rộng 100%                      |
| `w-1/2`    | Rộng 50%                       |
| `w-64`     | Rộng cố định (16rem = 256px)   |
| `max-w-md` | Giới hạn rộng tối đa           |
| `h-screen` | Cao 100% chiều cao trình duyệt |
| `h-32`     | Cao 8rem (128px)               |



