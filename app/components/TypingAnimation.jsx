"use client"
import React, { useEffect, useState } from 'react'
import styles from '../page.module.css'

const TypingAnimation = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(6);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentIndex(6);
        }, 3000); // Wait for 3 seconds before resetting the animation
      }
    }, 100); // Adjust the delay between each letter (in milliseconds)

    return () => clearTimeout(animationTimeout);
  }, [currentIndex, text]);

  useEffect(() => {
    setVisibleText(text.substring(0, currentIndex));
  }, [currentIndex, text]);

  return <div className={styles.banner_text}>{visibleText}</div>;
};

export default TypingAnimation;