import React from "react";
import NavbarComponent from "../components/Navbarcomponent/NavbarComponent";
import Footer from "../components/Footer";
import SplitTextAnimation from "../components/SplitTextAnimation/SplitTextAnimation";
import { Button, Container } from "react-bootstrap";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Navbar */}
      <NavbarComponent />

      {/* Hero Section */}
      <Container className="text-center flex-grow-1 d-flex flex-column justify-content-center">
        <SplitTextAnimation leftText="Welcome to" rightText="Poomani Decors" />
        <p className={styles.tagline}>Crafting grand wedding decorations with elegance and style</p>
        <Button
          className={styles.exploreButton}
          variant="primary"
        >
          Explore Services
        </Button>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;