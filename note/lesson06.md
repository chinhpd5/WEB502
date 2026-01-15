# Props trong React

## 1. Props là gì?
`Props` (viết tắt của `properties`) trong `React` là cách để truyền dữ liệu từ component cha sang component con.
- `Props` giống như tham số của hàm.
- `Props` readonly (chỉ đọc): component con không được phép sửa props.
> Nhờ `props`, `React` có thể tái sử dụng component với dữ liệu khác nhau.

## 2. Props trong React thường (JS)
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
Sử dụng:
```jsx
<Welcome name="Alice" />
```

## 3. Props trong React + TypeScript
`TypeScript` yêu cầu bạn khai báo kiểu dữ liệu cho `props` để đảm bảo an toàn và rõ ràng.
```tsx
type WelcomeProps = {
  name: string;
  age?: number; // optional (không bắt buộc)
};

const Welcome = (props: WelcomeProps) => {
  return (
    <div>
      <h1>Xin chào, {props.name}</h1>
      {props.age && <p>Tuổi: {props.age}</p>}
    </div>
  );
};
```
Sử dụng
```tsx
<Welcome name="Nam" age={21} />
```

## 4. Cách khai báo khác: Destructuring Props
```tsx
const Welcome = ({ name, age }: WelcomeProps) => {
  return <h1>Chào {name}, {age} tuổi</h1>;
};
```

## 5. Props có kiểu dữ liệu phức tạp
| Kiểu dữ liệu        | Ví dụ TypeScript                     |
| ------------------- | ------------------------------------ |
| string, number      | `name: string`, `age: number`        |
| boolean             | `isAdmin: boolean`                   |
| array               | `tags: string[]`                     |
| object              | `user: { id: number; name: string }` |
| function (callback) | `onClick: () => void`                |
| children            | `children: React.ReactNode`          |
