import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
           <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <h3><Link className="nav-link ms-5 text-white" to="/Home">Computer-Bangladesh</Link></h3>
      <div class="navbar-nav ms-auto mb-2 mb-lg-0">
      
            <Link class="nav-link ms-5 text-white active" aria-current="page" href="#" to="/Home">Home</Link>
            <Link class="nav-link ms-5 text-white active" aria-current="page" href="#" to="/Dashboard">Registration</Link>
            <Link class="nav-link ms-5 text-white active" aria-current="page" href="#" to="/Admin">Admin</Link>
            <Link class="nav-link ms-5 text-white active" aria-current="page" href="#" to="/Contact Us">Contact Us</Link>
            <Link class="nav-link ms-5 text-white active" aria-current="page" href="#" to="/Login">Login</Link>


        
        
       
      </div>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default navbar;