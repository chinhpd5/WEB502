import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import ClientLayout from "./layouts/ClientLayout"
import AdminLayout from "./layouts/AdminLayout"
import ProductDetail from "./pages/ProductDetail"

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<ClientLayout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="product/:id" element={<ProductDetail/>}/>
          <Route path="about" element={<h1>Trang About</h1>}/>
          <Route path="contact" element={<h1>Trang Liên hệ</h1>}/>
          <Route path="news" element={<h1>Trang tin tức</h1>}/>
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          {/* Route của quản trị viên */}
        </Route>

        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </>
  )
}

export default App
