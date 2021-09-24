import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image from "../../components/home/assests/home-page.png";

const HomePage = () => {
  return (
    <>
      <Container fluid className="home-page-banner">
        <Row>
          <Col className="banner-col">
            <div className="destination-input">
              
            </div>
          </Col>
        </Row>
      </Container>

      {/* <Container> */}
        {/* <Row style={{ color:"#000" }}  >
          <Col className="homepage-text">
            <h2 style={{ color:"#1E255E" }}>Delivery at your doorstep</h2>
            <p>Lorem ipsum lorem ipsum ipsum Lorem ipsum lorem ipsum ipsumLorem ipsum </p>
            <p>Lorem ipsum lorem ipsum ipsum Lorem ipsum</p>
          </Col>
          <Col style={{ width:"50%" }}>
            <Image src={image} rounded style={{ width: "100%" }} />
          </Col>
        </Row> */}
      {/* </Container> */}

      <Container>
        <Row className="m-5">
          <Col xs={6} md={4}>
            <div className="element1-home">
              <h3>Fast Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maxime mollitia, molestiae quas vel sint commodi
                repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam.
              </p>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="element2-home">
              <h3>Reliable</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maxime mollitia, molestiae quas vel sint commodi
                repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam.
              </p>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="element3-home">
              <h3>Affordable</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maxime mollitia, molestiae quas vel sint commodi
                repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
