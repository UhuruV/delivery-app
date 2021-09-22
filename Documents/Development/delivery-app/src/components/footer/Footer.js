import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container id="container">
        <Row>
          <Col xs={6} md={4}>
            <h6>VALARY BEST DELIVERY</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae consequuntur voluptatum laborum numquam
              blanditiis!
            </p>
            <p>Adress: Karen, Ndege Road</p>
            <p>Phone: +254 723728496</p>
          </Col>
          <Col xs={6} md={4}>
            <h6>VALARYBESTDELIVERY INFORMATION</h6>
            <p>About Us</p>
            <p>Value Proposition</p>
          </Col>
          <Col xs={6} md={4}>
            <h6>SIGN UP FOR OUR NEWSLETTER</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>

        {/* <Container fluid>
        <Row>
          <Col>2021 Valary Best Delivery.</Col>
        </Row>
      </Container> */}
      </Container>
    </div>
  );
};

export default Footer;
