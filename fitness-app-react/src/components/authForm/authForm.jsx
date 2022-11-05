import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ImGoogle } from "react-icons/im";
import "./authForm.css";

const AuthForm = ({ handleOnSubmit, handleGoogleBtnClick }) => {
  const [newUser, setNewUser] = useState(false);
  const [form, setForm] = useState({
    email: null,
    password: null,
    confirmedPass: null,
  });
  const [errors, setErrors] = useState({});

  const disableSubmitButton = () => {
    if (!newUser) {
      const disabled =
        form.email !== null &&
        form.email !== "" &&
        form.password !== null &&
        form.password !== "";
      return !disabled;
    } else {
      const disabled =
        form.email !== null &&
        form.email !== "" &&
        form.password !== null &&
        form.password !== "" &&
        form.confirmedPass !== null &&
        form.confirmedPass !== "";
      return !disabled;
    }
  };

  const handleFormChange = (value, stateKey) => {
    const obj = { ...form };
    obj[stateKey] = value;
    setForm(obj);
  };

  const validOnSubmit = () => {
    setErrors({})
    if(newUser && form.password !== form.confirmedPass){
      const errorsObj = {...errors};
      errorsObj.confirmedPass = "Passwords doesn't match!"
      setErrors(errorsObj);
      return false
    }

    return true;
  }

  const _handleOnSubmit = (e) => {
    e.preventDefault();
    if(validOnSubmit())handleOnSubmit(e, !newUser);
  }

  const handleSetNewUser = () => {
    setNewUser((state) => !state);
    setErrors({})
  }

  return (
    <div className="login-form-container">
      <div>
        <Form onSubmit={_handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => handleFormChange(e.target.value, "email")}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => handleFormChange(e.target.value, "password")}
            />
          </Form.Group>
          {newUser && <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  className="mb-4"
                  onChange={(e) =>
                    handleFormChange(e.target.value, "confirmedPass")
                  }
                />
                {errors.confirmedPass && <div style={{color: "red"}}>{errors.confirmedPass}</div>}
          </Form.Group>}
          <div className="d-flex justify-content-between">
            <Button
              variant={disableSubmitButton() ? "secondary" : "primary"}
              type="submit"
              disabled={disableSubmitButton()}
            >
              {newUser ? "Register" : "Login"}
            </Button>
            <Button
              variant="primary"
              onClick={handleSetNewUser}
            >
              {newUser ? "Already an User" : "New User"}
            </Button>
          </div>
        </Form>
        <hr />
        <Button className="google-login-button" onClick={handleGoogleBtnClick}>
          <ImGoogle />
        </Button>
      </div>
    </div>
  );
};

export default AuthForm;
