import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const HomePage = () => {
  return (
    <Container fluid className="home-page-banner">
      <Row>
        <Col className="banner-col">
          <div className="destination-input">
            <Row>
              <Col xs={6} md={4}>
                <div className="element1-home">
                  <h6>Fast Delivery</h6>
                </div>
              </Col>
              <Col xs={6} md={4}>
              <div className="element2-home">
                  <h6>Reliable</h6>
                  </div>
              </Col>
              <Col xs={6} md={4}>
              <div className="element3-home">
                  <h6>Affordable</h6>
                  </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
