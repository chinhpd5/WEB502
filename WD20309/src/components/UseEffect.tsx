import axios from 'axios';
import React, { useEffect, useState } from 'react'
import type { IProduct } from '../interfaces/Product';

function UseEffect() {
  const [text, setText] = useState<string>('');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [id, setId] = useState<string|undefined>();
  const [product,setProduct] = useState<IProduct>()

  // callback được gọi mỗi khi componet re-render
  useEffect(()=>{
    // console.log('re-render');
    document.title = text;
  })

  // callback chỉ gọi 1 lần duy nhất khi component render
  useEffect(()=>{
    const getAllProducts = async () => {
      try {
        const {data} = await axios.get(`http://localhost:3000/products`)
        // console.log(data);
        if(data){
          setProducts(data)
        }
            
      } catch (error) {
        console.log(error);
      }
    }

    getAllProducts();
  },[])

  // Khi id thay đổi thì callback sẽ được gọi lại
  useEffect(()=>{
    const getProductById = async () => {
      try {
        if(!id)
          return;

        const {data} = await axios.get(`http://localhost:3000/products/${id}`)
        // console.log(data);
        if(data){
          setProduct(data)
        }
        
      } catch (error) {
        
      }
    }
    getProductById()
  },[id])

  return (
    <div>
      <input type="text" className='border' onChange={(e)=>{
        setText(e.target.value)
      }} value={text}/>

      <hr />
      <div className='flex'>

        <div className='border-r'>
          <h1>Danh sách sản phẩm</h1>
          <ul>
            {products && products.map(
              (item:IProduct,index: number)=>{
                return (
                <li key={item.id} onClick={()=>{setId(item.id)}}>
                  {index+1}| {item.name}| {item.category}
                </li>)
              }
            )}
          </ul>
        </div>

        <div>
          <h1>Chi tiết sản phẩm</h1>
          {product && (<div>
            <h1>Tên sản phẩm: {product.name}</h1>
            <h2>Giá bán: {product.price}</h2>
            <h2>Số lượng: {product.quantity}</h2>
            <h2>Đánh giá: {product.rate}</h2>
            <img className='h-20' src={product.image} alt={product.name} />
            <h3>Danh mục: {product.category}</h3>
            <p>{product.description}</p>
          </div>)}
        </div>

      </div>
    </div>
  )
}

export default UseEffect