// src/components/SplitTextAnimation/SplitTextAnimation.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import styles from "./SplitTextAnimation.module.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

const SplitTextAnimation = ({ leftText, rightText }) => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (!leftRef.current || !rightRef.current) return;

    const leftSplit = new SplitText(leftRef.current, { type: "chars" });
    const rightSplit = new SplitText(rightRef.current, { type: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
      },
    });

    tl.from(leftSplit.chars, {
      y: 80,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.04,
    }).from(
      rightSplit.chars,
      {
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.04,
      },
      "-=0.7"
    );

    return () => {
      leftSplit.revert();
      rightSplit.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.splitTextContainer}>
      <span ref={leftRef} className={styles.left}>
        {leftText}
      </span>
      <span ref={rightRef} className={styles.right}>
        {rightText}
      </span>
    </div>
  );
};

export default SplitTextAnimation;