import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles.css';
import Header from '../Header';
import Footer from '../components/Footer';
import heroImg from '../assets/Sample/luca-upper-Z-4kOr93RCI-unsplash.jpg';

export default function Project() {
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
        document.title = 'Our Project - CHOPSTICKSTORY';

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
            'Explore CHOPSTICKSTORY\'s journey through our milestones and activities from 2019 to the present.'
        );
        setMeta(
            'keywords',
            'CHOPSTICKSTORY milestones, Korean cultural events, organizational history, cultural education, community events'
        );
        setMeta('author', 'CHOPSTICKSTORY');
        setMeta('og:title', 'Our Project - CHOPSTICKSTORY', true);
        setMeta(
            'og:description',
            'Explore our journey of promoting Korean culture through various milestones and activities since 2019.',
            true
        );
    }, []);

    return (
        <div className="project-page">
            <Header />

            <main className="project-main">
                <section className="hero-section" aria-label="Hero Image">
                    <img src={heroImg} alt="CHOPSTICKSTORY project activities" />
                </section>

                <section className="project-intro" aria-labelledby="project-heading">
                    <h1 id="project-heading">Our Project</h1>
                    <p>Follow our journey of sharing Korean culture through various milestones and activities since 2019.</p>
                </section>

                <section className="milestones" id="milestones">
                    <h2>Milestones & Activities</h2>
                    
                    <div className="timeline">
                        <div className="year-section">
                            <h3 className="year">2019</h3>
                            <ul className="events-list">
                                <li>
                                    <span className="event-date">May 2019:</span> 
                                    <span className="event-desc">Completed Chopstick Instructor Training Program at Incheon Yeonsu-gu Lifelong Education Center.</span>
                                </li>
                                <li>
                                    <span className="event-date">Jun 2019:</span> 
                                    <span className="event-desc">Conducted a literacy education program using chopsticks in Songdo, Incheon, supported by Songdo 2-dong Residents' Association.</span>
                                </li>
                                <li>
                                    <span className="event-date">Sep 2019:</span> 
                                    <span className="event-desc">Operated a booth at Songdo 4-dong Resident Event.</span>
                                </li>
                                <li>
                                    <span className="event-date">Oct 2019:</span> 
                                    <span className="event-desc">Selected as a village enterprise for the Incheon community.</span>
                                </li>
                                <li>
                                    <span className="event-date">Oct 2019:</span> 
                                    <span className="event-desc">Participated in the IFEZ Global Fair for international cultural exchange.</span>
                                </li>
                                <li>
                                    <span className="event-date">Oct 2019:</span> 
                                    <span className="event-desc">Hosted a cultural experience booth at the Songdo International Children's Book Fair in Incheon.</span>
                                </li>
                                <li>
                                    <span className="event-date">Nov 2019:</span> 
                                    <span className="event-desc">Won an award at the Incheon Yeonsu-gu Startup Competition.</span>
                                </li>
                                <li>
                                    <span className="event-date">Nov 2019:</span> 
                                    <span className="event-desc">Participated in the Arts and Entrepreneurship Talent Exhibition organized by IFEZ.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3 className="year">2022</h3>
                            <ul className="events-list">
                                <li>
                                    <span className="event-desc">Participated in the NC Korean Culture Experience and 'Squid Game' event.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3 className="year">2023–2025</h3>
                            <ul className="events-list">
                                <li>
                                    <span className="event-desc">Conducting Korean cultural education programs at SVKS Korean School.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3 className="year">2023 & 2024</h3>
                            <ul className="events-list">
                                <li>
                                    <span className="event-desc">Participated in the SF Chuseok Festival.</span>
                                </li>
                                <li>
                                    <span className="event-desc">Participated in Korean Culture Night for local educators.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3 className="year">2024</h3>
                            <ul className="events-list">
                                <li>
                                    <span className="event-desc">Led sessions at KCI Teen Summit.</span>
                                </li>
                                <li>
                                    <span className="event-desc">Conducted cultural classes for Mercy & Peace disability program, San Jose Korean Catholic Church School, and Cupertino Middle School multicultural event.</span>
                                </li>
                                <li>
                                    <span className="event-desc">Hosted a Google Korean Event.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3 className="year">2024 & 2025</h3>
                            <ul className="events-list">
                                <li>
                                    <span className="event-desc">Received a grant from The ARTS Council of the Southern Finger Lakes.</span>
                                </li>
                                <li>
                                    <span className="event-desc">Conducted a Korean cultural experience class at the Corning, NY.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3 className="year">2025</h3>
                            <ul className="events-list">
                                <li>
                                    <span className="event-date">Jan 2025:</span> 
                                    <span className="event-desc">Conducting Korean New Year event at Almaden Korean School, Edison Elementary School.</span>
                                </li>
                                <li>
                                    <span className="event-date">Feb 2025:</span> 
                                    <span className="event-desc">Conducting Korean cultural experiences at Emerald High School.</span>
                                </li>
                                <li>
                                    <span className="event-date">Mar 2025:</span> 
                                    <span className="event-desc">Collaborating with Moonlight Collective for a special workshop.</span>
                                </li>
                                <li>
                                    <span className="event-date">Mar 2025:</span> 
                                    <span className="event-desc">Conducting Korean cultural experiences at California High School.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="future-plans">
                            <h3>Future Plans</h3>
                            <p>Planning to establish a branch in South Korea.</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
