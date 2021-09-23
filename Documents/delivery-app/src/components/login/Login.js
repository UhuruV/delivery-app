import React, { Fragment } from "react";
import { Form,Button,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";


const Login = () => {
  const history = useHistory();

  const RedirectAfterLogin =()=>{
    history.push('/');
  }


  return (
    <div className="login-form">
      <Form onSubmit={RedirectAfterLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    
        <Button variant="primary" type="submit" id="button">
          Submit
        </Button>

        <Form.Group as={Row}>
         <Form.Text className="text-muted">
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </Form.Text>
          </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
