import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/bg_img.png";// add your logo in src/assets
import styles from "./NavbarComponent.module.css";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" fixed="top" className={styles.navbar}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Poomani Decors Logo"
            className={styles.logo}
          />
          <span className={styles.brandText}>Poomani Decors</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className={styles.navLink}>Services</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className={styles.navLink}>Gallery</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={styles.navLink}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;