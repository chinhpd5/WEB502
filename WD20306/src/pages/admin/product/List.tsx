import React, { useEffect, useState } from 'react'
import type { IProduct } from '../../../interfaces/Product'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

function List() {

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(()=>{
    const getAllProduct = async () =>{
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

  const handleDelete = async (id: string) => {
    try {
      if(!id)
        return;

      if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
        await axios.delete(`http://localhost:3000/products/${id}`)

        setProducts((prev)=>{
          return prev.filter((item:IProduct) => item.id != id)
        })

        // alert("Xóa thành công")
        toast.success("Xóa thành công")
      }      
    } catch (error) {
      console.log(error);
      toast.error("Xóa thất bại: " + error)
    }
  }

  return (
    <div className="max-w-10xl mx-auto bg-white rounded-lg shadow">
      <div className="p-4 border-b flex justify-between">
        <h2 className="text-2xl font-semibold">Danh sách sản phẩm</h2>
        <Link to={`/admin/product/add`} className="px-3 py-1 text-xl bg-green-500 text-white rounded hover:bg-green-600">
          Thêm mới
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xl font-medium text-gray-600">#</th>
              <th className="px-4 py-3 text-left text-xl font-medium text-gray-600">Tên sản phẩm</th>
              <th className="px-4 py-3 text-left text-xl font-medium text-gray-600">Hình ảnh</th>
              <th className="px-4 py-3 text-left text-xl font-medium text-gray-600">Giá</th>
              <th className="px-4 py-3 text-left text-xl font-medium text-gray-600">Số lượng</th>
              <th className="px-4 py-3 text-center text-xl font-medium text-gray-600">Danh mục</th>
              <th className="px-4 py-3 text-center text-xl font-medium text-gray-600">Đánh giá</th>
              <th className="px-4 py-3 text-center text-xl font-medium text-gray-600">Mô tả</th>
              <th className="px-4 py-3 text-center text-xl font-medium text-gray-600"></th>
            </tr>
          </thead>
          <tbody className="divide-y text-xl">
            {products && products.map((item:IProduct, index: number)=>{
              return (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{index+1}</td>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">
                    <img src={item.image} alt="ảnh lỗi" className='h-15' />
                  </td>
                  <td className="px-4 py-3 text-center">{item.price}</td>
                  <td className="px-4 py-3 text-center">{item.quantity}</td>
                  <td className="px-4 py-3 text-center">{item.category}</td>
                  <td className="px-4 py-3 text-center">{item.rate}</td>
                  <td className="px-4 py-3 text-center">{item.description}</td>
                  <td className="px-4 py-3 text-center space-x-2 min-w-70">
                    <Link to={`/admin/product/${item.id}`} className="px-3 py-1 text-xl bg-blue-500 text-white rounded hover:bg-blue-600">
                      Chi tiết
                    </Link>
                    <Link to={`/admin/product/edit/${item.id}`} className="px-3 py-1 text-xl bg-yellow-500 text-white rounded hover:bg-yellow-600">
                      Sửa
                    </Link>
                    <button onClick={()=>{handleDelete(item.id)}} className="px-3 py-1 text-xl bg-red-500 text-white rounded hover:bg-red-600">
                      Xóa
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default List