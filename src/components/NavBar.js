import React, { useState } from 'react';
import '../App.css';
import { isMobile } from 'react-device-detect';


const NavBar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navbarStyles = {
        top: 'env(safe-area-inset-top)', // Adjusts the top position for devices with rounded screens
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false); // Close the menu when a menu item is clicked
    };

    return (
        <nav style={navbarStyles} class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <button class="btn btn-link text-decoration-none" type="button" style={{ fontSize: fontSize(), color: 'white', fontWeight: 'Bold' }} onClick={() => document.documentElement.scrollIntoView({ behavior: "smooth", block: "start" })}>Tristan Kerec</button>
                <button class={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen} aria-label="Toggle navigation" onClick={handleMenuToggle}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`navbar-collapse collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul class='navbar-nav d-flex ms-auto'>
                        <li class="nav-item">
                            <button class="btn btn-link text-decoration-none" style={{ fontSize: fontSize(), color: 'white', fontWeight: '600' }} onClick={() => { props.aboutRef.current.scrollIntoView({ behavior: 'smooth' }); handleMenuItemClick(); }}>About</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-link text-decoration-none" style={{ fontSize: fontSize(), color: 'white', fontWeight: '600' }} onClick={() => { props.portfolioRef.current.scrollIntoView({ behavior: 'smooth' }); handleMenuItemClick(); }}>Portfolio</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-link text-decoration-none" style={{ fontSize: fontSize(), color: 'white', fontWeight: '600' }} onClick={() => { props.contactRef.current.scrollIntoView({ behavior: 'smooth' }); handleMenuItemClick(); }}>Contact</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

function fontSize() {
    if (isMobile) {
        return 14;
    } else {
        return 20;
    }
}
