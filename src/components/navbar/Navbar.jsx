import { useState } from "react";
import { Link } from "react-router-dom";
import basketIcon from "../../assets/frontend_assets/basket_icon.png";
import projectLogo from "../../assets/frontend_assets/logo.png";
import searchIcon from "../../assets/frontend_assets/search_icon.png";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="navbar">
      <img src={projectLogo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact u
        </a>
      </ul>
      <div className="navbar-right">
        <img src={searchIcon} alt="" />
        <div className="navbar-search-icon">
          <img src={basketIcon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
