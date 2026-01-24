import axios from 'axios';
import React, { useEffect, useState } from 'react'
import type { IProduct } from '../interfaces/Product';
import type { ICart } from '../interfaces/ICart';

function Product() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products`)
        console.log(data);
        if (data)
          setProducts(data)

      } catch (error) {
        console.log(error);
      }
    }

    getAllProducts();
  }, [])

  const handleAddCart = (product: IProduct) => {
    const data = localStorage.getItem('carts'); // JSON
    let carts: ICart[] = []
    if(data){
      carts = JSON.parse(data); // Chuyển JSON -> Object
    }
    
    const findProduct: ICart|undefined = carts.find(item => item.id == product.id);

    if(findProduct){
      // nếu đã tồn tại sản phẩm -> count += 1
      findProduct.count += 1;
    }else{
      //nếu không tồn tại -> add {product và thêm count: 1}
      carts.push({
        ...product,
        count: 1
      })
    }

    localStorage.setItem('carts', JSON.stringify(carts)) // Object -> JSON
    alert("Thêm sản phẩm vào giỏ hàng thành công")
  }

  return (
    <div>
      <h1 className='text-4xl text-center my-10'>Danh sách sản phẩm</h1>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products && products.map((item: IProduct) => {
          return (
            <div key={item.id} className='flex justify-center'>
              <div  className='border border-[#333] rounded p-2 w-60'>
                <img src={item.image} alt="ảnh lỗi" className='min-h-50' />

                <h1 className='text-center text-2xl'>{item.name}</h1>
                <div className='flex justify-center gap-2 text-lg'>
                  <p>{item.price} vnđ</p>
                  <p>-</p>
                  <p className='text-red-500 line-through'>500.000 vnđ</p>
                </div>

                <div className='flex justify-center gap-2'>
                  <button className='bg-blue-500 px-4 py-2 rounded-lg text-white font-bold hover:bg-blue-700 cursor-pointer'>Mua ngay</button>
                  <button onClick={()=>{
                    handleAddCart(item)
                  }} className='px-4 py-2 font-bold border-2 rounded-lg border-green-500 text-green-500 hover:bg-green-500 hover:text-white cursor-pointer'>Add cart</button>
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