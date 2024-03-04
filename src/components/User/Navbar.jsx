import React, { useState } from 'react'
import '../../assets/css/navbar.css'
import logo from  '../../assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import BASE_URL from '../../hooks/baseURL'

const Navbar = () => {
  let auth = localStorage.getItem('authToken');
  let navigate = useNavigate();

  const logOut = (e) =>{
    e.preventDefault();
    //fetch api for logout url
    fetch(BASE_URL + '/logout', {
      method: 'POST',
      headers: {
        'Accept' : "application/json",
        'Content-Type': 'application/json',
        'Authorization' : "Bearer " + localStorage.getItem('authToken')
      },
      }).then(response => {
          if (!response.ok) {
            throw new Error('Logout failed');
          }
          return response.json();
      })
      .then(data => {
          localStorage.removeItem('authToken');
          localStorage.removeItem('authUser');
          // console.log('Logout successful:', data);
          // alert("Logged Out Successfully.");
          navigate('/login');
      })
      .catch(error => {
          console.error('Logout error:', error);
      });
  }

  return (
    <>
    {!auth && (
      <div className='navbar d-flex justify-content-between justify-content-lg-center'>
        <img  className='logo ' src={logo} />
        <Link to={'/login'} className="loginBtn text-decoration-none">Login</Link>
      </div>
    )}
    {auth && (
      <div className='navbar d-flex justify-content-between'>
        <img  className='logo' src={logo} />
        <button className="loginBtn" onClick={logOut}>Logout</button>
      </div>
    )}
    </>
  )
}

export default Navbar
