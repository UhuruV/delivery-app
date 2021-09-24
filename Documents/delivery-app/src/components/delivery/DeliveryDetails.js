import React from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";

const DeliveryDetails = () => {
  return (
    <div>
      <div className="sign-up">
        <div className="sign-up-form">
          <Card body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  {/* <Form.Label>Email</Form.Label> */}
                  <Form.Control
                    type="email"
                    placeholder="Enter pick up location"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control
                    type="password"
                    placeholder="Enter delivery destination"
                  />
                </Form.Group>
              </Row>

              <div className="delivery-size">
                <Row>
                  <Col xs={6} md={4} className="small">
                    <p className="delivery-para">Small</p>
                  </Col>
                  <Col xs={6} md={4} className="medium">
                    <p className="delivery-para">Medium</p>
                  </Col>
                  <Col xs={6} md={4} className="large">
                    <p className="delivery-para">Large</p>
                  </Col>
                </Row>
              </div>

              <div className="delivery-details">
                <Row className="mb-3">
                  <Col xs={6}>Bike</Col>
                  <Col xs={6} style={{ textAlign: "right"}}>
                      <Col>KES 289</Col>
                      <Col>Pick up by 3:30pm</Col>
                  </Col>
                </Row>
              </div>

              <Button variant="primary" type="submit" className="btn-continue">
                Continue
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
