import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles.css';
import Header from '../Header';
import Footer from '../components/Footer';
import heroImg from '../assets/Sample/adam-jang-8pOTAtyd_Mc-unsplash.jpg';
import mundamImg from '../assets/Sample/yonghyun-lee-cJKfMvJGHD0-unsplash.jpg';
import yedamImg from '../assets/Sample/adrien-bruneau-8cpR_Yf0rQs-unsplash.jpg';
import deokdamImg from '../assets/Sample/madison-oren-uGP_6CAD-14-unsplash.jpg';
import chedamImg from '../assets/Sample/nick-fewings-WqO0As9Od8U-unsplash.jpg';

export default function Programs() {
    const location = useLocation();

    // Handle hash scroll
    useEffect(() => {
        const scrollToHash = () => {
            if (location.hash) {
                const element = document.querySelector(location.hash);
                if (element) {
                    // Wait for page to render
                    setTimeout(() => {
                        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }, 100);
                }
            } else {
                // No hash, scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        scrollToHash();
    }, [location]);

    useEffect(() => {
        document.title = 'Programs - CHOPSTICKSTORY';

        const setMeta = (name, content, prop = false) => {
            if (prop) {
                let el = document.querySelector(`meta[property="${name}"]`);
                if (!el) {
                    el = document.createElement('meta');
                    el.setAttribute('property', name);
                    document.head.appendChild(el);
                }
                el.content = content;
            } else {
                let el = document.querySelector(`meta[name="${name}"]`);
                if (!el) {
                    el = document.createElement('meta');
                    el.setAttribute('name', name);
                    document.head.appendChild(el);
                }
                el.content = content;
            }
        };

        setMeta(
            'description',
            'Explore CHOPSTICKSTORY\'s diverse programs including MunDam: Infusing Culture, YeDam: Infusing Art, DeokDam: Infusing Virtue, and CheDam: Infusing Experiences.'
        );
        setMeta(
            'keywords',
            'Korean cultural programs, MunDam, YeDam, DeokDam, CheDam, cultural education, Korean culture'
        );
        setMeta('author', 'CHOPSTICKSTORY');
        setMeta('og:title', 'Programs - CHOPSTICKSTORY', true);
        setMeta(
            'og:description',
            'Discover the richness of Korean culture through our diverse educational programs.',
            true
        );
    }, []);

    // Program card dropdown functionality
    useEffect(() => {
        const programCards = document.querySelectorAll('.program-card');
        const handlers = [];
        
        programCards.forEach(card => {
            const button = card.querySelector('.program-dropdown-btn');
            const details = card.querySelector('.program-details');
            
            if (!button || !details) return;
            
            const handleClick = () => {
                card.classList.toggle('active');
            };
            
            handlers.push({ button, handler: handleClick });
            button.addEventListener('click', handleClick);
        });
        
        return () => {
            handlers.forEach(({ button, handler }) => {
                button.removeEventListener('click', handler);
            });
        };
    }, []);

    return (
        <div className="programs-page">
            <Header />

            <main className="programs-main">
                <section className="hero-section" aria-label="Hero Image">
                    <img src={heroImg} alt="Traditional Korean cultural items" />
                </section>

                <section className="programs-intro" aria-labelledby="programs-heading">
                    <h1 id="programs-heading">Our Programs</h1>
                    <p>Discover the richness of Korean culture through our diverse educational programs.</p>
                </section>

                <section className="programs-grid" aria-label="Program Cards">
                    <div className="program-card" id="mundam" aria-labelledby="mundam-heading" tabIndex="0" role="button">
                        <div className="program-image">
                            <img src={mundamImg} alt="Traditional Korean storytelling session" />
                        </div>
                        <div className="program-content">
                            <h2 id="mundam-heading">MunDam: Infusing Culture</h2>
                            <p>Explore traditional Korean folktales and contemporary narratives that showcase the wisdom and values of Korean culture.</p>
                            <button className="program-dropdown-btn">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <div className="program-details">
                                <p>Our MunDam program includes:</p>
                                <ul>
                                    <li>Traditional folktales and myths</li>
                                    <li>Contemporary Korean literature</li>
                                    <li>Storytelling workshops</li>
                                    <li>Cultural context discussions</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="program-card" id="yedam" tabIndex="0" role="button">
                        <div className="program-image">
                            <img src={yedamImg} alt="YeDam Art Workshop" />
                        </div>
                        <div className="program-content">
                            <h2>YeDam: Infusing Art</h2>
                            <p>Experience hands-on learning with traditional Korean crafts. Yedam is a program where you can build patience, focus, and a sense of achievement through making and decorating.</p>
                            <button className="program-dropdown-btn">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <div className="program-details">
                                <p>Our YeDam program includes:</p>
                                <ul>
                                    <li>Chopstick making wood craft</li>
                                    <li>Lacquering and mother-of-pearl inlay</li>
                                    <li>Gyubang craft (traditional Korean sewing)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="program-card" id="deokdam" tabIndex="0" role="button">
                        <div className="program-image">
                            <img src={deokdamImg} alt="DeokDam Session" />
                        </div>
                        <div className="program-content">
                            <h2>DeokDam: Infusing Virtue</h2>
                            <p>Learn about the fundamental values and manners of Korean culture.</p>
                            <button className="program-dropdown-btn">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <div className="program-details">
                                <p>Our DeokDam program includes:</p>
                                <ul>
                                    <li>Table manners education</li>
                                    <li>Tea culture education</li>
                                    <li>Daily life manners</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="program-card" id="chedam" tabIndex="0" role="button">
                        <div className="program-image">
                            <img src={chedamImg} alt="CheDam Activities" />
                        </div>
                        <div className="program-content">
                            <h2>CheDam: Infusing Experiences</h2>
                            <p>Engage in interactive sessions featuring classic Korean games that promote cultural understanding through play.</p>
                            <button className="program-dropdown-btn">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <div className="program-details">
                                <p>Our CheDam program includes:</p>
                                <ul>
                                    <li>Classic Korean games</li>
                                    <li>Interactive sessions</li>
                                    <li>Cultural context discussions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
