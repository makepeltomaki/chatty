import "./ForgotPassword.scss";

import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/background.jpg";
import { useState } from "react";
import { authService } from "../../../services/api/auth/auth.service";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [responseMessage, setResponseMessage] = useState();

  const forgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.forgotPassword(email);
      setLoading(false);
      setEmail("");
      setShowAlert(true);
      setAlertType("alert-success");
      setResponseMessage(response?.data?.message);
    } catch (error) {
      setAlertType("alert-error");
      setLoading(false);
      setShowAlert(true);
      setResponseMessage(error?.response?.data?.message);
    }
  };
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs" style={{ height: `${responseMessage} ? '300px': '' ` }}>
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                {responseMessage && showAlert && (
                  <div className={`alerts ${alertType}`} role="alert">
                    {responseMessage}
                  </div>
                )}

                <form className="auth-form" onSubmit={forgotPassword}>
                  <div className="form-input-container">
                    <Input
                      id="passowrd"
                      name="passowrd"
                      type="text"
                      value={email}
                      labelText="Passowrd"
                      placeholder="Enter Passowrd"
                      handleChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button
                    label={`${loading ? "IN PROGRESS..." : "CHANGE PASSWORD"}`}
                    className="auth-button button"
                    disabled={!email}
                  />
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
