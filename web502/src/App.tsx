import { useEffect, useState } from 'react'
import './App.css'
import IProduct from './interface/Product'
import { instance } from './config/configAxios'


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
      
    </>
  )
}

export default App
