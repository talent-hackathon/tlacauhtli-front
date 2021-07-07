import React from 'react';
import '../assets/styles/navBar.css';
import {
    Link
  } from "react-router-dom";

const Navigation = () => {
    return (
        <header id="header">
            <nav className='nav'>
                <Link to='/' className="logo">Bio</Link>
        
                {/* <div className="hamburguer">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div> */}
        
                <ul className="nav-links">
                    <li><Link to='/' className="nav-border" >Home</Link></li>
                    <li><Link to='/miel' className="nav-border">Miel</Link></li>
                    <li><Link className="nav-border" >Cafe</Link></li>      
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;