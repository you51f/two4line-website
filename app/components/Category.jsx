"use client"
import React from 'react'
import styles from '../page.module.css';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedBox } from './index';

// const Category = () => {
const Category = ({category: { _id, image, name, slug }}) => {
  // const cat = category
  const builder = imageUrlBuilder(client);
  return (
    // <div className={styles.category}>
    <AnimatedBox className={styles.animate_box}>
      <div className={styles.category_name}>
      <Link href={`/category/${slug?.current}`}>
          <Image 
            src={builder.image(image).width(525).height(515).url()}
            className={styles.category_box}
            width={525}
            height={515} 
          alt={name}
          loading="lazy" 
            />
        </Link>
        <div ><h4>{name}</h4></div>
      </div>
    </AnimatedBox>
    // </div>
  )
}
 
export default Category