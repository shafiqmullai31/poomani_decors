import React from "react";
import styles from "./SplitTextAnimation.module.css";

const SplitTextAnimation = ({ leftText, rightText }) => {
  return (
    <div className={styles.splitTextContainer}>
      <span className={`${styles.textPart} ${styles.left}`}>{leftText}</span>
      <span className={`${styles.textPart} ${styles.right}`}>{rightText}</span>
    </div>
  );
};

export default SplitTextAnimation;