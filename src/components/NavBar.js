import React from 'react';
import '../App.css';

const NavBar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <button class="btn btn-link text-decoration-none" type="button" style={{color:'white',fontWeight:'Bold'}} onClick={() => document.documentElement.scrollIntoView({behavior: "smooth", block: "start"})}>Tristan Kerec</button>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="navbarSupportedContent">
                <ul class='navbar-nav d-flex ms-auto'>
                    <li class="nav-item">
                        <button class="btn btn-link text-decoration-none" style={{color:'white',fontWeight:'600'}} onClick={() => props.aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>About</button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-link text-decoration-none" style={{color:'white',fontWeight:'600'}} onClick={() => props.portfolioRef.current.scrollIntoView({ behavior: 'smooth' })}>Portfolio</button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-link text-decoration-none" style={{color:'white',fontWeight:'600'}} onClick={() => props.contactRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;