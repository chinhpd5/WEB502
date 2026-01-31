import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import type { LoginInput } from '../interfaces/IUser'
import toast from 'react-hot-toast'
import axios from 'axios'

function Login() {

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginInput>();
  const nav = useNavigate();

  const onSubmit = async (value: LoginInput) => {
    console.log(value);
    try {

      const res = await axios.post(`http://localhost:3000/login`, value);
      // console.log(res);
      if(res.status== 200) {
        toast.success("Đăng nhập thành công");
        localStorage.setItem('token', res.data.accessToken);
        nav("/")
      }

    } catch (error: any) {
      // console.log(error);
      toast.error("Lỗi đăng nhập " + error.response.data)
    }
  }

  return (
     <div className='flex justify-center pt-6'>
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Đăng nhập tài khoản
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          {/* Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Đăng nhập
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          <Link to="/register" className="text-blue-600 hover:underline">Đăng ký</Link>
        </p>
      </div>
    </div>
  )
}

export default Login