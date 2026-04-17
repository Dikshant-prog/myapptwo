import React from 'react'
// import { Link } from 'react-router-dom';
import Mydropdown from './Mydropdown';

const Appheader = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white px-3">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold" href="/">
          MyWebsite
        </a>

        {/* Toggle Button (Mobile) */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About {props.xyz}</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/services">Services {props.menu.name}</a>
            </li>

            <Mydropdown login={props.xyz} drop={props.menu} sms={props.myfunc}/>

           

          </ul>

         
          
        </div>

      </div>
    </nav>
  );
}

export default Appheader
