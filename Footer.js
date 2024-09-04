// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-top">
                    <div className="left-section">
                        <h1>Come say <i>hello</i></h1>
                    </div>
                    <div className="center-section">
                        <ul className="footer-menu-links">
                            <li>Menu</li>
                            <li>Schedule</li>
                            <li>Contact</li>
                            <li>Privacy policy</li>
                            <li>About</li>
                            <li>Catering</li>
                        </ul>
                    </div>
                    <div className="right-section">
                        <button className="schedule-button">View weekly schedule</button>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="logo-social">
                        <h2>Logo</h2>
                        <div className="social-icons">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="newsletter">
                            <p>Sign up for our newsletter!</p>
                            <div className="newsletter-signup">
                                <input type="email" placeholder="Your email address" />
                                <button>Sign up</button>
                            </div>
                        </div>
                    </div>
                    <p>© Example 2023. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
