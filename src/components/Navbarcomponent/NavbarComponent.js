import React from "react";
import styles from "./NavbarComponent.module.css";
import logo from "../../assets/bg_img.png";


const NavbarComponent = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <img src={logo} alt="Poomani Decors" />
      </div>

      <nav className={styles.navlinks}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default NavbarComponent;
