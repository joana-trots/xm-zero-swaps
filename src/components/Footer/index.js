import './index.sass';
import logo_1 from '../../assets/logos/tradingpoint.png';
import logo_2 from '../../assets/logos/metaquotes.png';
import logo_3 from '../../assets/logos/verisign.png';
import logo_4 from '../../assets/logos/unisef-champion-for-children.png';
import logo_5 from '../../assets/logos/investors-in-people.png';
import facebook from '../../assets/icons/social/facebook-icon.svg';
import twitter from '../../assets/icons/social/twitter-icon.svg';
import youtube from '../../assets/icons/social/youtube-icon.svg';
import instagram from '../../assets/icons/social/instagram-icon.svg';
import linkedin from '../../assets/icons/social/linkedin-icon.svg';

const Footer = () => {
    return <> 
        <div className="container">
            <div className="footer__inner">
                <div className="footer__inner--secondary">
                    <div className="footer__partners">
                        <img src={logo_2} alt="Logo MetaQuotes" />
                        <img src={logo_3} alt="Logo Verisign" />
                        <img src={logo_4} alt="Logo Unisef" />
                        <img src={logo_5} alt="Logo Investors in people" />
                    </div>
                    <div className="footer__social">
                        Follow us on
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={youtube} alt="youtube" />
                        <img src={instagram} alt="instagram" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </div>
                <div className="footer__inner--primary">
                    <nav className="footer-menu">
                        <ul className="footer-menu__list">
                            <li className="footer-menu__list--item">
                                <a className="footer-menu__list--link" href="#" title="Product">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp; 
                            </li>
                            <li className="footer-menu__list--item">
                                <a className="footer-menu__list--link" href="#" title="Services">Cookie Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp; 
                            </li>
                            <li className="footer-menu__list--item">
                                <a className="footer-menu__list--link" href="#" title="Services">Terms and Conditions</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer__logo">
                        <img src={logo_1} alt="Logo TradingPoint" />
                    </div>
                </div>   
                
            </div> 
        </div>
    </>
}

export default Footer;