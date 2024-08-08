import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import { GrAndroid } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import { FaLongArrowAltRight, FaBars, FaTimes } from "react-icons/fa";

function NavBar({method}) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleLogin =()=>{
  
        method(true)
    }

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className='Nav-Container'>
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>

            <button className='nav-toggle' onClick={toggleNav}>
                {isNavOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`links ${isNavOpen ? 'active' : ''}`}>
                <a href='/'>Teen</a>
                <a href='/company'>Company</a>
                <a href='#'>Parent</a>
                <a href="#" className='app'><GrAndroid /></a>
                <a href="#" className='app1'><FaApple /></a>
                <button onClick={handleLogin}>Company Login <FaLongArrowAltRight/></button>
            </div>
        </nav>
    );
}

export default NavBar;
