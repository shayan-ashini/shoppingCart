
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom'

import AllProduct from './AllProduct';
import Cart from './Cart';
import { CartContext } from './Context'
import React, { useContext } from 'react'





function App() {



  const router = createBrowserRouter(

    createRoutesFromElements(

      <Route path='/' element={<Root />}>
        <Route index element={<AllProduct />} />
        <Route path='/Cart' element={<Cart />} />
      </Route>
    )

  )

  return (



    <div>

      <RouterProvider router={router} />

    </div>











  );
}



const Root = () => {
  const Global = useContext(CartContext)
  const state = Global.state


  return (

    <>
      <nav className='flex justify-around	'>
        <Link className='llink' to='/'>Home</Link>
        <Link className='llink' to='/Cart'><i class="icon bi bi-cart4"></i>
        {
           state.length > 0 && <span>({state.length})</span>
        }

        </Link>

      </nav>

      <Outlet />




    </>
  )
}



export default App;
