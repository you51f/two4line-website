"use client"
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../page.module.css';

const LazyImage = ({ src, alt }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      // Load the image
      const image = new Image();
      image.src = src;
      image.alt = alt;
    }
  }, [inView, src, alt]);

  return <img ref={ref} data-src={src} alt={alt} />;
};

export default LazyImage;