import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">ValaryBestDelivery</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Button variant="warning">
              {" "}
              <Nav.Link eventKey={2} href="#memes">
                Sign Up
              </Nav.Link>
            </Button>
            {""}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
