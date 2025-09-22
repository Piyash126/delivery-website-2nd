import fbIcon from "../../assets/frontend_assets/facebook_icon.png";
import linkedinIcon from "../../assets/frontend_assets/linkedin_icon.png";
import imgLogo from "../../assets/frontend_assets/logo.png";
import twitterIcon from "../../assets/frontend_assets/twitter_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={imgLogo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            ex repudiandae consequuntur sit illum excepturi delectus dolorum ad,
            explicabo labore.
          </p>
          <div className="footer-social-icons">
            <img src={fbIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={linkedinIcon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1725325</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
