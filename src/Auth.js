import './styles.css';
import './Main.js';
import { Link, useLocation } from 'react-router-dom';
import b from './assets/Sample/adrien-bruneau-8cpR_Yf0rQs-unsplash.jpg';
import c from './assets/STAMP-LOGO.webp';
import Header from './Header';
import React from 'react';

// Auth mode 타입 정의
const AUTH_MODES = {
    LOGIN: 'login',
    SIGNUP: 'signup',
    FORGOT_PASSWORD: 'forgot-password',
    RESET_PASSWORD: 'reset-password'
};

// 경로에서 mode 결정하는 함수
function getAuthMode(pathname) {
    if (pathname === '/signup') return AUTH_MODES.SIGNUP;
    if (pathname === '/forgot-password' || pathname === '/forgot') return AUTH_MODES.FORGOT_PASSWORD;
    if (pathname === '/reset-password' || pathname === '/reset') return AUTH_MODES.RESET_PASSWORD;
    return AUTH_MODES.LOGIN; // 기본값
}

// 각 mode별 CSS 클래스 매핑
function getModeClasses(mode) {
    const baseClass = mode === AUTH_MODES.SIGNUP ? 'signup' : 
                     mode === AUTH_MODES.FORGOT_PASSWORD ? 'forgot-password' :
                     mode === AUTH_MODES.RESET_PASSWORD ? 'reset-password' : 'login';
    return {
        container: `${baseClass}-container`,
        background: `${baseClass}-background`,
        overlay: `${baseClass}-overlay`,
        widget: `${baseClass}-widget`,
        logo: `${baseClass}-logo`,
        form: `${baseClass}-form`,
        inputGroup: `${baseClass}-input-group`,
        input: `${baseClass}-input`
    };
}

export default function Auth() {
    const location = useLocation();
    const mode = getAuthMode(location.pathname);
    const classes = getModeClasses(mode);

    // Login Form 렌더링
    const renderLoginForm = () => (
        <>
            <div className={`auth-form ${classes.form}`}>
                <div className={`auth-input-group ${classes.inputGroup}`}>
                    <input 
                        type="text" 
                        className={`auth-input ${classes.input}`}
                        placeholder="Username or email"
                    />
                </div>
                <div className={`auth-input-group ${classes.inputGroup}`}>
                    <input 
                        type="password" 
                        className={`auth-input ${classes.input}`}
                        placeholder="Password"
                    />
                </div>
                <Link to="/forgot-password" className="auth-link login-forgot-link">Forgot Password?</Link>
                <button className="auth-button-primary login-button">Login</button>
                <hr className="auth-divider login-divider"/>
                <Link to="/signup">
                    <button className="auth-button-secondary sign-in-button">Join us</button>
                </Link>
            </div>
        </>
    );

    // Signup Form 렌더링
    const renderSignupForm = () => (
        <>
            <h1 className="signup-title">Create an Account</h1>
            
            <div className="signup-login-link">
                <span className="signup-have-account">Already have an account?</span>
                <Link to="/login" className="auth-link signup-login-text">Log in</Link>
            </div>
            
            <div className={`auth-form ${classes.form}`}>
                <div className={`auth-input-group ${classes.inputGroup}`}>
                    <input 
                        type="text" 
                        className={`auth-input ${classes.input}`}
                        placeholder="Full Name"
                    />
                </div>
                <div className={`auth-input-group ${classes.inputGroup}`}>
                    <input 
                        type="text" 
                        className={`auth-input ${classes.input}`}
                        placeholder="Username"
                    />
                </div>
                <div className={`auth-input-group ${classes.inputGroup}`}>
                    <input 
                        type="email" 
                        className={`auth-input ${classes.input}`}
                        placeholder="Email"
                    />
                </div>
                <div className={`auth-input-group ${classes.inputGroup}`}>
                    <input 
                        type="password" 
                        className={`auth-input ${classes.input}`}
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
        </>
    );

    // Forgot Password Form 렌더링
    const renderForgotPasswordForm = () => (
        <>
            <h1 className="forgot-password-title">Forgot Password?</h1>
            <p className="forgot-password-description">
                Enter your email address and we'll send you a link to reset your password.
            </p>
            
            <div className={`auth-form ${classes.form}`}>
                <div className={`auth-input-group ${classes.inputGroup}`}>
                    <input 
                        type="email" 
                        className={`auth-input ${classes.input}`}
                        placeholder="Email"
                    />
                </div>
                <button className="auth-button-primary forgot-password-button">Send Reset Link</button>
            </div>
            
            <div className="forgot-password-login-link">
                <Link to="/login" className="auth-link">Back to Login</Link>
            </div>
        </>
    );

    // Reset Password Form 렌더링
    const renderResetPasswordForm = () => (
        <>
            <h1 className="reset-password-title">Reset Password</h1>
            <p className="reset-password-description">
                Enter your new password below.
            </p>
            
            <div className={`auth-form ${classes.form}`}>
                <div className={`auth-input-group ${classes.inputGroup}`}>
                    <input 
                        type="password" 
                        className={`auth-input ${classes.input}`}
                        placeholder="New Password"
                    />
                </div>
                <div className={`auth-input-group ${classes.inputGroup}`}>
                    <input 
                        type="password" 
                        className={`auth-input ${classes.input}`}
                        placeholder="Confirm New Password"
                    />
                </div>
                <button className="auth-button-primary reset-password-button">Reset Password</button>
            </div>
            
            <div className="reset-password-login-link">
                <Link to="/login" className="auth-link">Back to Login</Link>
            </div>
        </>
    );

    // Mode에 따라 적절한 Form 렌더링
    const renderForm = () => {
        switch (mode) {
            case AUTH_MODES.SIGNUP:
                return renderSignupForm();
            case AUTH_MODES.FORGOT_PASSWORD:
                return renderForgotPasswordForm();
            case AUTH_MODES.RESET_PASSWORD:
                return renderResetPasswordForm();
            default:
                return renderLoginForm();
        }
    };

    return (
        <div>
            <Header/>
            
            <div className={`auth-container ${classes.container}`}>
                <div className={`auth-background ${classes.background}`}>
                    <img src={b} alt={`${mode} theme image`}/>
                    <div className={`auth-overlay ${classes.overlay}`}></div>
                </div>
                
                <div className={`auth-widget ${classes.widget}`}>
                    <img src={c} className={`auth-logo ${classes.logo}`} alt="STAMP-LOGO"/>
                    {renderForm()}
                </div>
            </div>          
        </div>
    );
}

