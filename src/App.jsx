import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import Contact from './pages/Contact'
import About from './pages/About'
import AppLayout from './componets/Layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './componets/Layout/CountryDetails'

const router = createBrowserRouter([
  {
path:"/",
element:<AppLayout/>,
errorElement:<ErrorPage/>,
children:[
    {
    path:"/",
    element:<Home />
  },
    {
    path:"country",
    element:<Country />
  },
    {
    path:"country/:id",
    element:<CountryDetails />
  },
    {
    path:"contact",
    element:<Contact />
  },
    {
    path:"about",
    element:<About />
  }
]
  },
])
function App() {
  return (
<RouterProvider router={router}>
    </RouterProvider>

  )
}

export default App