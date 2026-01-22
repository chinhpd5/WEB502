# React Router

`React Router` là thư viện dùng để xây dựng điều hướng (`navigation`) trong ứng dụng `React` theo kiểu `Single Page Application` `(SPA)`.

Trong `SPA`, trang web không tải lại toàn bộ trang khi chuyển trang, mà chỉ thay đổi `component` tương ứng ⇒ giúp ứng dụng mượt và nhanh hơn.

---
## 1. React Router là gì?
`React Router` là thư viện hỗ trợ điều hướng trong `React` giúp:
- Chuyển trang không reload `(SPA)`.
- Tạo nhiều trang như `/home`, `/about`, `/product/1`.
- Quản lý đường dẫn động `(dynamic routing)`.
- Tạo `router` lồng nhau `(nested routers)`.
- Điều hướng bằng `code` `(programmatic navigation)`.

Thư viện chính dùng cho web:
```bash
npm install react-router-dom
```

---
## 2. Các khái niệm quan trọng trong React Router
### 2.1 BrowserRouter
Là "khung" bao toàn bộ ứng dụng.
Cho phép dùng tất cả tính năng `routing`.
Ví dụ:
```jsx
// main.jsx
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
  );
}
```

### 2.2 Routes và Route
- `Routes`: Nhóm các `Route`.
- `Route`: Định nghĩa đường dẫn và `component` sẽ `render`.

```jsx
// App.jsx
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```

### 2.3 Link – Điều hướng bằng click
- Giúp thay thế thẻ `<a>` nhưng không `reload` trang.
```jsx
<Link to="/about">Giới thiệu</Link>
```

### 2.4 Navigate – Điều hướng bằng code
- Dùng để chuyển trang mà không cần `<Link>`.
```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/login');
```

### 2.5 useParams – Lấy tham số từ URL
- Ví dụ `URL`:
```bash
/product/10
```

- `Route`:
```jsx
<Route path="/product/:id" element={<ProductDetail />} />
```

- Trong `component`:
```jsx
// ProductDetail.jsx
import { useParams } from 'react-router-dom';

const { id } = useParams();
```

### 2.6 useSearchParams – Lấy query string
- Ví dụ `URL`:
```bash
/products?searchString=abc&category=xyz
```

- `Route`:
```jsx
<Route path="/product" element={<Product />} />
```

- Trong `component`:
```jsx
// Product.jsx
const [searchParams] = useSearchParams();
const searchString = searchParams.get("searchString");
```

### 2.7 Outlet – Route lồng nhau
Cho phép `render router` con bên trong.

---
## 3. Nested Routing (Route lồng nhau)
- Ví dụ cấu trúc trang `/` có các trang con:
```jsx
// App.jsx
<Route path="/" element={<ClientLayout />}>
  <Route path="" element={<Home />} />
  <Route path="product" element={<Product />} />
  <Route path="product/:id" element={<ProductDetail />} />
  <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact />} />
  <Route path="acount" element={<Account />} />
</Route>
```

- Trong `ClientLayout.jsx`:
```jsx
// ClientLayout.jsx
import { Outlet } from 'react-router-dom';

function ClientLayout() {
  return (
    <div>
      {/* menu */}
      <nav>
        <Link to="/">Trang chủ</Link>
        <Link to="/product">Sản phẩm</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Liên hệ</Link>
        <Link to="/account">Tài khoản</Link>
      </nav>

      <Outlet /> {/* Nơi nhúng các route con */}
    </div>
  );
}
```
---
## 4. Route Không Tìm Thấy (404 Page)
```jsx
<Route path="*" element={<NotFound />} />
```

## 5. Điều hướng tự động với Navigate
Ví dụ: nếu chưa đăng nhập → chuyển sang `/login`:
```jsx
<Route
  path="/admin"
  element={!isLoggedIn ? <Navigate to="/login" /> : <AdminPage />}
/>
```

## 6. Protected Route (Bảo vệ route)
```jsx
function PrivateRoute({ children }) {
  return isLogin ? children : <Navigate to="/login" />;
}
```

- Sử dụng:
```jsx
<Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
```
