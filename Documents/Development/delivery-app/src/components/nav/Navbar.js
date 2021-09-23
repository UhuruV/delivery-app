import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Row, Col,NavLink } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={ Link } to="/">ValaryBestDelivery</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink  as={ Link } to="/">Home</NavLink>
            <NavLink  as={ Link } to="/about">About Us</NavLink>
          </Nav>

          <Nav>
            <Nav.Link  as={ Link } to="/login">Login</Nav.Link>
            <Button variant="warning">
              {" "}
              <Nav.Link eventKey={2} as={ Link } to="/sign-up" id="nav-link-sign-up">
                Sign Up
              </Nav.Link>
            </Button>
            {""}
          </Nav>
        </Container>
      </Navbar>

  
        {/* <Row className="cont">
          <Col>
            <div className="deliver-with-us">Delivery within Nairobi at an affordable price!</div>
          </Col>
        </Row> */}

    </>
  );
};

export default NavbarComponent;
