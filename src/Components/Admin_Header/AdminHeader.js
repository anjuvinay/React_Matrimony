import React from 'react';
import './AdminHeader.css';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

function AdminHeader() {
    const navigate=useNavigate()

    const token = localStorage.getItem('token');
    let token1 =  null;

    if (token) {
      token1 = jwt_decode(token); 
  
  const isTokenExpired = token1.exp && token1.exp * 1000 < Date.now();

  if (isTokenExpired) {   
    localStorage.removeItem('token');
    token1 = null; 
  }
}

const handleLogout = async () => {
    try {
      localStorage.removeItem('token');
      navigate('/login')
      
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
         <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Admin_Matrimony</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">

 

    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
  
     </ul> 
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle mr-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   
     <span>{token ? `${token1.Name}` : "Account"}</span>
    
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

  {token1 ? (
   <>
     <a class="dropdown-item" href="/myProfile">My Profile</a>
     <a class="dropdown-item"  onClick={handleLogout}>Logout</a>
     </>
    ) : (
   
    <a class="dropdown-item" href="/adminLogin">Login</a>
  
    )}
   
  </div>
</div>   
  </div>
</nav>
   </header> 
    </div>
  )
}

export default AdminHeader
