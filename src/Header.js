import './styles/Header.css';
import logo from './assets/STAMP-LOGO.webp';
import { Routes, Route, Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <Link to="/about">
                        <img
                            src={logo}
                            className="logo-img"
                            alt="CHOPSTICKSTORY logo"
                        />
                        <p>CHOPSTICKSTORY</p>
                    </Link>
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
