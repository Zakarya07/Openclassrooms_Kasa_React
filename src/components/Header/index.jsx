import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Header_logo.png";
import "./index.scss";

const Header = () => {

    return ( 
        <header>
            <div className="wrapper navbar-container">
                <div className="logo-container">
                    <Link to="/">
                    <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <nav>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/about">À Propos</NavLink>
                </nav>
            </div>
        </header>
     );
}
 
export default Header;