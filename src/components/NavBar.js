import React, { useState } from 'react';
import '../App.css';
import { isMobile } from 'react-device-detect';


const NavBar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false); // Close the menu when a menu item is clicked
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:'#212529'}}>
            <div className="container-fluid">
                <button className="btn btn-link text-decoration-none" type="button" style={{ fontSize: fontSize(), color: 'white', fontWeight: 'Bold' }} onClick={() => document.documentElement.scrollIntoView({ behavior: "smooth", block: "start" })}>Tristan Kerec</button>
                <button className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen} aria-label="Toggle navigation" onClick={handleMenuToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`navbar-collapse collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className='navbar-nav d-flex ms-auto'>
                        <li className="nav-item">
                            <button className="btn btn-link text-decoration-none" style={{ fontSize: fontSize(), color: 'white', fontWeight: '600' }} onClick={() => { props.aboutRef.current.scrollIntoView({ behavior: 'smooth' }); handleMenuItemClick(); }}>About</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-link text-decoration-none" style={{ fontSize: fontSize(), color: 'white', fontWeight: '600' }} onClick={() => { props.portfolioRef.current.scrollIntoView({ behavior: 'smooth' }); handleMenuItemClick(); }}>Portfolio</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-link text-decoration-none" style={{ fontSize: fontSize(), color: 'white', fontWeight: '600' }} onClick={() => { props.contactRef.current.scrollIntoView({ behavior: 'smooth' }); handleMenuItemClick(); }}>Contact</button>
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
