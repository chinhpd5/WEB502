import React, { useEffect, useMemo, useState } from 'react'
import type { ICart } from '../interfaces/Cart'

function Cart() {
  const [carts, setCarts] = useState<ICart[]>([])

  useEffect(() => {
    const data = localStorage.getItem('carts') // lấy ra thông tin giỏ hàng trong localStorage
    if (data) {
      setCarts(JSON.parse(data))
    }
  }, [])


  const handleDelete = (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
      setCarts((prev) => {
        const newCart =  prev.filter((item) => item.id != id)
        localStorage.setItem("carts", JSON.stringify(newCart))
        return newCart;
      })

    }
  }

  const total = useMemo(()=>{
    let tongTien = 0;

    if(carts){
      carts.forEach((item: ICart)=> {
        tongTien += item.count * item.price
      })
    }

    return tongTien;
  },[carts])

  const handleDeleteAll = () => {
    setCarts([])
    localStorage.removeItem('carts')
  } 

  return (
    <div>
      <h1>Giỏ hàng</h1>

      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">STT</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Hình ảnh</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Tên sản phẩm</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Số lượng</th>
            <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Thành tiền</th>
            <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {carts && carts.map((item: ICart, index: number) => {
            return (
              <tr className="hover:bg-gray-50" key={item.id}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <img src={item.image} alt="ảnh lỗi" className='h-15' />
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.count}</td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-2 text-center space-x-2">
                  <button onClick={() => {
                    handleDelete(item.id)
                  }} className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600">
                    Xóa
                  </button>
                </td>
              </tr>
            )
          })}

        </tbody>
        <tfoot className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50" >
            <td className="px-4 py-2 font-bold text-blue-700" colSpan={3}>Tổng tiền</td>
            
            <td className="px-4 py-2 text-right" colSpan={2}>{Math.round(total)} vnđ</td>
            <td className="px-4 py-2 text-center space-x-2">
              <button onClick={handleDeleteAll} className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600">
                Xóa tất cả
              </button>
            </td>
          </tr>
        </tfoot>
      </table>

    </div>
  )
}

export default Cart