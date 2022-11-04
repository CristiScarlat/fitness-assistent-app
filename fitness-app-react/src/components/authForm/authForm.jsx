import { Button, Form } from "react-bootstrap";
import { ImGoogle } from "react-icons/im";
import "./authForm.css";

const AuthForm = ({ handleOnSubmit, handleGoogleBtnClick }) => {
  return (
    <div className="login-form-container">
      <div>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
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
