import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#ccd5ae", color: "#fff", padding: "20px 0" }}>
      <Container className="text-center">
        <h5 style={{ fontWeight: "bold" }}>Poomani Decors</h5>
        <p>Making your wedding dreams come true ✨</p>
        <small>© {new Date().getFullYear()} Poomani Decors. All Rights Reserved.</small>
      </Container>
    </footer>
  );
};

export default Footer;
