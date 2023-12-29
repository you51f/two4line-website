"use client"
import React from 'react'
import { TypingAnimation } from './index';
import styles from '../page.module.css'
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from "@sanity/image-url";

const Banner = ({sliderImages}) => {
  const text = 'Enjoy and Check-Out Our Brand New Collections';
  const builder = imageUrlBuilder(client);
  return (
    <div className={styles.banner}>
      <div className={styles.banner_box}>
        <div className={styles.banner_logo}></div>
        <div className={styles.banner_text_box}><TypingAnimation text={text} /></div>
        {/* <div className={styles.banner_text}>Enjoy and Check Our Newest Collections</div> */}
        <div className={styles.banner_shirt}></div>
      </div>
    </div>
  )
}

export default Banner