import React, { useEffect, useMemo, useState } from 'react'
import type { ICart } from '../interfaces/ICart'

function Cart() {

  const [carts, setCarts] = useState<ICart[]>([])

  useEffect(() => {
    const data = localStorage.getItem('carts')
    if (data)
      setCarts(JSON.parse(data))
  }, [])

  const handleDelete = (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa")) {
      setCarts((prev: ICart[]) => {
        const newCarts = prev.filter(item => item.id != id);
        localStorage.setItem('carts', JSON.stringify(newCarts)); // cập vào localStorage
        return newCarts; // cập nhật phía giao diện
      })
    }
  }

  const total = useMemo(()=>{
    let totalPrice = 0;
    carts.forEach((item) =>{
      totalPrice += item.count * item.price
    })

    return totalPrice;

  },[carts])

  const handleDeleteAll = () => {
    if(window.confirm("Bạn có chắc chắn muốn xóa ?")){
      setCarts([])
      localStorage.removeItem('carts')
    }
  }

  return (
    <div>
      <h1 className='text-4xl text-center my-10'>Danh sách sản phẩm trong giỏ hàng</h1>

      <table className="min-w-full text-2xl text-left border">
        <thead className="bg-gray-50 text-gray-600 uppercase text-2xl">
          <tr>
            <th className="px-6 py-3">STT</th>
            <th className="px-6 py-3">Tên sản phẩm</th>
            <th className="px-6 py-3">Hình ảnh</th>
            <th className="px-6 py-3">Số lượng</th>
            <th className="px-6 py-3">Đơn giá</th>
            <th className="px-6 py-3 text-center"></th>
          </tr>
        </thead>
        <tbody className="divide-y">

          {carts && carts.map((item: ICart, index: number) => {
            return (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">
                  <img src={item.image} className='h-15' alt="ảnh lỗi" />
                </td>
                <td className="px-6 py-4">{item.count}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4 text-center space-x-2">
                  <button onClick={() => {
                    handleDelete(item.id)
                  }} className="px-3 py-1 text-2xl text-red-600 hover:underline">
                    Xóa
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot className="divide-y">
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 font-medium" colSpan={3}>Tổng tiền</td>
            <td className="px-6 py-4 text-right" colSpan={2}>{total} vnđ</td>
            <td className="px-6 py-4 text-center space-x-2">
              <button onClick={handleDeleteAll} className="px-3 py-1 text-2xl text-red-600 hover:underline">
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