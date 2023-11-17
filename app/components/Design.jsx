import React from 'react'
import styles from '../page.module.css'
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const Design = ({design: { _id, image, name, slug }, categorySlug, collectionSlug}) => {
  const builder = imageUrlBuilder(client); 
  return (
    <div className={styles.design}>
        <div className={styles.design_box}>
          {/* <img className={styles.design_image}/> */}
          {image[0] ? (
            <img
            src={builder.image(image && image[0]).width(435).height(438).url()} 
            className={styles.design_image}
            alt={image[0]?.alt}
            />
          ) : null}
          <div className={styles.design_name}>{name}</div>
          {/* <div className={styles.design_btn}>Product details</div> */}
          <Link href={`/category/${categorySlug}/collections/${collectionSlug}/product/${slug?.current}`} className={styles.design_btn}>Product details</Link>
        </div>
    </div>
  )
}

export default Design