import React from 'react';

const Footer = ({ toggleTheme, theme }) => {
    return (
        <div id="footer">
            <span className="gh-mark"></span> <a href="https://github.com/TVT23KMO-1/2024-q2-elokuvasovellus">Github repositio</a><br/>
            <p>© OAMK Tietotekniikan opiskelijat, 2024</p>
            <button onClick={toggleTheme}>Vaihda teemaa</button>
            <p>Tämä on {theme === 'light' ? 'vaalea' : 'tumma'} teema.</p>
        </div>
    );
};

export default Footer;