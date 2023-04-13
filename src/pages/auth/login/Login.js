import "./Login.scss";
import { FaArrowRight } from "react-icons/fa";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="auth-inner">
      {/* <div className="alerts alert-error" role="alert">
        Error message
      </div> */}
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value={10}
            labelText="Username"
            placeholder="Enter Username"
            onChange={() => {}}
          />
          <Input
            id="passowrd"
            name="passowrd"
            type="password"
            value={20}
            labelText="Passowrd"
            placeholder="Enter Passowrd"
            onChange={() => {}}
          />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" name="checkbox" type="checkbox" onChange={() => {}} />
            Keep me signed in
          </label>
        </div>
        <Button label="Login" className="auth-button button" disabled={true} />
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
