import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-sitemap">
                    <div className="sitemap-column">
                        <h3>
                            <Link to="/about">About Us</Link>
                        </h3>
                        <ul>
                            <li>
                                <Link to="/about#org-intro">
                                    About CHOPSTICKSTORY
                                </Link>
                            </li>
                            <li>
                                <Link to="/about#team-section">Our Team</Link>
                            </li>
                            <li>
                                <Link to="/project">Our Project</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sitemap-column">
                        <h3>
                            <Link to="/programs">Programs</Link>
                        </h3>
                        <ul>
                            <li>
                                <Link to="/programs#mundam">
                                    MunDam: Infusing Culture
                                </Link>
                            </li>
                            <li>
                                <Link to="/programs#yedam">
                                    YeDam: Infusing Art
                                </Link>
                            </li>
                            <li>
                                <Link to="/programs#deokdam">
                                    DeokDam: Infusing Virtue
                                </Link>
                            </li>
                            <li>
                                <Link to="/programs#chedam">
                                    CheDam: Infusing Experiences
                                </Link>
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
    );
}
