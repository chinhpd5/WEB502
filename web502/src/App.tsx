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
  //ví dụ 1
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
  const handleReset = ()=>{
    // reset count về 0
    setCount(0)
  }

  //ví dụ 2
  //quản giá trị trong ô input
  const [text,setText] = useState<string>('');
  // quản lý danh sách công việc
  const [list,setList] = useState<string[]>(["Ăn","Ngủ"]);
  const handleAddJob = ()=>{
    // thêm text của ô input vào list
    // setList
    setList((prev)=>{
      //spread
      return [...prev,text] // gán vào list
    })
    //reset nội dung trong ô input
    setText('')

  }
  
  const handleDelete = (indexDelete:number)=>{
    // console.log(indexDelete);
    setList((prev:string[])=>{
      // const newPrev = prev.filter((item,index)=>{
      //   return index  != indexDelete
      // })
      
      // const newPrev = prev.filter((item,index)=> index != indexDelete)
      // console.log(newPrev);

      return prev.filter((item,index)=> index != indexDelete);
    })
  }
  // console.log(text);
  return (
    <>
      {/* ví dụ 2: two way binding */}

      <input 
        type="text"
        value={text}
        onChange={(e)=>{
          // console.log(e.target.value);
          setText(e.target.value)
        }}  
      />
      <button onClick={handleAddJob}>Add</button>
      <ul>
        {
          list?.map((item,index)=>{
            return (
              <li key={index}>
                <span>{item}</span>
                <button onClick={()=>{handleDelete(index)}} style={{marginLeft: '10px'}}>Xóa</button>
              </li>
            )
          })
        }
      </ul>

      {/* ví dụ 1 */}
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>Tăng</button>
      <button onClick={handleRemove}>Giảm</button>
      <button onClick={handleReset}>Reset</button>
      
    </>
  )
}

export default App
