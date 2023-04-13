import "./ForgotPassword.scss";

import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/background.jpg";
const ForgotPassword = () => {
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                {/* <div className="alerts alert-error" role="alert">
        Error message
      </div> */}
                <form className="auth-form">
                  <div className="form-input-container">
                    <Input
                      id="passowrd"
                      name="passowrd"
                      type="password"
                      value={20}
                      labelText="Passowrd"
                      placeholder="Enter Passowrd"
                      onChange={() => {}}
                    />
                  </div>
                  <Button label="ForgotPassword" className="auth-button button" disabled={true} />
                  <Link to="/">
                    <span className="forgot-password">
                      <FaArrowLeft className="arrow-left" />
                      Back to Login
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
