import React from 'react';
import logo from '../img/argentBankLogo.png';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='main-nav'>
            <NavLink to="/" className='main-nav-logo'>
                <img src={logo} alt="Argent Bank Logo" className='main-nav-logo-image'></img>
            </NavLink>
            <h1 className='sr-only'>Argent Bank</h1>
            <div>
            <NavLink to="/sign-in" className='main-nav-item'>
                <i className='fa fa-user-circle'>
                </i>Sign In
            </NavLink>
            </div>
            
        </nav>
    );
};

export default Navigation;