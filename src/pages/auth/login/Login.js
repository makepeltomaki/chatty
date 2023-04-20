import "./Login.scss";
import { FaArrowRight } from "react-icons/fa";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { authService } from "../../../services/api/auth/auth.service";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await authService.signIn({
        username,
        password
      });
      console.log(result);
      setUser(result.data.user);
      // 1 set logged in to true in local storage
      // 2 set username in local storage
      // 3 dispatch user to redux
      setHasError(false);
      setAlertType("alert-success");
    } catch (error) {
      setLoading(false);
      setHasError(true);
      setAlertType("alert-error");
      setErrorMessage(error?.response?.data.message);
      console.log(error?.response?.data.message);
    }
  };
  useEffect(() => {
    if (loading && !user) return;
    if (user) {
      navigate("/app/social/streams");
      setLoading(false);
    }
  }, [user, loading, navigate]);
  return (
    <div className="auth-inner">
      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role="alert">
          {errorMessage}
        </div>
      )}
      <form className="auth-form" onSubmit={handleLogin}>
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value={username}
            labelText="Username"
            placeholder="Enter Username"
            style={{ border: `${hasError ? "1px solid #fa9b8a" : ""}` }}
            handleChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id="passowrd"
            name="passowrd"
            type="password"
            value={password}
            labelText="Passowrd"
            placeholder="Enter Passowrd"
            style={{ border: `${hasError ? "1px solid #fa9b8a" : ""}` }}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              value={keepLoggedIn}
              style={{ border: `${hasError ? "1px solid #fa9b8a" : ""}` }}
              handleChange={() => setKeepLoggedIn(!keepLoggedIn)}
            />
            Keep me signed in
          </label>
        </div>
        <Button
          label={`${loading ? "LOGIN IN PROGRESS..." : "LOGIN"}`}
          className="auth-button button"
          disabled={!username | !password}
        />
        <Link to="/forgot-password">
          <span className="forgot-password">
            Forgot password? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
