// src/pages/Home.js
import React from "react";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import SplitTextAnimation from "../components/SplitTextAnimation/SplitTextAnimation";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import Footer from "../components/Footer/Footer";

import heroBg from "../assets/bg.jpeg"; // make sure your image is in src/assets/

const Home = () => {
  return (
    <>
      {/* HERO SECTION - Beautiful visible background */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.42), 
            rgba(0, 0, 0, 0.52)
          ), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Navbar */}
        <NavbarComponent />

        {/* Hero Content - Centered & Readable */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 20px",
            marginTop: "-80px", // pulls content below navbar
          }}
        >
          <SplitTextAnimation leftText="Poomani" rightText="Decors" />

          <p
            style={{
              color: "#d8b874",
              fontSize: "1.9rem",
              marginTop: "1.8rem",
              fontWeight: "300",
              letterSpacing: "1.8px",
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
            }}
          >
            Crafting Magical Wedding Moments
          </p>
        </div>
      </section>

      {/* Other Sections */}
      <ServiceSection />
      <data/>
      <Footer />
    </>
  );
};

export default Home;