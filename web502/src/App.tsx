import { useEffect, useState } from 'react'
import './App.css'
import IProduct from './interface/Product'
import { instance } from './config/configAxios'
import ListProduct from './components/ListProduct'


function App() {

  const [products,setProducts] = useState<IProduct[]>([])
  useEffect(()=>{
    // fetch(`http://localhost:3000/products`)
    //   .then(res => res.json())
    //   .then(data=> setProducts(data))

    //IIEF
    (async ()=>{
      try{
        const res = await instance.get('/products');
        // console.log(res);
        setProducts(res.data)
      }catch(err){
        alert(err)
      }
    })();
  },[])

  console.log(products);
  
  
  return (
    <>
      <h1 className='text-danger'>Xin chào</h1>
      {/* <ListProduct/> */}
      {/* 
        npm i bootstrap
        thêm 
        `
          import 'bootstrap/dist/css/bootstrap.min.css'
          import 'bootstrap/dist/js/bootstrap.bundle.min.js'
        ` vào file main.tsx
        Hiển danh sách sản phẩm (products) bằng bootstrap
      */}
    </>
  )
}

export default App
