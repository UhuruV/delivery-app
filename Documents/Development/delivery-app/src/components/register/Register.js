import React from "react";
import { Form,Row,Col,Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();

  const RedirectAfterRegister =()=>{
    history.push('/login');
  }


  return (
    <div className="sign-up-form">
      <Form onSubmit={ RedirectAfterRegister }>

      <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Second Name</Form.Label>
            <Form.Control type="text" placeholder="Second Name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>


        <Row className="mb-3">
          {/* <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group> */}

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>County</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Nairobi</option>
              <option>Mombasa</option>
              <option>Nakuru</option>
              <option>Kiambu</option>
              <option>Machakos</option>
              <option>Nyeri</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
