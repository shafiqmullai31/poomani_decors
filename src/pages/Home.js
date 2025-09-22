import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">Poomani Decors</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ height: "90vh" }}>
        <div>
          <h1 className="display-3 fw-bold">Welcome to Poomani Decors</h1>
          <p className="lead">Crafting grand wedding decorations with elegance and style</p>
          <Button variant="warning" size="lg" href="/services">
            Explore Services
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
