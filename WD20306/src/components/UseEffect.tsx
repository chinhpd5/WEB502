import axios from 'axios';
import React, { useEffect, useState } from 'react'
import type { IProduct } from '../interfaces/Product';

function UseEffect() {
  const [text, setText] = useState<string>('');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct|undefined>();
  const [id, setId] = useState<string|undefined>()

  // Không có deps: callback gọi lại mỗi khi component re-render
  useEffect(() => {
    // console.log('re-render');
    document.title = text;
  })

  // deps []: callback chỉ gọi 1 lần duy nhất mỗi khi component render
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products`)
        // console.log(data);
        if (data)
          setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllProducts();
  }, [])

  // deps[id]: callback sẽ được gọi lại mỗi khi id thay đổi
  useEffect(()=>{
    const getProductById = async () => {
      try {
        if(!id)
          return;

        const {data} = await axios.get(`http://localhost:3000/products/${id}`)
        // console.log(data);
        if(data)
          setProduct(data)
      } catch (error) {
        console.log(error);
      }
    }

    getProductById();
  },[id])


  return (
    <div>
      <input type="text" className='border' onChange={(e) => {
        setText(e.target.value)
      }} value={text} />

      <hr />
      <div className='flex'>
        <div className='border-r'>
          <h1>Danh sách sản phẩm</h1>
          <ul>
            {products && products.map((item: IProduct, index: number) => {
              return (<li key={item.id} onClick={()=>{
                setId(item.id)
              }}>
                {index + 1}. {item.name} | {item.price} | {item.category}
              </li>)
            })}
          </ul>
        </div>

        <div>
          <h1>Chi tiết sản phẩm</h1>
          {product && (
           <div>
              <h2>Tên sản phẩm: {product.name}</h2>
              <h3>Giá bán: {product.price}</h3>
              <h3>Số lượng: {product.quantity}</h3>
              <img className='h-10' src={product.image} alt={product.name} />
              <p>{product.description}</p>
           </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UseEffect