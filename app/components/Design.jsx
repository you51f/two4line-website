import React from 'react'
import styles from '../page.module.css'
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedBox } from './index';

const Design = ({design: { _id, image, name, slug }, categorySlug, collectionSlug}) => {
  const builder = imageUrlBuilder(client); 
  return (
    <AnimatedBox className={styles.animate_box}>
      <div className={styles.design}>
        <div className={styles.design_box}>
          {/* <img className={styles.design_image}/> */}
          {image[0] ? (
            <Image
            src={builder.image(image && image[0]).width(435).height(438).url()} 
            className={styles.design_image}
            width={435}
            height={438} 
          alt={name}
          loading="lazy"
            />
          ) : null}
          <div className={styles.design_name}>{name}</div>
          {/* <div className={styles.design_btn}>Product details</div> */}
          <Link href={`/category/${categorySlug}/collections/${collectionSlug}/product/${slug?.current}`} className={styles.design_btn}>Product details</Link>
        </div>
    </div>
    </AnimatedBox>
    
  )
}

export default Design