import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Promotion from './Component/Promotion'
import NavBar from './Component/NavBar'
import Intro from './Component/Intro'
import Benfits from './Component/Benfits'
import Project from './Component/Project'
import TrustedPartner from './Component/TrustedPartner'
import Dock from './Component/Dock'
import Youtube from './Component/Youtube'
import Footer from './Component/Footer'

function Teen() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Intro/>
    <Dock/>
    <Benfits/>
    <Project/>
    <TrustedPartner/>
    <Youtube/>
    
    
    </>
  )
}

export default Teen
