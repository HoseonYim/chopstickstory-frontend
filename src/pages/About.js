import React, { useEffect } from 'react';
import '../styles/About.css';
import '../styles/Footer.css';
import Header from '../components/Header';

export default function About() {
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

    const imgPath = (p) => `${process.env.PUBLIC_URL}${p}`;

    return (
        <div className="about-page">
            <Header />

            <nav aria-label="Main navigation">
                <div className="menu-links">
                    <a href="/index.html">Home</a>

                    <div className="dropdown">
                        <div className="dropdown-header">
                            <a
                                href="/about.html"
                                className="menu-link"
                                aria-current="page"
                            >
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
                            <a href="/about.html#org-intro">
                                About CHOPSTICKSTORY
                            </a>
                            <a href="/about.html#team-section">Our Team</a>
                            <a href="/project.html">Our Project</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropdown-header">
                            <a href="/programs.html" className="menu-link">
                                Programs
                            </a>
                            <button
                                className="dropdown-trigger"
                                aria-label="Toggle Programs dropdown"
                            >
                                <i
                                    className="fa-solid fa-chevron-down"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                        <div className="dropdown-menu">
                            <a href="/programs.html#mundam">
                                MunDam: Infusing Culture
                            </a>
                            <a href="/programs.html#yedam">
                                YeDam: Infusing Art
                            </a>
                            <a href="/programs.html#deokdam">
                                DeokDam: Infusing Virtue
                            </a>
                            <a href="/programs.html#chedam">
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
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fa-brands fa-instagram fa-xl"
                            aria-hidden="true"
                        ></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/chopstickstory/"
                        title="Linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fa-brands fa-linkedin-in fa-xl"
                            aria-hidden="true"
                        ></i>
                    </a>
                    <a
                        href="#"
                        title="Youtube"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fa-brands fa-youtube fa-xl"
                            aria-hidden="true"
                        ></i>
                    </a>
                </div>

                <div className="external-links">
                    <a
                        href="mailto:info@chopstickstory.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fa-regular fa-envelope"
                            aria-hidden="true"
                        ></i>
                        Contact
                        <i
                            className="fa-solid fa-arrow-up-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                    <a
                        href="https://www.paypal.com/donate/?hosted_button_id=WZK3AX6WV9RMC"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fa-brands fa-paypal"
                            aria-hidden="true"
                        ></i>
                        Donation
                        <i
                            className="fa-solid fa-arrow-up-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                </div>
            </nav>

            <div className="overlay" />

            <main className="about-main">
                <section className="hero-section" aria-label="Hero Image">
                    <img
                        src={imgPath(
                            '/images/Sample/toa-heftiba-6bKpHAun4d8-unsplash.jpg'
                        )}
                        alt="Team members collaborating"
                    />
                </section>

                <section
                    className="org-intro"
                    id="org-intro"
                    aria-labelledby="about-heading"
                >
                    <img
                        src={imgPath(
                            '/images/cropped-cropped-CHOPSTICKSTORY-7.webp'
                        )}
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
                                <img
                                    src={imgPath(
                                        '/images/Sample/alex-alvarez-63YVMrL2d6g-unsplash.jpg'
                                    )}
                                    alt="Younjae Choi"
                                />
                                <h4>Younjae Choi</h4>
                                <p className="position">
                                    Executive Director/Founder
                                </p>
                            </div>
                            <div className="team-member">
                                <img
                                    src={imgPath(
                                        '/images/Sample/lidya-nada-_0aKQa9gr4s-unsplash.jpg'
                                    )}
                                    alt="Samanda Cavallaro"
                                />
                                <h4>Samanda Cavallaro</h4>
                                <p className="position">Secretary/Co-Founder</p>
                            </div>
                            <div className="team-member">
                                <img
                                    src={imgPath(
                                        '/images/Sample/erik-mclean-qYV86rlxHLQ-unsplash.jpg'
                                    )}
                                    alt="Shihyun Helen Kang"
                                />
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
                                <img
                                    src={imgPath(
                                        '/images/Sample/sasha-freemind-frq5Q6Ne9k4-unsplash.jpg'
                                    )}
                                    alt="Eunju Lee"
                                />
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
                                <img
                                    src={imgPath(
                                        '/images/Sample/andre-hunter-p-I9wV811qk-unsplash.jpg'
                                    )}
                                    alt="Jaehyun Lee"
                                />
                                <h4>Jaehyun Lee</h4>
                                <p className="position">Outreach Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className="team-category">
                        <h3 className="team-title">Event Support Team</h3>
                        <div className="team-grid">
                            <div className="team-member">
                                <img
                                    src={imgPath(
                                        '/images/Sample/paul-pastourmatzis-8kDOOrs608I-unsplash.jpg'
                                    )}
                                    alt="Raehyung Lee"
                                />
                                <h4>Raehyung Lee</h4>
                                <p className="position">
                                    Event Support Manager
                                </p>
                            </div>
                            <div className="team-member">
                                <img
                                    src={imgPath(
                                        '/images/Sample/alvin-mahmudov-FlLHbmF3AHc-unsplash.jpg'
                                    )}
                                    alt="Daniel Yang"
                                />
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
                                <img
                                    src={imgPath(
                                        '/images/Sample/morgan-sessions-YIN4xUBaqnk-unsplash.jpg'
                                    )}
                                    alt="Yewon Kim"
                                />
                                <h4>Yewon Kim</h4>
                                <p className="position">Operations Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className="team-category">
                        <h3 className="team-title">Web Development Team</h3>
                        <div className="team-grid">
                            <div className="team-member">
                                <img
                                    src={imgPath(
                                        '/images/Sample/zhuo-cheng-you-Y-TzM28dDhU-unsplash.jpg'
                                    )}
                                    alt="Theo Lee"
                                />
                                <h4>Theo Lee</h4>
                                <p className="position">Software Engineer</p>
                            </div>
                            <div className="team-member">
                                <img
                                    src={imgPath(
                                        '/images/Sample/averie-woodard-5d20kdvFCfA-unsplash.jpg'
                                    )}
                                    alt="Hyunseo Lee"
                                />
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
                                <img
                                    src={imgPath(
                                        '/images/Sample/jacqueline-munguia-1pAwJiCD60c-unsplash.jpg'
                                    )}
                                    alt="Jungeun Lim"
                                />
                                <h4>Jungeun Lim</h4>
                                <p className="position">Social Media Manager</p>
                            </div>
                            <div className="team-member">
                                <img
                                    src={imgPath(
                                        '/images/Sample/yuyang-liu-VOV0q44b7R4-unsplash.jpg'
                                    )}
                                    alt="Gureum Kang"
                                />
                                <h4>Gureum Kang</h4>
                                <p className="position">Content Manager</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-content">
                    <div className="footer-sitemap">
                        <div className="sitemap-column">
                            <h3>
                                <a href="/about.html">About Us</a>
                            </h3>
                            <ul>
                                <li>
                                    <a href="/about.html#org-intro">
                                        About CHOPSTICKSTORY
                                    </a>
                                </li>
                                <li>
                                    <a href="/about.html#team-section">
                                        Our Team
                                    </a>
                                </li>
                                <li>
                                    <a href="/project.html">Our Project</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sitemap-column">
                            <h3>
                                <a href="/programs.html">Programs</a>
                            </h3>
                            <ul>
                                <li>
                                    <a href="/programs.html#mundam">
                                        MunDam: Infusing Culture
                                    </a>
                                </li>
                                <li>
                                    <a href="/programs.html#yedam">
                                        YeDam: Infusing Art
                                    </a>
                                </li>
                                <li>
                                    <a href="/programs.html#deokdam">
                                        DeokDam: Infusing Virtue
                                    </a>
                                </li>
                                <li>
                                    <a href="/programs.html#chedam">
                                        CheDam: Infusing Experiences
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="sitemap-column">
                            <h3>Connect</h3>
                            <ul>
                                <li>
                                    <a href="mailto:info@chopstickstory.org">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.paypal.com/donate/?hosted_button_id=WZK3AX6WV9RMC"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Donate
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-grid">
                        <div className="org-info">
                            <h3>CHOPSTICKSTORY</h3>
                            <p>
                                A 501(c)(3) nonprofit organization | EIN:
                                99-0860654 | Address: 20570 Shady Oak Ln,
                                Cupertino, CA | Phone: (607) 973-0750 | Email:
                                info@chopstickstory.org
                            </p>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2025 CHOPSTICKSTORY. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
