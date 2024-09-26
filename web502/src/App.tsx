import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'


function App() {

  

  const routers = createBrowserRouter([
    {
      path:"/",
      element: <HomePage/>
    },
    {
      path: "/product",
      element: <ProductPage/>
    },
    {
      path:"/news",
      element: <h1>Tin tức</h1>
    },
    {
      path:"/contact",
      element: <h1>Liên hệ</h1>
    }
  ])

  
  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
