# Hooks trong React, 1 số hooks cơ bản: UseState, useEffect

Mục tiêu bài học:
- Hiểu `Hook` là gì và lý do chúng ra đời trong `React`
- Sử dụng được `useState` để quản lý trạng thái trong `component`
- Sử dụng được `useEffect` để xử lý `side effect` (tác động phụ)
- Biết cách áp dụng các tình huống phổ biến như gọi `API`, đếm số lần nhấn, cập nhật `DOM`...
- Áp dụng `Hook` trong dự án `React` với `TypeScript`

## 1. Hooks là gì?
`Hooks` là các hàm đặc biệt của `React` cho phép bạn:
- Dùng `state` và vòng đời `component` trong `function component`
- Thay thế cho `class component` (truyền thống)
> `Hooks` chỉ được gọi ở cấp độ `component`, không gọi trong vòng lặp, điều kiện, hoặc hàm lồng nhau.

## 2. useState – Quản lý trạng thái
Mục đích:
- Dùng để lưu trạng thái nội bộ trong `component`.
- Khi `state` thay đổi → `component` `render` lại.
Cú pháp:
```ts
const [state, setState] = useState<type>(init);
```
Ví dụ:
```ts
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Bấm tôi</button>
    </div>
  );
}
```

## 3. useEffect – Xử lý tác động phụ (side effects)
Dùng cho các tác vụ không liên quan đến `render` trực tiếp, như:
- Gọi `API`
- Cập nhật tiêu đề trang
- Đăng ký `event`, `setInterval`...
Cú pháp:
```ts
useEffect(() => {
  // Code chạy sau render
  return () => {
    // Cleanup nếu cần
  };
}, [dependencies]);
```

### 3.1 Các trường hợp phổ biến
| Trường hợp                             | Diễn giải (callback sẽ chạy)               |
| -------------------------------------- | ------------------------------------------ |
| `useEffect(() => {})`                  | Chạy mỗi lần khi render                    |
| `useEffect(() => {}, [])`              | Chạy 1 lần duy nhất sau render lần đầu     |
| `useEffect(() => {}, [count])`         | Chạy lại khi `count` thay đổi              |
| Trường hợp đặc biệt                    | Diễn giải (callback sẽ chạy)               |
| -------------------------------------- | ------------------------------------------ |
| `useEffect(() => { return () => {} })` | Có dọn dẹp tài nguyên (timer, listener...) |

### 3.2 Ví dụ 1: Đổi tiêu đề trang theo count
```tsx
useEffect(() => {
  document.title = `Bấm ${count} lần`;
}, [count]);
```

### 3.3 Ví dụ 2: Gọi API khi component mount
```tsx
useEffect(() => {
  fetch('https://api.example.com/data')
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []); // [] nghĩa là chỉ chạy 1 lần sau render đầu tiên
```

### 3.4 Ví dụ 3: Gọi API khi có deps thay đổi
```tsx
import { useEffect, useState } from 'react';

const UserProfile = ({ userId }: { userId: number }) => {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]); // 👈 gọi lại API mỗi khi userId thay đổi

};
```

### 3.5 Ví dụ 4: Cleanup setInterval
```tsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Đang chạy mỗi giây...');
  }, 1000);

  return () => {
    clearInterval(interval); // cleanup
  };
}, []);
``` 

