import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/HomePage/Home';
import Completed from './components/Completed/Completed';
import Deleted from './components/Deleted/Deleted';

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home/></>
    },
    {
      path: '/Tasks',
      element: <><Navbar/><Home/></>
    },
    {
      path: '/Completed',
      element: <><Navbar/><Completed/></>
    },
    {
      path: '/Deleted',
      element: <><Navbar/><Deleted/></>
    }
  ])

  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
