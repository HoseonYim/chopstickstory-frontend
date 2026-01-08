import './components/header.css';
import logo from './assets/STAMP-LOGO.webp';
import { Routes, Route, Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export default function Header() {

    const chopsticksRef = useRef(null);
    const navRef = useRef(null);
    const overlayRef = useRef(null);
    const headerRef = useRef(null);
    const lastScrollYRef = useRef(0);
    const tickingRef = useRef(false);


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

    // Close menu when clicking nav links (excluding dropdown header links)
    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        // Exclude dropdown header links to prevent conflicts
        const navLinks = nav.querySelectorAll('a:not(.dropdown-header a)');
        
        const handleLinkClick = () => {
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        };

        navLinks.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, []);

    // Dropdown Menu functionality
    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        const dropdowns = nav.querySelectorAll('.dropdown');
        const handlers = [];

        // Dropdowns start closed by default (no active class)
        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('.dropdown-trigger');
            const dropdownHeader = dropdown.querySelector('.dropdown-header');
            if (!trigger) return;
            
            const handleTriggerClick = (e) => {
                e.stopPropagation();
                e.preventDefault();
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
            };
            
            // Prevent dropdown header link from toggling dropdown when clicked
            if (dropdownHeader) {
                const headerLink = dropdownHeader.querySelector('a');
                if (headerLink) {
                    const handleHeaderLinkClick = (e) => {
                        // Stop propagation to prevent dropdown toggle
                        e.stopPropagation();
                        // Allow navigation (don't prevent default)
                    };
                    headerLink.addEventListener('click', handleHeaderLinkClick);
                    handlers.push({ trigger: headerLink, handler: handleHeaderLinkClick });
                }
            }
            
            handlers.push({ trigger, handler: handleTriggerClick });
            trigger.addEventListener('click', handleTriggerClick);
        });

        // Cleanup
        return () => {
            handlers.forEach(({ trigger, handler }) => {
                trigger.removeEventListener('click', handler);
            });
        };
    }, []);

    // Handle header visibility based on scroll direction
    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        const updateHeader = () => {
            const currentScrollY = window.scrollY;

            // Check scroll direction and position
            if (currentScrollY <= 0) {
                // At the top of the page
                header.classList.remove('header--hidden');
            } else if (currentScrollY > lastScrollYRef.current) {
                // Scrolling down
                header.classList.add('header--hidden');
            } else {
                // Scrolling up
                header.classList.remove('header--hidden');
            }

            lastScrollYRef.current = currentScrollY;
            tickingRef.current = false;
        };

        // Optimize scroll event
        const handleScroll = () => {
            if (!tickingRef.current) {
                window.requestAnimationFrame(() => {
                    updateHeader();
                });
                tickingRef.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header ref={headerRef}>
            <div className="header-content">
                <div className="header-left">
                    <div className="chopsticks" onClick={toggleMenu}  ref={chopsticksRef}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="translation">
                        <div>Eng</div>
                        <div className="header-arrow"></div>
                    </div>
                </div>
                <div className="header-mid logo">
                    <Link to="/">
                        <img
                            src={logo}
                            className="logo-img"
                            alt="CHOPSTICKSTORY logo"
                        />
                        <p>CHOPSTICKSTORY</p>
                    </Link>
                </div>
                <div className="header-right">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>
                
            </div>

            <nav aria-label="Main navigation" ref={navRef}>
                <div className="menu-links">
                    <Link to="/" aria-current="page">
                        Home
                    </Link>

                    <div className="dropdown">
                        <div className="dropdown-header">
                            <Link to="/about" className="menu-link">
                                About Us
                            </Link>
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
                            <Link to="/about#org-intro">
                                About CHOPSTICKSTORY
                            </Link>
                            <Link to="/about#team-section">Our Team</Link>
                            {/* <Link to="/project">Our Project</Link> */}
                            {/* Relocate the project location */}
                        </div>
                    </div>
                    
                    <div className="dropdown">
                        <div className="dropdown-header">
                            <Link to="/programs" className="menu-link">
                                Programs
                            </Link>
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
                        <div className="dropdown-menu">
                            <Link to="/programs#mundam">
                                MunDam: Infusing Culture
                            </Link>
                            <Link to="/programs#yedam">
                                YeDam: Infusing Art
                            </Link>
                            <Link to="/programs#deokdam">
                                DeokDam: Infusing Virtue
                            </Link>
                            <Link to="/programs#chedam">
                                CheDam: Infusing Experiences
                            </Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropdown-header">
                            <Link to="/event" className="menu-link">
                                Events
                            </Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropdown-header">
                            <Link to="/project" className="menu-link">
                                Projects
                            </Link>
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

            <div className="overlay" ref={overlayRef} onClick={toggleMenu}></div>
        </header>
    );
}
