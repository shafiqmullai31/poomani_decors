import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavbarComponent from "../components/Navbarcomponent/NavbarComponent";
import services from "../data/services";

function Services() {
  return (
    <>
      <NavbarComponent />
      <Container className="py-5">
        <h2 className="section-title">Our Services</h2>
        <Row>
          {services.map((service) => (
            <Col md={4} key={service.id} className="mb-4">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                  <Card.Title className="text-gold">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Services;
