import { useState } from 'react'
import './App.css'
import ListProduct from './components/ListProduct'
import ProductItem from './components/ProductItem'
import Product from './interface/product'

/**
 * Tạo function component ListProduct 
 * Nhận props: listProduct
 * Hiển thị thông tin của từng sản phẩm
 * 
 */


function App() {

  const listProduct: Product[]=[
    {
      name:'Tai Nghe Không Dây TWS 5.3', 
      description:'Kết Nối Bluetooth Chống Thấm Nước Có Micro Âm Thanh Nổi Tiện Dụng',
      image:'https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzzch8580.webp',
      price:100000,
      sale:true

    },
    {
      name:'Chuột game có dây Logitech G102 ', 
      description:'Kết Nối Bluetooth Chống Thấm Nước Có Micro Âm Thanh Nổi Tiện Dụng',
      image:'https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzzch8580.webp',
      price:150000,
      sale:true
    }
  ]

  const [count,setCount] = useState<number>(0);

  const handleAdd = ()=>{
    // tăng count lên 1 đơn vị
    setCount(count + 1)
  }
  const handleRemove = ()=>{
    // giảm count đi 1 đơn vị
    // trong setCount có thể nhận lại 1 callback
    setCount((prev)=>{
      // prev là giá trước đó của count
      // console.log(prev);
      return prev-1;
    })
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>Tăng</button>
      <button onClick={handleRemove}>Giảm</button>
      <button>Reset</button>
      
    </>
  )
}

export default App
