import "./Register.scss";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { useState, useEffect } from "react";
import { Utils } from "../../../services/utils/utils.service";
import { authService } from "../../../services/api/auth/auth.service";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const registerUser = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const avatarColor = Utils.avatarColor();
      const avatarImage = Utils.generateAvatar(username.charAt(0).toLocaleUpperCase(), avatarColor);
      const result = await authService.signUp({
        username,
        email,
        password,
        avatarColor,
        avatarImage
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

      <form className="auth-form" onSubmit={registerUser}>
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
            id="email"
            name="email"
            type="email"
            value={email}
            labelText="Email"
            placeholder="Enter Email"
            style={{ border: `${hasError ? "1px solid #fa9b8a" : ""}` }}
            handleChange={(e) => setEmail(e.target.value)}
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
        </div>
        <Button
          label={`${loading ? "REGISTER IN PROGRESS..." : "REGISTER"}`}
          className="auth-button button"
          disabled={!username || !email || !password}
        />
      </form>
    </div>
  );
};

export default Register;
