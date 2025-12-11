import React from "react";
import styles from "./ServiceSection.module.css";
import services from "../data/services";

const ServiceSection = () => {
  return (
    <section id="services" className={styles.servicesContainer}>
      <h2 className={styles.sectionTitle}>Our Premium Services</h2>

      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <img
              src={service.image}
              alt={service.title}
              className={styles.image}
            />

            <div className={styles.content}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
