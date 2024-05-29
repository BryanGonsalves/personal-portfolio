// Create your Footer component here

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: test@educative.io</p>
                <p className="footer-contact-access">Mobile: 1234 1234 1234</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="www.google.com"><i><FaFacebook /></i></a>
                    <a href="www.google.com"><i><FaInstagram /></i></a>
                    <a href="www.google.com"><i><FaTwitter /></i></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
