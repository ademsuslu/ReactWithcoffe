import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLocationArrow, FaPhone, FaFacebookMessenger } from 'react-icons/fa';

const Footer = () => {
    return <div id="Contact" className="Footer">
        <div className="Footerİtems">
            <h1>Coffee.</h1>
            <div className="Footericons">
            <FaFacebook className="iconitem" />
                <FaInstagram className="iconitem" />
                <FaTwitter className="iconitem" />
                <FaYoutube className="iconitem" />
            </div>
            <p>© 2022 Cofee. All rights reserved.</p>
        </div>
        <div className="Footerİtems">
            <h1>Navigation</h1>
            <div>
                <ul className="Foter-nav">
                    <li className="Fotersnav-item">
                    <a href="#">Home</a>
                    </li>
                    <li className="Fotersnav-item">
                    <a href="#gallery">Services</a>
                    </li>
                    <li className="Fotersnav-item">
                    <a href="#Abouts">About</a>
                    </li>
                    <li className="Fotersnav-item">
                    <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="Footerİtems">
            <h1>Contact US</h1>
            <div className="FooterSocial">
                <div className="socialİtem">
                    <FaLocationArrow /> <p>8411 Nibh Mollis, Risus, RI</p>
                </div>
                <div  className="socialİtem">
                    <FaPhone />
                    <p>+12323232323</p>
                </div>
                <div  className="socialİtem">
                    <FaFacebookMessenger />
                    <p>phasellusagittis@volupat.com</p>
                </div>
            </div>
        </div>
    </div>;
};

export default Footer;
