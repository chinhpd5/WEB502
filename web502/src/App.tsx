import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ClientLayout from './pages/ClientLayout'
import ProductDetailPage from './pages/ProductDetailPage'
import AdminLayout from './pages/AdminLayout'
import ListProduct from './pages/admin/product/ListProduct'
import AddProduct from './pages/admin/product/AddProduct'
import EditProduct from './pages/admin/product/EditProduct'


function App() {

  

  const routers = createBrowserRouter([
    { // client
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
    },
    { // quản trị viên
      path: "/admin",
      element:<AdminLayout/>,//Outlet
      children: [
        {
          path:"",// admin
          element: <h1>Dashboard</h1>
        },
        {
          path: "product", // admin/product
          children: [
            {
              path:"",// admin/product
              element: <ListProduct/>
            },
            {
              path:"add",// admin/product/add
              element: <AddProduct/>
            },
            {
              path: "edit/:id",//admin/product/edit
              element: <EditProduct/>
            }
          ]
        }
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
