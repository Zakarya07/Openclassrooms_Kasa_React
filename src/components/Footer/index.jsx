import logo from "../../assets/images/Footer_logo.png";
import "./index.scss";

const Footer = () => {
  const currentYear = new Date();

  return (
    <footer>
      <div className="wrapper footer-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="copyright-container">
          <p> &copy; {currentYear.getFullYear()} Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
