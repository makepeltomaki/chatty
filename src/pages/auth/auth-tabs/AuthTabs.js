import React, { useState } from "react";
import "./AuthTabs.scss";
import backgroundImage from "../../../assets/images/background.jpg";
import { Login, Register } from "../index";

const AuthTabs = () => {
  const [type, setType] = useState("Sign In");
  return (
    <>
      <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="environment">DEV</div>
        <div className="container-wrapper-auth">
          <div className="tabs">
            <div className="tabs-auth">
              <ul className="tab-group">
                <li className={`tab ${type === "Sign In" ? "active" : ""}`}>
                  <button className="login" onClick={() => setType("Sign In")}>
                    Login
                  </button>
                </li>
                <li className={`tab ${type === "Sign Up" ? "active" : ""}`}>
                  <button className="signup" onClick={() => setType("Sign Up")}>
                    Register
                  </button>
                </li>
              </ul>
              {type === "Sign In" && (
                <div className="tab-item">
                  <Login />
                </div>
              )}
              {type === "Sign Up" && (
                <div className="tab-item">
                  <Register />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthTabs;
