import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ClientLayout() {
  return (
    <div>
      <header>
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold text-blue-600">
                WD20306
              </div>
              <ul className="flex space-x-6 text-gray-700 font-medium">
                <li>
                  <Link to="/" className="hover:text-blue-600 transition">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/product" className="hover:text-blue-600 transition">Sản phẩm</Link>
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
              </ul>
            </div>
          </div>
        </nav>

      </header>

      <div className='container mx-auto'>
        <Outlet />
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2026 WD20306. All rights reserved.
      </div>

    </div>
  )
}

export default ClientLayout