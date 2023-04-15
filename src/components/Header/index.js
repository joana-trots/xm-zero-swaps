import logo from '../../xm-logo.svg';
import './index.sass';

const Header = () => {
    return <> 
        <div className="container">
            <div className="header__inner">
                <a className="logo" href="#" title="XM Logo">
                    <img src={logo} alt="logo" />   
                </a>    
                <nav className="menu">
                    <ul className="menu__list">
                        <li className="menu__list--item">
                            <a className="menu__list--link" href="#product" title="Product">XM Homepage</a>
                        </li>
                        <li className="menu__list--item">
                            <a className="menu__list--link" href="#services" title="Services">Support</a>
                        </li>
                    </ul>
                </nav>
            </div> 
        </div>
    </>
}

export default Header;