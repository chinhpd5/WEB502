import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/news" element={<h1>Trang tin tức</h1>}/>
        <Route path="/contact" element={<h1>Trang liên hệ</h1>}/>
        <Route path="/account" element={<h1>Trang tài khoản</h1>}/>

        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </>
  )
}

export default App
