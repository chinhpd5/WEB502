import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ClientLayout from './pages/ClientLayout'
import ProductDetailPage from './pages/ProductDetailPage'


function App() {

  

  const routers = createBrowserRouter([
    {
      path: "/",
      element:<ClientLayout/>,
      children:[
        {
          path:"",
          element: <HomePage/>
        },
        {
          path: "product",
          // element: <ProductPage/>
          children:[
            {
              path: "",
              element: <ProductPage/>
            },
            {
              path:':id', // product/:id
              element:<ProductDetailPage/>
            }
          ]
        },
        {
          path:"news",
          element: <h1>Tin tức</h1>
        },
        {
          path:"contact",
          element: <h1>Liên hệ</h1>
        },
        // {
        //   path:"product/:id",
        //   element: <ProductDetailPage/>
        // }
      ]
    }

    
    
    
  ])

  
  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
