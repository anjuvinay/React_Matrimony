import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate=useNavigate()
  return (
    <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Matrimony</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="/">Profiles <span class="sr-only">(current)</span></a>
      </li>
      {/* {{#if user}} */}
      <li class="nav-item active">
        <a class="nav-link" href="">Messages</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/interest">Interests
         {/* <span class="badge badge-success" id="interest-count">{{interestCount}}</span> */}
         </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/matches">Matches </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/createProfile">Create Profile</a>
      </li>
      
      {/* {{/if}} */}
    </ul>
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle mr-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {/* {{#if user}}
    {{user.Name}}
    {{else}}
    Account
    {{/if}}  */}
    
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {/* {{#if user}} */}
    
     {/* <a class="dropdown-item" href="/my-profile">My Profile</a>
     <a class="dropdown-item" href="/logout">Logout</a>
    {{else}} */}
     <a class="dropdown-item" href="/login">Login</a>
    {/* {{/if}} */}
   
  </div>
</div>
     
    
  </div>
</nav>
   </header>
  );
}

export default Header;