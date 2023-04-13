import "./Register.scss";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
const Register = () => {
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
            id="email"
            name="email"
            type="email"
            value="make@testi.fi"
            labelText="Email"
            placeholder="Enter Email"
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
        </div>
        <Button label="Register" className="auth-button button" disabled={true} />
      </form>
    </div>
  );
};

export default Register;
