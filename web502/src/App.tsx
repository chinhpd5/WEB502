import './App.css'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ClientLayout from './pages/ClientLayout'
import ProductDetailPage from './pages/ProductDetailPage'
import AdminLayout from './pages/AdminLayout'
import ListProduct from './pages/admin/product/ListProduct'
import AddProduct from './pages/admin/product/AddProduct'
import EditProduct from './pages/admin/product/EditProduct'
import ListUser from './pages/admin/user/ListUser'
import AddUser from './pages/admin/user/AddUser'
import EditUser from './pages/admin/user/EditUser'
import Register from './pages/Register'
import Login from './pages/Login'


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
        // },
        {
          path: 'register',
          element: <Register/>
        },
        {
          path: 'login',
          element: <Login/>
        }
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
        },
        {
          path: 'user',// admin/user
          children:[
            {
              path: '',// admin/user
              element: <ListUser/>
            },
            {
              path: 'add',// admin/user/add
              element: <AddUser/>
            },
            {
              path: 'edit/:id', // admin/user/123
              element: <EditUser/>
            }
          ] 
        }
      ]
    }
  ])

  
  return (
    <>
      {/* <RouterProvider router={routers} /> */}

      <Routes>
          {/* client */}
          <Route path='/' element={<ClientLayout/>} >
            <Route path='' element={<HomePage/>}/>
            <Route path='about' element={ <h1>Trang about</h1> }/>
            <Route path='product' element={<ProductPage/>}/>
            <Route path='product/:id' element={<ProductDetailPage/>}/>
          </Route>


        {/* admin */}
          <Route path='/admin' element={<AdminLayout/>} >
            <Route path='product'>
              <Route path='' element={<ListProduct/>} />
              <Route path='add' element={<AddProduct/>} />
              <Route path='edit/:id' element={<EditProduct/>} />
            </Route>

            <Route path='user'>

            </Route>
          </Route>

      </Routes>

    </>
  )
}

export default App
