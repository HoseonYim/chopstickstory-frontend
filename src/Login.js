import './styles.css';
import './Main.js';
import a from './assets/STAMP-LOGO.webp';
import b from './assets/Sample/adrien-bruneau-8cpR_Yf0rQs-unsplash.jpg';
import c from './assets/STAMP-LOGO.webp';
import d from './assets/Sample/adam-jang-8pOTAtyd_Mc-unsplash.jpg';
import e from './assets/Sample/adrien-bruneau-8cpR_Yf0rQs-unsplash.jpg';
import f from './assets/Sample/luca-upper-Z-4kOr93RCI-unsplash.jpg';
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
        <header>
            <div className="header-content">
                <div className="logo">
                    <a href="index.html">
                        <img src={a} className="logo-img" />
                        <p>CHOPSTICKSTORY</p>
                    </a>
                </div>
                <div className="header-right">
                    <div className="login">
                        <a href='#'>
                            Login
                        </a>
                        <a href='#'>
                            Sign In
                        </a>
                    </div>
                    <button onClick={toggleMenu} className="chopsticks" ref={chopsticksRef}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
        <nav aria-label="Main navigation" ref={navRef}>
                <div className="menu-links">
                    <a href="index.html" aria-current="page">
                        Home
                    </a>

                    <div className="dropdown">
                        <div className="dropdown-header">
                            <a href="about.html" className="menu-link">
                                About Us
                            </a>
                            <button
                                className="dropdown-trigger"
                                aria-label="Toggle About Us dropdown"
                            >
                                <i
                                    className="fa-solid fa-chevron-down"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                        <div
                            className="dropdown-menu"
                            aria-label="About Us submenu"
                        >
                            <a href="about.html#org-intro">
                                About CHOPSTICKSTORY
                            </a>
                            <a href="about.html#team-section">Our Team</a>
                            <a href="project.html">Our Project</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dropdown-header">
                            <a href="programs.html" className="menu-link">
                                Programs
                            </a>
                            <button className="dropdown-trigger">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                        <div className="dropdown-menu">
                            <a href="programs.html#mundam">
                                MunDam: Infusing Culture
                            </a>
                            <a href="programs.html#yedam">
                                YeDam: Infusing Art
                            </a>
                            <a href="programs.html#deokdam">
                                DeokDam: Infusing Virtue
                            </a>
                            <a href="programs.html#chedam">
                                CheDam: Infusing Experiences
                            </a>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    <a
                        href="https://www.instagram.com/chopstickstory/"
                        title="Instagram"
                        target="_blank"
                    >
                        <i className="fa-brands fa-instagram fa-xl"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/chopstickstory/"
                        title="Linkedin"
                    >
                        <i className="fa-brands fa-linkedin-in fa-xl"></i>
                    </a>
                    <a href="#" title="Youtube">
                        <i className="fa-brands fa-youtube fa-xl"></i>
                    </a>
                </div>
                <div className="external-links">
                    <a href="mailto:info@chopstickstory.org" target="_blank">
                        <i className="fa-regular fa-envelope"></i>
                        Contact
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                    </a>
                    <a
                        href="https://www.paypal.com/donate/?hosted_button_id=WZK3AX6WV9RMC"
                        target="_blank"
                    >
                        <i className="fa-brands fa-paypal"></i>
                        Donation
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                    </a>
                </div>
            </nav>

            
            <div className="login-container">
                <div className="login-background">
                    <img  src={b} alt="Login theme image"/>
                    <div className="login-overlay"></div>
                </div>
                
                <div className="login-widget">
                    <img src={c}/>
                    <input placeholder="Username or email" type="text"/>
                    <input placeholder="Password" type="password"/>
                    <button className="login-button">Login</button>
                    <a href="#">Forgot Password?</a>
                    <hr/>
                    <button className="sign-in-button">Join us</button>
                </div>
            </div>

            {/* <div
                className="slider-wrapper"
                role="region"
                aria-label="Image Slider"
            >
                <div className="slider-container">
                    <div
                        className="slide"
                        id="slide1"
                        role="tabpanel"
                        aria-labelledby="slide1-tab"
                    >
                        <img
                            src={b}
                            alt="People experiencing Korean culture"
                        />

                        <div className="slide-content">
                            <h2>Sharing Stories, Building Bridges</h2>
                            <p>
                                Join us in our journey to connect cultures
                                through meaningful experiences.
                            </p>
                            <a href="about.html" className="slide-btn">
                                About Us{' '}
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="slide" id="slide2">
                        <img src={c} alt="Slide 2" />
                        <div className="slide-content">
                            <h2>Discover Korean Culture</h2>
                            <p>
                                Experience the richness of Korean traditions
                                through our diverse programs.
                            </p>
                            <a href="programs.html" className="slide-btn">
                                Our Programs{' '}
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="slide" id="slide3">
                        <img src={d} alt="YeDam Art Workshop" />
                        <div className="slide-content">
                            <h2>Chopsticks Special Stories</h2>
                            <p>
                                Explore traditional Korean folktales and
                                contemporary narratives that showcase the
                                wisdom and values.
                            </p>
                            <a
                                href="programs.html#mundam"
                                className="slide-btn"
                            >
                                See More{' '}
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="slide" id="slide4">
                        <img src={e} alt="Project Activities" />
                        <div className="slide-content">
                            <h2>Our Project</h2>
                            <p>
                                Follow our journey of sharing Korean culture
                                through various milestones and activities
                                since 2019.
                            </p>
                            <a href="project.html" className="slide-btn">
                                See More{' '}
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="slide" id="slide5">
                        <img src={f} alt="CheDam Activities" />
                        <div className="slide-content">
                            <h2>CheDam: Infusing Experiences</h2>
                            <p>
                                Experience the joy of Korean traditional
                                games with friends and family.
                            </p>
                            <a
                                href="programs.html#chedam"
                                className="slide-btn"
                            >
                                See More{' '}
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="slider-nav">
                    <div className="slider-bar active" data-slide="1"></div>
                    <div className="slider-bar" data-slide="2"></div>
                    <div className="slider-bar" data-slide="3"></div>
                    <div className="slider-bar" data-slide="4"></div>
                    <div className="slider-bar" data-slide="5"></div>
                </div>
            </div> */}            
    </div>
);
}