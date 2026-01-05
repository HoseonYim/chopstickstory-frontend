import './styles.css';
import './Main.js';
import a from './assets/STAMP-LOGO.webp';
import b from './assets/Sample/adrien-bruneau-8cpR_Yf0rQs-unsplash.jpg';
import c from './assets/STAMP-LOGO.webp';
import Header from './Header'
import React, { useEffect } from 'react';
import { useRef } from 'react';

export default function Login() {

    const chopsticksRef = useRef(null);
    const navRef = useRef(null);
    const overlayRef = useRef(null);


    function toggleMenu() {
        if(chopsticksRef.current) {
            chopsticksRef.current.classList.toggle('active');
        }
        if (navRef.current) {
            navRef.current.classList.toggle('active')
        }
        if (overlayRef.current) {
            overlayRef.current.classList.toggle('active')
        }
    
        document.body.style.overflow = navRef.current.classList.contains('active') ? 'hidden' : '';
    }

    return (
    <div>
        <Header/>
          
        <div className="auth-container login-container">
            <div className="auth-background login-background">
                <img  src={b} alt="Login theme image"/>
                <div className="auth-overlay login-overlay"></div>
            </div>
            
            <div className="auth-widget login-widget">
                <img src={c} className="auth-logo login-logo" alt="STAMP-LOGO"/>
                <div className="auth-form login-form">
                    <div className="auth-input-group login-input-group">
                        <input type="text" className="auth-input login-input" placeholder="Username or email"/>
                    </div>
                    <div className="auth-input-group login-input-group">
                        <input type="password" className="auth-input login-input" placeholder="Password"/>
                    </div>
                    <a href="#" className="auth-link login-forgot-link">Forgot Password?</a>
                    <button className="auth-button-primary login-button">Login</button>
                    <hr className="auth-divider login-divider"/>
                    <button className="auth-button-secondary sign-in-button">Join us</button>
                </div>
            </div>
        </div>          
    </div>
);
}