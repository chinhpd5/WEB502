import axios from 'axios';
import React, { useEffect, useState } from 'react'
import type { IProduct } from '../interfaces/Product';

function UseEffect() {
  const [text, setText] = useState<string>('');
  const [products, setProducts] = useState<IProduct[]>([])

  // Không có deps: callback gọi lại mỗi khi component re-render
  useEffect(()=>{
    console.log('re-render');
    document.title = text;
  })

  // deps []: callback chỉ gọi 1 lần duy nhất mỗi khi component render
  useEffect(()=>{
    const getAllProducts = async () => {
      try {
        const {data} = await axios.get(`http://localhost:3000/products`)
        console.log(data);
        if(data)
          setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllProducts();
  },[])

  return (
    <div>
      <input type="text" className='border' onChange={(e)=>{
        setText(e.target.value)
      }} value={text}/>

      <hr />
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products && products.map((item:IProduct,index:number)=>{
          return (<li key={item.id}>
            {index+1}. {item.name} | {item.price} | {item.category}
          </li>)
        })}
      </ul>
    </div>
  )
}

export default UseEffect