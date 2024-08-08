import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import Teen from './Teen.jsx'
import Company from './Company.jsx'

const router = createBrowserRouter(
  createRoutesFromChildren(

    <Route path="/" element={<App />} >
      <Route index element={<Teen/>} />
      <Route path='company' element={<Company/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
