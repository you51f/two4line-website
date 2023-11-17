"use client"
import React, { useEffect, useRef } from 'react'
import { observe } from 'react-intersection-observer';
import styles from '../page.module.css'

const AnimatedBox = ({ children }) => {
    const boxRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animate);
                }
            });
        });

        observer.observe(boxRef.current);

        return () => {
            observer.disconnect(boxRef);
        }
    }, []);

  return (
    <div className={styles.animate_box} ref={boxRef}>{children}</div>
  )
}

export default AnimatedBox