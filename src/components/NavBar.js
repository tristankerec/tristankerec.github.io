import React, { useState } from 'react';
import '../App.css';
import { isMobile } from 'react-device-detect';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false); // Close the menu when a menu item is clicked
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:'#212529', paddingTop:isMobile ?'80px':'', marginTop:isMobile ?'-80px':''}}>
            <div className="container-fluid">
                <Link smooth to="/#"><button className="btn btn-link text-decoration-none" type="button" style={{ fontSize: fontSize(), color: 'white', fontWeight: 'Bold' }}>Tristan Kerec</button></Link>
                <button className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen} aria-label="Toggle navigation" onClick={handleMenuToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`navbar-collapse collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className='navbar-nav d-flex ms-auto' style={{flexDirection:isMobile ? 'column':'', alignItems:isMobile ? 'center':''}}>
                        <li className="nav-item">
                            <Link smooth to="/#about"><button className="btn btn-link text-decoration-none" style={{ fontSize: fontSize(), color: 'white', fontWeight: '600' }} onClick={()=>handleMenuItemClick()}>About</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth to="/#portfolio"><button className="btn btn-link text-decoration-none" style={{ fontSize: fontSize(), color: 'white', fontWeight: '600' }} onClick={()=>handleMenuItemClick()}>Portfolio</button></Link>
                        </li>
                        <li className="nav-item">
                        <Link smooth to="/#contact"><button className="btn btn-link text-decoration-none" style={{ fontSize: fontSize(), color: 'white', fontWeight: '600' }} onClick={()=>handleMenuItemClick()}>Contact</button></Link>
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
