import React from 'react';
import logo from './assets/Logo.png'


const Login = () => {
  return (
    <div className="login-container">
     <div className='glass'> 
     <img src={logo} alt="Company Logo" className="logo" />
      <form className="login-form">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit" className="login-button">Login</button>
      </form>
     </div>
    </div>
  );
};

export default Login;
