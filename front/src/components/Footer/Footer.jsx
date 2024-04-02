import React from 'react';
import './Footer.css';

const Footer = ({toggleTheme, theme}) => {
    return (
        <footer>
            <div id="footer">
                <div id="github">
                    <a href="https://github.com/TVT23KM-1/Muuvit.git" target="blank">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                              alt="Github logo"/>
                        <div>Projekti Repo</div>
                    </a>
                    <br/>
                </div>
                <p>© OAMK Tietotekniikan opiskelijat, 2024</p>
            </div>
        </footer>
    );
};

export default Footer;