import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import ClientLayout from "./layouts/ClientLayout"
import AdminLayout from "./layouts/AdminLayout"
import ProductDetailClient from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import ProductList from "./pages/admin/product/List"
import ProductDetail from "./pages/admin/product/Detail"
import ProductAdd from "./pages/admin/product/Add"
import ProductEdit from "./pages/admin/product/Edit"
import { Toaster } from "react-hot-toast"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<ClientLayout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="product/:id" element={<ProductDetailClient/>}/>
          <Route path="about" element={<h1>Trang About</h1>}/>
          <Route path="contact" element={<h1>Trang Liên hệ</h1>}/>
          <Route path="news" element={<h1>Trang tin tức</h1>}/>
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          {/* Route của quản trị viên */}
          <Route path="product" element={<ProductList/>} />
          <Route path="product/add" element={<ProductAdd/>} />
          <Route path="product/edit/:id" element={<ProductEdit/>} />
          <Route path="product/detail/:id" element={<ProductDetail/>} />
        </Route>

        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
