import './styles.css';
import './Main.js';
import a from './assets/STAMP-LOGO.webp';
import b from './assets/Sample/adrien-bruneau-8cpR_Yf0rQs-unsplash.jpg';
import c from './assets/STAMP-LOGO.webp';
import Header from './Header';
import React, { useEffect } from 'react';
import { useRef } from 'react';

export default function Signup() {

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
        <div className="auth-container signup-container">
            <div className="auth-background signup-background">
                <img src={b} alt="Signup theme image"/>
                <div className="auth-overlay signup-overlay"></div>
            </div>
            
            <div className="auth-widget signup-widget">
                <img src={c} className="auth-logo signup-logo" alt="STAMP-LOGO"/>
                <h1 className="signup-title">Create an Account</h1>
                
                <div className="signup-login-link">
                    <span className="signup-have-account">Already have an account?</span>
                    <a href="#" className="auth-link signup-login-text">Log in</a>
                </div>
                
                <div className="auth-form signup-form">
                    <div className="auth-input-group signup-input-group">
                        <input 
                            type="text" 
                            className="auth-input signup-input"
                            placeholder="Full Name"
                        />
                    </div>
                    
                    <div className="auth-input-group signup-input-group">
                        <input 
                            type="text" 
                            className="auth-input signup-input"
                            placeholder="Username"
                        />
                    </div>
                    
                    <div className="auth-input-group signup-input-group">
                        <input 
                            type="email" 
                            className="auth-input signup-input"
                            placeholder="Email"
                        />
                    </div>
                    
                    <div className="auth-input-group signup-input-group">
                        <input 
                            type="password" 
                            className="auth-input signup-input"
                            placeholder="Password"
                        />
                    </div>
                    
                    <button className="auth-button-primary signup-create-button">Create</button>
                </div>
                
                <div className="auth-divider-with-text signup-divider">
                    <div className="auth-divider-line signup-divider-line"></div>
                    <span className="auth-divider-text signup-divider-text">Or with</span>
                    <div className="auth-divider-line signup-divider-line"></div>
                </div>
                
                <div className="signup-oauth-buttons">
                    <button className="signup-oauth-button">Google</button>
                    <button className="signup-oauth-button">Apple</button>
                </div>
            </div>
        </div>          
    </div>
);
}
