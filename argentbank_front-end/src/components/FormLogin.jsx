import React from 'react';
import { NavLink } from 'react-router-dom';

const FormLogin = () => {
    return (
        <main className='main bg-dark'>
            <section className='sign-in-content'>
                <i className='fa fa-user-circle sign-in-icon'></i>
                <h1>Sign In</h1>
                <form>
                    <div className='input-wrapper'>
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className='input-wrapper'>
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className='input-remember'>
                        <input type="checkbox" id="remember-me"/>
                        <label for="rembember-me">Remember me</label>
                    </div>
                        {/* Placeholder due to static site */}
                    <NavLink to="/user" className='sign-in-button'>Sign In</NavLink> 
                        {/* should be the button below  */}
                </form>
                </section>
            
        </main>
    );
};

export default FormLogin;