import { useForm } from 'react-hook-form'
import type { ProductAdd } from '../../../interfaces/Product'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Add() {

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<ProductAdd>();
  const nav = useNavigate();

  const onSubmit = async (value: ProductAdd) => {
    console.log(value);
    try {
      const res = await axios.post(`http://localhost:3000/products`,value);
      // console.log(res);
      if(res.status == 201){
        // alert("Thêm mới thành công")
        toast.success("Thêm mới thành công")
        nav('/admin/product')
      }

    } catch (error) {
      console.log(error);
      toast.error("Thêm mới thất bại")
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-700">
        Thêm mới sản phẩm
      </h1>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {/* Tên sản phẩm */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Tên sản phẩm
          </label>
          <input {...register("name",{
            required: "Không để trống tên sản phẩm",
            minLength: {
              value: 5,
              message: "Tên sản phẩm cần tối thiểu 5 ký tự"
            }
          })} type="text" placeholder="Nhập tên sản phẩm" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />

          {errors.name && (<span className='text-red-500'>{errors.name.message}</span>)}
        </div>
        {/* Giá bán & Số lượng */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Giá bán
            </label>
            <input {...register("price",{
              required: "Không để trống Giá bán",
              min: {
                value: 0,
                message: "Giá bán cần tối thiểu 0"
              },
              valueAsNumber: true // ép về kiểu số
            })} type="number" placeholder="VD: 150000" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500" />

            {errors.price && (<span className='text-red-500'>{errors.price.message}</span>)}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Số lượng
            </label>
            <input {...register("quantity",{
              required: "Không để trống Giá bán",
              min: {
                value: 0,
                message: "Giá bán cần tối thiểu 0"
              },
              valueAsNumber: true // ép về kiểu số
            })} type="number" placeholder="VD: 10" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500" />
            
            {errors.quantity && (<span className='text-red-500'>{errors.quantity.message}</span>)}
          </div>
        </div>
        {/* Hình ảnh */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Hình ảnh
          </label>
          <input {...register("image",{
            required: "Không để trống hình ảnh"
          })} type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white" />
          
          {errors.image && (<span className='text-red-500'>{errors.image.message}</span>)}
        </div>
        {/* Danh mục */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Danh mục
          </label>
          <select {...register("category",{
            required: "Không để trống danh mục"
          })} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500">
            <option></option>
            <option value={'Computers'}>Computers</option>
            <option value={'Fashion'}>Fashion</option>
            <option value={'Electronics'}>Electronics</option>
            <option value={'Bags'}>Bags</option>
          </select>
        {errors.category && (<span className='text-red-500'>{errors.category.message}</span>)}

        </div>
        {/* Mô tả */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Mô tả
          </label>
          <textarea {...register("description")} rows={4} placeholder="Nhập mô tả sản phẩm..." className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500" defaultValue={""} />
        </div>
        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button type="reset" className="px-5 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
            Hủy
          </button>
          <button type="submit" className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
            Lưu sản phẩm
          </button>
        </div>
      </form>
    </div>

  )
}

export default Add