// src/components/GallerySection/GallerySection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./ServiceSection.module.css";
// Background image (same as services)
import galleryBg from "../../assets/bg.jpeg";

// Import your gallery images (add more if you want)
import img1 from "../../assets/wedding.jpg";
import img2 from "../../assets/halfsaree.jpg";
import img3 from "../../assets/DJ.jpg";
import img4 from "../../assets/birthday.jpg";
import img5 from "../../assets/corporate.jpg";
import img6 from "../../assets/anniversary.jpg";

const galleryImages = [
  { img: img1, title: "Wedding & Receptions", desc: "" },
  { img: img2, title: "Half Saree Ceremony", desc: "" },
  { img: img3, title: "DJ Party", desc: "" },
  { img: img4, title: "Birthday Party", desc: "" },
  { img: img5, title: "Corporate Event", desc: "" },
  { img: img6, title: "Anniversary Party", desc: "" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className={styles.gallerySection}>
      {/* Background Image */}
      <div className={styles.bgImage} style={{ backgroundImage: `url(${galleryBg})` }} />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <h3 className={styles.title}>Our Services</h3>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className={styles.swiper}
        >
          {galleryImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={item.img} alt={item.title} className={styles.galleryImage} />
                </div>
                <div >
                  <h3 >{item.title}</h3>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection;