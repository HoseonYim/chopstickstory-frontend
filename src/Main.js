{/* <link rel="stylesheet" href="css/styles.css"></link> */}
import './assets/STAMP-LOGO.webp';
import './assets/Sample/toa-heftiba-6bKpHAun4d8-unsplash.jpg'
import './assets/STAMP-LOGO.webp'
import './assets/Sample/adam-jang-8pOTAtyd_Mc-unsplash.jpg'
import './assets/Sample/adrien-bruneau-8cpR_Yf0rQs-unsplash.jpg'
import './assets/Sample/luca-upper-Z-4kOr93RCI-unsplash.jpg'
import './assets/Sample/nick-fewings-WqO0As9Od8U-unsplash.jpg'

import React, { useEffect } from 'react';

export function  useMetadata(metadata) {
    useEffect(()=> {
        // Set Title
        if (metadata.title) {
            document.title = metadata.title;
        }

        // Meta tag Helper
        const updateMeta = (metaname, content, attribute = 'name') => {
            let element = document.querySelector(`meta[${attribute}="${metaname}"]`);
            if (element) {
                element.setAttribute('content', content);
            } else {
                element = document.createElement('meta');
                element.setAttribute(attribute, metaname);
                element.setAttribute('content', content);
                document.head.appendChild(element);
            }
        };

        if (metadata.charset) {
            let charsetElement = document.querySelector('meta[charset]');
            if (charsetElement) {
                charsetElement.setAttribute('charset', metadata.charset);
            } else {
                charsetElement = document.createElement('meta');
                charsetElement.setAttribute('charset', metadata.charset);
                document.head.insertBefore(charsetElement, document.head.firstChild);
            }
        }

        if (metadata.viewport) {
            updateMeta('viewport', metadata.viewport)
        }

        if (metadata.description) {
            updateMeta('description', metadata.description);
        }
        if (metadata.keywords) {
            updateMeta('keywords', metadata.keywords);
        }

        if (metadata.author) {
            updateMeta('author', metadata.author);
        }

        if (metadata.ogTitle) {
            updateMeta('og:title', metadata.ogTitle, 'property');
        }
        if (metadata.ogDescription) {
            updateMeta('og:description', metadata.ogDescription, 'property');
        }
        if (metadata.ogImage) {
            updateMeta('og:image', metadata.ogImage, 'property');
        }
        if (metadata.ogUrl) {
            updateMeta('og:url', metadata.ogUrl, 'property');
        }
    }, [metadata]);
}

export default function Main() {
    
    useMetadata({charset:'UTF-8',
        viewport:'width=device-width, initial-scale=1.0', 
        description:'CHOPSTICKSTORY - Sharing Korean culture through meaningful experiences. Discover our programs including MunDam: Infusing Culture, YeDam: Infusing Art, DeokDam: Infusing Virtue, and CheDam: Infusing Experiences.',
        keywords:'Korean culture, cultural education, MunDam, YeDam, DeokDam, CheDam, Korean cultural programs',
        author:'CHOPSTICKSTORY',
        ogTitle:'CHOPSTICKSTORY - Celebrating Korean Culture',
        ogDescription:'Join us in our journey to connect cultures through meaningful experiences.',
        ogImage:'./images/STAMP-LOGO.webp',
        ogUrl:'https://theolee021.github.io/ChopstickStory/'
    });

    return (
        // <html lang="ko">
        <div>
        {/* <title>CHOPSTICKSTORY - Celebrating Korean Culture</title> */}
        {/* <link rel="icon" type="image/webp" href="./images/cropped-cropped-CHOPSTICKSTORY-7.webp"> */}
        {/* <body> */}
            <header>
                <div className="header-content">
                    <div className="logo">
                        <a href="index.html">
                            <img src="./assets/STAMP-LOGO.webp" className="logo-img"/>
                            <p>CHOPSTICKSTORY</p>
                        </a>
                    </div>
                    <div className="chopsticks">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
        
            <nav aria-label="Main navigation">
                <div className="menu-links">
                    <a href="index.html" aria-current="page">Home</a>
                    <div className="dropdown">
                        <div className="dropdown-header">
                            <a href="about.html" className="menu-link">About Us</a>
                            <button className="dropdown-trigger" aria-label="Toggle About Us dropdown">
                                <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="dropdown-menu" aria-label="About Us submenu">
                            <a href="about.html#org-intro">About CHOPSTICKSTORY</a>
                            <a href="about.html#team-section">Our Team</a>
                            <a href="project.html">Our Project</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dropdown-header">
                            <a href="programs.html" className="menu-link">Programs</a>
                            <button className="dropdown-trigger">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                        <div className="dropdown-menu">
                            <a href="programs.html#mundam">MunDam: Infusing Culture</a>
                            <a href="programs.html#yedam">YeDam: Infusing Art</a>
                            <a href="programs.html#deokdam">DeokDam: Infusing Virtue</a>
                            <a href="programs.html#chedam">CheDam: Infusing Experiences</a>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    <a href="https://www.instagram.com/chopstickstory/" title="Instagram" target="_blank">
                        <i className="fa-brands fa-instagram fa-xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/chopstickstory/" title="Linkedin">
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
                    <a href="https://www.paypal.com/donate/?hosted_button_id=WZK3AX6WV9RMC" target="_blank">
                        <i className="fa-brands fa-paypal"></i>
                        Donation
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                    </a>
                </div>
            </nav>
        
            <div className="overlay"></div>
        
            <main>
                <div className="slider-wrapper" role="region" aria-label="Image Slider">
                    <div className="slider-container">
                        <div className="slide" id="slide1" role="tabpanel" aria-labelledby="slide1-tab">
                            <img src="./assets/Sample/toa-heftiba-6bKpHAun4d8-unsplash.jpg" alt="People experiencing Korean culture"/>
                            <div className="slide-content">
                                <h2>Sharing Stories, Building Bridges</h2>
                                <p>Join us in our journey to connect cultures through meaningful experiences.</p>
                                <a href="about.html" className="slide-btn">About Us <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="slide" id="slide2">
                            <img src="./assets/Sample/adam-jang-8pOTAtyd_Mc-unsplash.jpg" alt="Slide 2"/>
                            <div className="slide-content">
                                <h2>Discover Korean Culture</h2>
                                <p>Experience the richness of Korean traditions through our diverse programs.</p>
                                <a href="programs.html" className="slide-btn">Our Programs <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="slide" id="slide3">
                            <img src="./assets/Sample/adrien-bruneau-8cpR_Yf0rQs-unsplash.jpg" alt="YeDam Art Workshop"/>
                            <div className="slide-content">
                                <h2>Chopsticks Special Stories</h2>
                                <p>Explore traditional Korean folktales and contemporary narratives that showcase the wisdom and values.</p>
                                <a href="programs.html#mundam" className="slide-btn">See More <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="slide" id="slide4">
                            <img src="./assets/Sample/luca-upper-Z-4kOr93RCI-unsplash.jpg" alt="Project Activities"/>
                            <div className="slide-content">
                                <h2>Our Project</h2>
                                <p>Follow our journey of sharing Korean culture through various milestones and activities since 2019.</p>
                                <a href="project.html" className="slide-btn">See More <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="slide" id="slide5">
                            <img src="./assets/Sample/nick-fewings-WqO0As9Od8U-unsplash.jpg" alt="CheDam Activities"/>
                            <div className="slide-content">
                                <h2>CheDam: Infusing Experiences</h2>
                                <p>Experience the joy of Korean traditional games with friends and family.</p>
                                <a href="programs.html#chedam" className="slide-btn">See More <i className="fa-solid fa-arrow-right"></i></a>
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
                </div>
            </main>
        
            <section className="instagram-feed">
                <div className="container">
                    <h2 className="section-title">Discover Our Latest Moments</h2>
                    <p className="section-subtitle">Join our growing community of chopstick storytellers</p>
                    <div className="instagram-grid" id="instagram-grid">
                        {/* <!-- Instagram posts will be loaded here dynamically --> */}
                    </div>
                    <div className="social-icons-container">
                        <a href="https://www.instagram.com/chopstickstory/" className="instagram-icon-link" target="_blank" aria-label="Visit our Instagram">
                            <div className="instagram-icon-gradient">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </a>
                        
                        <a href="#" className="linkedin-icon-link" aria-label="Visit our LinkedIn">
                            <div className="linkedin-icon-gradient">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </a>
                        
                        <a href="#" className="youtube-icon-link" aria-label="Visit our YouTube channel">
                            <div className="youtube-icon-gradient">
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        
            <footer>
                <div className="footer-content">
                    {/* <!-- 사이트맵 섹션 추가 --> */}
                    <div className="footer-sitemap">
                        <div className="sitemap-column">
                            <h3><a href="about.html">About Us</a></h3>
                            <ul>
                                <li><a href="about.html#org-intro">About CHOPSTICKSTORY</a></li>
                                <li><a href="about.html#team-section">Our Team</a></li>
                                <li><a href="project.html">Our Project</a></li>
                            </ul>
                        </div>
                        <div className="sitemap-column">
                            <h3><a href="programs.html">Programs</a></h3>
                            <ul>
                                <li><a href="programs.html#mundam">MunDam: Infusing Culture</a></li>
                                <li><a href="programs.html#yedam">YeDam: Infusing Art</a></li>
                                <li><a href="programs.html#deokdam">DeokDam: Infusing Virtue</a></li>
                                <li><a href="programs.html#chedam">CheDam: Infusing Experiences</a></li>
                            </ul>
                        </div>
                        <div className="sitemap-column">
                            <h3>Connect</h3>
                            <ul>
                                <li><a href="mailto:info@chopstickstory.org">Contact Us</a></li>
                                <li><a href="https://www.paypal.com/donate/?hosted_button_id=WZK3AX6WV9RMC">Donate</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* <!-- 기존 푸터 콘텐츠 --> */}
                    <div className="footer-grid">
                        <div className="org-info">
                            <h3>CHOPSTICKSTORY</h3>
                            <p>A 501(c)(3) nonprofit organization | EIN: 99-0860654 | Address: 20570 Shady Oak Ln, Cupertino, CA | Phone: (607) 973-0750 | Email: info@chopstickstory.org</p>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2025 CHOPSTICKSTORY. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            {/* <script src="https://kit.fontawesome.com/b3f4de9307.js" 
            crossorigin="anonymous"></script>
            <script src="js/main.js"></script>
            <script src="js/header-scroll.js"></script>
            <script src="js/nav-scroll.js"></script> */}
        {/* </body> */}
        {/* </html> */}
        </div>
        );
}