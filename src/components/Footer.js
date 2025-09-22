import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-light py-4 border-top">
      <Container className="text-center">
        <p className="mb-0 text-muted">
          © {new Date().getFullYear()} Poomani Decors | Crafted with ❤️
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
