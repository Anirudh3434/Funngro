import { useState } from 'react'
import { useNavigate , Outlet } from 'react-router-dom'
import Promotion from './Component/Promotion'
import NavBar from './Component/NavBar'
import Footer from './Component/Footer'
import './App.css'
import Teen from './Teen'
import Login from './Login'

function App() {

   const [login , setLogin] = useState(false)



  return (
    <>
        <Promotion/>
        <NavBar method={setLogin}/>
   <Outlet/>
   <Footer/>

  {
    login? (<>
    <Login/>
    </>):(<></>)
  }
    
    </>
  )
}

export default App
