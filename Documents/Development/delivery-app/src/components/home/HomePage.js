import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container fluid className="home-page-banner">
      <Row>
        <Col className="banner-col">
          <div className="destination-input">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl
                placeholder="Enter delivery destination"
                aria-label="Destination"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
