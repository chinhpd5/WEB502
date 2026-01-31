import React from 'react'
import { useForm } from 'react-hook-form'
import type { RegisterInput } from '../interfaces/IUser'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm<RegisterInput>();
  const nav = useNavigate();

  const onSubmit = async (value: RegisterInput) => {
    try {
      value.rePassword = undefined;
      const res = await axios.post(`http://localhost:3000/register`,value)
      console.log(res);
      if(res.status == 201){
        toast.success("Đăng ký thành công");
        nav('/login')
      }
      
    } catch (error: any) {
      // console.log(error);
      toast.error("Lỗi đăng ký " + error.response.data)
    }
    
  }

  return (
    <div className='flex justify-center pt-6'>
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Đăng ký tài khoản
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Họ và tên
            </label>
            <input {...register("name", {
              required: "Không để trống tên người dùng"
            })} type="text" placeholder="Nhập họ và tên" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.name && (<span className='text-red-500'>{errors.name.message}</span>)}
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input {...register("email",{
              required: "Không để trống email",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Sai định dạng email"
              }
            })} type="text" placeholder="example@gmail.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.email && (<span className='text-red-500'>{errors.email.message}</span>)}
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input {...register("password",{
              required: "Không để trống mật khẩu",
              minLength: {
                value: 6,
                message: "Cần tối thiểu 6 ký tự"
              }
            })} type="password" placeholder="••••••••" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.password && (<span className='text-red-500'>{errors.password.message}</span>)}
          </div>
          {/* Re-Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nhập lại mật khẩu
            </label>
            <input {...register("rePassword",{
              required: "Không để trống nhập lại mật khẩu",
              validate: (value) => {
                return value == watch("password") ? true : "Mật khẩu chưa khớp"
              }
            })} type="password" placeholder="••••••••" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.rePassword && (<span className='text-red-500'>{errors.rePassword.message}</span>)}
          </div>
          {/* Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Đăng ký
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Đã có tài khoản?
          <a href="#" className="text-blue-600 hover:underline">Đăng nhập</a>
        </p>
      </div>
    </div>

  )
}

export default Register