import './App.css'
import ProductItem from './components/ProductItem'



function App() {

  return (
    <>
      <ProductItem 
        name='Tai Nghe Không Dây TWS 5.3' 
        description='Kết Nối Bluetooth Chống Thấm Nước Có Micro Âm Thanh Nổi Tiện Dụng'
        image='https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lpsw5nzzch8580.webp'
        price={100000}
        sale={true}
        />

      <ProductItem 
        name='Chuột game có dây Logitech G102 ' 
        description='Tùy chỉnh RGB, 6 nút lập trình, nhẹ'
        image='https://down-vn.img.susercontent.com/file/ec99d6bd4d34025b8613c81fa815c573.webp'
        price={150000}
        sale={false}
      />
    </>
  )
}

export default App
