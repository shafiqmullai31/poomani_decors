import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import gallery from "../data/gallery";

function Gallery() {
  return (
    <>
      <NavbarComponent />
      <Container className="py-5">
        <h2 className="section-title">Our Gallery</h2>
        <Row>
          {gallery.map((item) => (
            <Col md={3} sm={6} xs={12} key={item.id} className="mb-4">
              <Image src={item.image} fluid rounded className="shadow-sm" />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
