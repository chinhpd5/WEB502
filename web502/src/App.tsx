import { useEffect, useState } from 'react'
import './App.css'
import Product from './interface/product'

/**
 * Tạo function component ListProduct 
 * Nhận props: listProduct
 * Hiển thị thông tin của từng sản phẩm
 * 
 */


function App() {
  const [data,setData] = 
    useState
      <{id:number, body:string,title:string, userId:number}[]>
    ([])

    /**
     * useEffect(()=>{}): gọi lại mỗi khi component render
     * useEffect(()=>{},[]): gọi duy nhất lần đầu tiên
     */

  useEffect(()=>{
    //call api
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response)=>{
        // console.log(response);
        return response.json()
      })
      .then((dataRes)=>{
        // console.log(dataRes);
        setData(dataRes)
      })
  },[])
  
  //useState
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
      {/* ví dụ 3:  */}
      <ul>
        {data?.map((item,index)=>{
          return(
            <li key={item.id}>{item.title}</li>
          )
        })}
      </ul>

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
