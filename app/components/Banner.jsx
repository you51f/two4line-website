"use client"
import React from 'react'
import { TypingAnimation } from './index';
import styles from '../page.module.css'
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from "@sanity/image-url";
import Carousel from 'react-bootstrap/Carousel';

const Banner = ({sliderImages}) => {
  const text = 'Enjoy and Check-Out Our Brand New Collections';
  const builder = imageUrlBuilder(client);
  const images = sliderImages
  return (
    // <div className={styles.banner}>
    //   <div className={styles.banner_box}>
    //     <div className={styles.banner_logo}></div>
    //     <div className={styles.banner_text_box}><TypingAnimation text={text} /></div>
    //     {/* <div className={styles.banner_text}>Enjoy and Check Our Newest Collections</div> */}
    //     <div className={styles.banner_shirt}></div>
    //   </div>
    // </div>
    <Carousel className={styles.carousel_main} fade interval={2500}>
      {images.map((imageData, index) => (
        <Carousel.Item key={index}>
        <img className={styles.carousel_img} src={builder.image(imageData.image && imageData.image[0]).width(1280).height(1280).url()} alt={imageData.name}/>
        <Carousel.Caption>
          <h2>Execlusive</h2>
          <h5>{imageData.name}</h5>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
      {/* <Carousel.Item >
        <img className={styles.carousel_img} src='/images/slide1.jpg' alt='slide1'/>
        <Carousel.Caption>
          <h2>Execlusive</h2>
          <h5>Cool and calm designs</h5>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  )
}

export default Banner