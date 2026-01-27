import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { IProduct } from '../../../interfaces/Product';
import axios from 'axios';

function Detail() {

  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>()

  useEffect(() => {
    const getProductById = async () => {
      try {
        if (!id)
          return;

        const { data } = await axios.get(`http://localhost:3000/products/${id}`)
        // console.log(data);
        if (data)
          setProduct(data)


      } catch (error) {
        console.log(error);
      }
    }

    getProductById();
  }, [id])

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <ol className="flex items-center space-x-2">
          <li>Dashboard</li>
          <li>/</li>
          <li>Sản phẩm</li>
          <li>/</li>
          <li className="text-gray-700 font-medium">Chi tiết</li>
        </ol>
      </nav>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Chi tiết sản phẩm
        </h1>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Chỉnh sửa
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Xóa
          </button>
        </div>
      </div>
      {/* Content */}
      {product && (
        <div className="">
          {/* Thông tin chính */}
          <div className=" bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Thông tin sản phẩm
            </h2>
            <div className="">
              <div>
                <p className="text-sm text-gray-500">Tên sản phẩm</p>
                <p className="font-medium text-gray-800">{product.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Danh mục</p>
                <p className="font-medium text-gray-800">{product.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Giá</p>
                <p className="font-medium text-gray-800">{product.price}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Hình ảnh</p>
                <p className="font-medium text-gray-800">
                  <img src={product.image} alt="" className='h-50'/>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Số lượng</p>
                <p className="font-medium text-gray-800">{product.quantity}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Ngày tạo</p>
                <p className="font-medium text-gray-800">20/01/2026</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-1">Mô tả</p>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>


  )
}

export default Detail