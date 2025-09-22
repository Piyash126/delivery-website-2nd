import { useState } from "react";
import crossIcon from "../../assets//frontend_assets/cross_icon.png";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={crossIcon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign Up")}>
            Create a new account? <span>Click here</span>
          </p>
        ) : (
          <p onClick={() => setCurrentState("Login")}>
            Already have an account? <span>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
