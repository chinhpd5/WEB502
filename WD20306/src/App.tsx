import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import ClientLayout from './layouts/ClientLayout'
import AdminLayout from "./layouts/AdminLayout"
import ProductDetailClient from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import ProductList from "./pages/admin/product/List"
import ProductDetail from "./pages/admin/product/Detail"
import ProductAdd from "./pages/admin/product/Add"
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="product/:id" element={<ProductDetailClient/>}/>
          <Route path="news" element={<h1>Trang tin tức</h1>}/>
          <Route path="contact" element={<h1>Trang liên hệ</h1>}/>
          <Route path="account" element={<h1>Trang tài khoản</h1>}/>
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          {/* Route dành quản trị viên */}
          <Route path="product" element={<ProductList/>}/>
          <Route path="product/add" element={<ProductAdd/>}/>
          <Route path="product/:id" element={<ProductDetail/>}/>
        </Route>

        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
