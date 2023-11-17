import React from 'react'
import styles from '../page.module.css';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const CollectionBox = ({collection: { _id, image, name, slug }, categorySlug}) => {
  const builder = imageUrlBuilder(client);
  return (
    <div className={styles.collection_box}>
      {image[0] ? (
            <img
            src={builder.image(image && image[0]).width(435).height(438).url()} 
            className={styles.collection_image}
            alt={image[0]?.alt}
            />
          ) : null}
      {/* <div className={styles.collection_image}></div> */}
      <div className={styles.collection_info}>
        <div className={styles.collection_name}>{name}</div>
        <div className={styles.collection_small_image_box}>
          {/* <div className={styles.collection_small_image}></div> */}
          {image?.slice(1, 4).map((item, i) => (
            <img  
              key={i}   
              src={builder.image(item).width(435).height(438).url()}
              className={styles.collection_small_image}
            />
          ))}
        </div>
        <Link href={`/category/${categorySlug}/collections/${slug?.current}`} className={styles.collection_btn}>Shop now</Link>
      </div>
    </div>
  )
}

export default CollectionBox