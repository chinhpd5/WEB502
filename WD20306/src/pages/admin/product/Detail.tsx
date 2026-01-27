import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { IProduct } from '../../../interfaces/Product';

function Detail() {

  const {id} = useParams();
  const [product, setProduct] = useState<IProduct>()

  // console.log(id);

  useEffect(()=>{
    const getProductById = async () => {
      try {
        if(!id)
          return;
        
        const {data} = await axios.get(`http://localhost:3000/products/${id}`);
        // console.log(data);
        if(data)
          setProduct(data)
        
      } catch (error) {
        console.log(error);
      }
    }

    getProductById();
  },[id])
  
  if(!product)
    return (<h1 className="text-2xl font-semibold">Không tìm thấy sản phẩm</h1>)

  return (
    <>
      <div>
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Chi tiết sản phẩm</h1>
          <Link to="/admin/product" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            ← Quay lại
          </Link>
        </div>
        {/* Content */}
        {product && (<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left content */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Thông tin sản phẩm</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Tên sản phẩm</p>
                <p className="font-medium">{product.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Danh mục</p>
                <p className="font-medium">{product.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Giá</p>
                <p className="font-medium text-red-500">{product.price}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Số lượng</p>
                <p className="font-medium">{product.quantity}</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-1">Mô tả</p>
              <p className="text-gray-700 leading-relaxed">
               {product.description}
              </p>
            </div>
          </div>
          {/* Right sidebar */}
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            {/* Image */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Hình ảnh</p>
              <img src={product.image} alt="product" className="rounded-lg border" />
            </div>
            {/* Actions */}
            <div className="flex gap-2">
              <Link to={'/admin/product/edit/'} className="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Chỉnh sửa
              </Link>
              <button className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Xóa
              </button>
            </div>
          </div>
        </div>)}
      </div>

    </>
  )
}

export default Detail