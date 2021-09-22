import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image from "./asset/delivery.jpg";

const About = () => {
  return (
    <>
      <Container fluid>
        <Row className="about">
          <Col>
            <div>
              <div className="about-text">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum
                </h3>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="m-5">
          <Col xs={6}>
            <Image src={image} rounded style={{ width: "100%" }} />
          </Col>
          <Col xs={6}>
            <p className="p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint?
            </p>
          </Col>
        </Row>

        <Container className="m-5">
        <Row className="core-values">
          <Col xs={6} md={5} className="mission-statement mx-3">
            <h3>Our Mission</h3>
            <p>
              Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
              sapiente officiis modi at sunt excepturi expedita sint?
            </p>
          </Col>
          <Col xs={6} md={5}className="vision-statement mx-3">
            <h3>Our Vission</h3>
            <p>
              Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
              sapiente officiis modi at sunt excepturi expedita sint?
            </p>
          </Col>
        </Row>
        </Container>
      </Container>
    </>
  );
};

export default About;
