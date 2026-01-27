import React, { useEffect, useState } from 'react'
import type { IProduct } from '../../../interfaces/Product'
import axios from 'axios';

function List() {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(()=>{
    const getAllProduct = async () => {
      try {
        const {data} = await axios.get(`http://localhost:3000/products`)
        // console.log(data);
        if(data)
          setProducts(data)
            
      } catch (error) {
        console.log(error);
      }
    }

    getAllProduct();
  },[])



  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <h1 className='text-xl font-bold my-3'>Danh sách sản phẩm</h1>
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xl font-semibold text-gray-600 border-b">
              #
            </th>
            <th className="px-4 py-3 text-left text-xl font-semibold text-gray-600 border-b">
              Tên sản phẩm
            </th>
            <th className="px-4 py-3 text-left text-xl font-semibold text-gray-600 border-b">
              Hình ảnh
            </th>
            <th className="px-4 py-3 text-left text-xl font-semibold text-gray-600 border-b">
              Giá
            </th>
            <th className="px-4 py-3 text-left text-xl font-semibold text-gray-600 border-b">
              Số lượng
            </th>
            <th className="px-4 py-3 text-left text-xl font-semibold text-gray-600 border-b">
              Danh mục
            </th>
            <th className="px-4 py-3 text-center text-xl font-semibold text-gray-600 border-b">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
         {products && products.map((item: IProduct, index: number)=>{
          return (
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-xl text-gray-700">{index+1}</td>
              <td className="px-4 py-3 text-xl text-gray-700">{item.name}</td>
              <td className="px-4 py-3 text-xl text-gray-700">
                <img src={item.image} className='h-15' alt="Ảnh lỗi" />
              </td>
              <td className="px-4 py-3 text-xl text-gray-700">{item.price}đ</td>
              <td className="px-4 py-3 text-xl text-gray-700">{item.quantity}</td>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3 text-center space-x-2">
                <button className="px-3 py-1 text-xl text-white bg-blue-500 rounded hover:bg-blue-600">
                  Sửa
                </button>
                <button className="px-3 py-1 text-xl text-white bg-red-500 rounded hover:bg-red-600">
                  Xóa
                </button>
              </td>
            </tr>
          )
         })}
        </tbody>
      </table>
    </div>

  )
}

export default List