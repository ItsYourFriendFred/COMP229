import React from "react";

function Header()
{
    return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/home">
        <img src="/Assets/images/Logo.png" alt="Personal Logo" width="140" height="52"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <a className="nav-link <%= (page == 'home') ? 'active' : ''; %>" aria-current="page" href="/home"><i className="fa-solid fa-lg fa-house-chimney-user"></i> Home</a>
          </li>

          <li className="nav-item">
              <a className="nav-link <%= (page == 'about') ? 'active' : ''; %>" aria-current="page" href="/about"><i className="fa-solid fa-lg fa-address-card"></i> About</a>
          </li>
          

          <li className="nav-item">
              <a className="nav-link <%= (page == 'projects') ? 'active' : ''; %>" aria-current="page" href="/projects"><i className="fa-solid fa-lg fa-lightbulb"></i> Projects</a>
          </li>

          <li className="nav-item">
            <a className="nav-link <%= (page == 'services') ? 'active' : ''; %>" aria-current="page" href="/services"><i className="fa-solid fa-lg fa-hand-holding-dollar"></i> Services</a>
          </li>

          <li className="nav-item">
              <a className="nav-link <%= (page == 'contact') ? 'active' : ''; %>" aria-current="page" href="/contact"><i className="fa-solid fa-lg fa-square-phone"></i> Contact</a>
          </li>


        </ul>
      </div>
    </div>
  </nav>
    )
}

export default Header;