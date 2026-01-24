import axios from 'axios';
import React, { useEffect, useState } from 'react'
import type { IProduct } from '../interfaces/Product';
import type { ICart } from '../interfaces/Cart';

function Product() {

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(()=>{
    const getAllProduct = async () => {
      try {
        const {data} = await axios.get(`http://localhost:3000/products`);
        console.log(data);
        if(data)
          setProducts(data)
        
      } catch (error) {
        console.log(error);
      }
    }

    getAllProduct();
  },[])

  const handleAddCart = (product: IProduct)=> {
    // 
    const data = localStorage.getItem('carts') // lấy ra thông tin giỏ hàng trong localStorage
    let carts: ICart[] = []
    if(data){
      carts = JSON.parse(data)
    }

    const findProduct = carts.find((item: ICart)=> item.id == product.id)

    if(findProduct){
      findProduct.count+=1
    }else{
      carts.push({
        ...product,
        count: 1
      })
    }

    localStorage.setItem('carts', JSON.stringify(carts))
  }

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>

       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        
        {products && products.map((item: IProduct, index: number)=>{
          return (
            <div key={item.id} className='flex justify-center mb-5'>
              <div  className='border border-[#333] rounded p-2 w-70'>
                <img src={item.image} alt="ảnh lỗi" className='min-h-55'/>
                <h1 className='text-2xl text-center'>{item.name}</h1>
                <div className='flex justify-center gap-3'>
                  <p>{item.price} vnđ</p>
                  <p>-</p>
                  <p className='line-through'>250.000 vnđ</p>
                </div>
                <div className='flex justify-center gap-4'>
                  <button className='bg-blue-500 rounded-lg text-white px-4 py-2 hover:bg-blue-700 cursor-pointer'>Mua ngay</button>
                  <button onClick={()=>{handleAddCart(item)}} className='bg-green-500 rounded-lg text-white px-4 py-2 hover:bg-green-700 cursor-pointer'>Add Cart</button>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Product