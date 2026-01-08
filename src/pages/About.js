import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/About.css';
import '../styles/Footer.css';
import Header from '../Header';
import Footer from '../components/Footer';
import a from '../assets/Sample/toa-heftiba-6bKpHAun4d8-unsplash.jpg';
import b from '../assets/cropped-cropped-CHOPSTICKSTORY-7.webp';
import c from '../assets/Sample/alex-alvarez-63YVMrL2d6g-unsplash.jpg';
import d from '../assets/Sample/lidya-nada-_0aKQa9gr4s-unsplash.jpg';
import e from '../assets/Sample/erik-mclean-qYV86rlxHLQ-unsplash.jpg';
import f from '../assets/Sample/sasha-freemind-frq5Q6Ne9k4-unsplash.jpg';
import g from '../assets/Sample/andre-hunter-p-I9wV811qk-unsplash.jpg';
import h from '../assets/Sample/paul-pastourmatzis-8kDOOrs608I-unsplash.jpg';
import i from '../assets/Sample/alvin-mahmudov-FlLHbmF3AHc-unsplash.jpg';
import j from '../assets/Sample/morgan-sessions-YIN4xUBaqnk-unsplash.jpg';
import k from '../assets/Sample/zhuo-cheng-you-Y-TzM28dDhU-unsplash.jpg';
import l from '../assets/Sample/averie-woodard-5d20kdvFCfA-unsplash.jpg';
import m from '../assets/Sample/jacqueline-munguia-1pAwJiCD60c-unsplash.jpg';
import n from '../assets/Sample/yuyang-liu-VOV0q44b7R4-unsplash.jpg';

export default function About() {
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
        document.title = 'About Us - CHOPSTICKSTORY';

        // Optional: update meta tags if they don't exist (keeps things simple without extra libs)
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
            'Learn about CHOPSTICKSTORY, a non-profit organization dedicated to sharing Korean culture.'
        );
        setMeta(
            'keywords',
            'CHOPSTICKSTORY, Korean culture, non-profit organization, cultural education, team'
        );
        setMeta('author', 'CHOPSTICKSTORY');
        setMeta('og:title', 'About Us - CHOPSTICKSTORY', true);
        setMeta(
            'og:description',
            'Discover our mission to foster cultural understanding through Korean cultural education.',
            true
        );
        setMeta(
            'og:image',
            `${process.env.PUBLIC_URL}/images/STAMP-LOGO.webp`,
            true
        );
        setMeta(
            'og:url',
            'https://theolee021.github.io/ChopstickStory/about.html',
            true
        );
    }, []);

    return (
        <div className="about-page">
            <Header />

            <main className="about-main">
                <section className="hero-section" aria-label="Hero Image">
                    <img src={a} alt="Team members collaborating" />
                </section>

                <section
                    className="org-intro"
                    id="org-intro"
                    aria-labelledby="about-heading"
                >
                    <img
                        src={b}
                        alt="CHOPSTICKSTORY Logo"
                        className="about-logo"
                    />
                    <p className="org-intro-p">
                        We are a non-profit organization committed to fostering
                        understanding of Korean culture through engaging
                        programs and inspiring stories.
                    </p>

                    <div className="mission-vision">
                        <div className="mission">
                            <h2>Our Mission</h2>
                            <p>
                                CHOPSTICKSTORY, a 501(c)(3) nonprofit
                                organization, is dedicated to fostering harmony
                                and unity within communities by sharing and
                                celebrating Korean culture.
                                <br />
                                <br />
                                Through our programs, we aim to inspire cultural
                                appreciation and mutual understanding, paving
                                the way for a more connected and inclusive
                                society.
                            </p>
                        </div>

                        <div className="vision">
                            <h2>Our Vision</h2>
                            <p>
                                Our vision is to contribute to building a better
                                world by promoting cultural connection, empathy,
                                and collaboration.
                                <br />
                                <br />
                                By embracing the values and traditions of Korean
                                culture, CHOPSTICKSTORY aspires to create a
                                future where diverse communities thrive together
                                in harmony.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="team-section" id="team-section">
                    <h2>Our Team</h2>

                    <div className="team-category">
                        <h3 className="team-title">Board of Directors</h3>
                        <div className="team-grid">
                            <div className="team-member">
                                <img src={c} alt="Younjae Choi" />
                                <h4>Younjae Choi</h4>
                                <p className="position">
                                    Executive Director/Founder
                                </p>
                            </div>
                            <div className="team-member">
                                <img src={d} alt="Samanda Cavallaro" />
                                <h4>Samanda Cavallaro</h4>
                                <p className="position">Secretary/Co-Founder</p>
                            </div>
                            <div className="team-member">
                                <img src={e} alt="Shihyun Helen Kang" />
                                <h4>Shihyun Helen Kang</h4>
                                <p className="position">
                                    Treasurer/CFO, Co-Founder
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="team-category">
                        <h3 className="team-title">Admin Team</h3>
                        <div className="team-grid">
                            <div className="team-member">
                                <img src={f} alt="Eunju Lee" />
                                <h4>Eunju Lee</h4>
                                <p className="position">
                                    Administrative Manager
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="team-category">
                        <h3 className="team-title">Outreach Team</h3>
                        <div className="team-grid">
                            <div className="team-member">
                                <img src={g} alt="Jaehyun Lee" />
                                <h4>Jaehyun Lee</h4>
                                <p className="position">Outreach Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className="team-category">
                        <h3 className="team-title">Event Support Team</h3>
                        <div className="team-grid">
                            <div className="team-member">
                                <img src={h} alt="Raehyung Lee" />
                                <h4>Raehyung Lee</h4>
                                <p className="position">
                                    Event Support Manager
                                </p>
                            </div>
                            <div className="team-member">
                                <img src={i} alt="Daniel Yang" />
                                <h4>Daniel Yang</h4>
                                <p className="position">
                                    Event Support Assistant
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="team-category">
                        <h3 className="team-title">
                            Operations Management Team
                        </h3>
                        <div className="team-grid">
                            <div className="team-member">
                                <img src={j} alt="Yewon Kim" />
                                <h4>Yewon Kim</h4>
                                <p className="position">Operations Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className="team-category">
                        <h3 className="team-title">Web Development Team</h3>
                        <div className="team-grid">
                            <div className="team-member">
                                <img src={k} alt="Theo Lee" />
                                <h4>Theo Lee</h4>
                                <p className="position">Software Engineer</p>
                            </div>
                            <div className="team-member">
                                <img src={l} alt="Hyunseo Lee" />
                                <h4>Hyunseo Lee</h4>
                                <p className="position">Web Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className="team-category">
                        <h3 className="team-title">
                            Social Media & Content Team
                        </h3>
                        <div className="team-grid">
                            <div className="team-member">
                                <img src={m} alt="Jungeun Lim" />
                                <h4>Jungeun Lim</h4>
                                <p className="position">Social Media Manager</p>
                            </div>
                            <div className="team-member">
                                <img src={n} alt="Gureum Kang" />
                                <h4>Gureum Kang</h4>
                                <p className="position">Content Manager</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
