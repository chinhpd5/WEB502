import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ClientLayout() {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold text-blue-600">
              WD20309
            </div>
            {/* Menu */}
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li>
                <Link to="/" className="hover:text-blue-600 transition">Trang chủ</Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-blue-600 transition">Sản phẩm</Link>
              </li>
               <li>
                <Link to="/cart" className="hover:text-blue-600 transition">Cart</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-blue-600 transition">Tin tức</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition">Liên hệ</Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-blue-600 transition">Tài khoản</Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-blue-600 transition">Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className='container mx-auto'>
        <Outlet />
      </div>


      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Nội dung footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cột 1: Giới thiệu */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">WD20309</h3>
              <p className="text-sm leading-relaxed">
                MyShop là nền tảng cung cấp sản phẩm chất lượng,
                mang đến trải nghiệm mua sắm tiện lợi và an toàn cho khách hàng.
              </p>
            </div>
            {/* Cột 2: Menu */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Liên kết</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Trang chủ</a></li>
                <li><a href="#" className="hover:text-white transition">Sản phẩm</a></li>
                <li><a href="#" className="hover:text-white transition">Cart</a></li>
                <li><a href="#" className="hover:text-white transition">Tin tức</a></li>
                <li><a href="#" className="hover:text-white transition">Liên hệ</a></li>
                <li><a href="#" className="hover:text-white transition">Tài khoản</a></li>
              </ul>
            </div>
            {/* Cột 3: Thông tin liên hệ */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Liên hệ</h3>
              <ul className="space-y-2 text-sm">
                <li>📍13, Trịnh Văn Bô, Hà Nội, Việt Nam</li>
                <li>📞 0123 456 789</li>
                <li>✉️ support@myshop.vn</li>
              </ul>
            </div>
          </div>
          {/* Bản quyền */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            © 2026 WD20309. All rights reserved.
          </div>
        </div>
      </footer>


    </div>
  )
}

export default ClientLayout