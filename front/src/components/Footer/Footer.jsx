import React from 'react';
import './Footer.css';

const Footer = ({ toggleTheme, theme }) => {
    return (
        <div id="footer">
            <div id="footer_content">
                <div id="github">
                    <span className="gh-mark"></span>
                    <a href="https://github.com/TVT23KM-1/Muuvit.git" target="blank">Github repositio</a><br/>
                </div>
                <p>© OAMK Tietotekniikan opiskelijat, 2024</p>
            </div>
        </div>
    );
};

export default Footer;