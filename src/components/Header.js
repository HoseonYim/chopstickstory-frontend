import '../styles/Header.css';
import logo from '../assets/STAMP-LOGO.webp';

export default function Header() {
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <a href="/index.html">
                        <img
                            src={logo}
                            className="logo-img"
                            alt="CHOPSTICKSTORY logo"
                        />
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
    );
}
