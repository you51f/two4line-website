import React from 'react';
import styles from '../page.module.css';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedBox } from './index';

const CollectionBox = ({ collection: { _id, image, name, slug }, categorySlug, index }) => {
  const builder = imageUrlBuilder(client);
  const isEven = index % 2 === 0;
  const collectionInfoClass = isEven ? styles.collection_info : styles.collection_info2;

  return (
    <AnimatedBox className={styles.animate_box}>
      <div className={styles.collection_box}>
      {image[0] ? (
        <Image
          src={builder.image(image && image[0]).width(4160).height(4160).url()}
          className={styles.collection_image}
          width={435}
            height={435} 
          alt={name}
          loading="lazy" 
        />
      ) : null}
      <div className={collectionInfoClass}>
        <div className={styles.collection_name}>{name}</div>
        <div className={styles.collection_small_image_box}>
          {image?.slice(1, 4).map((item, i) => (
            <Image
              key={i}
              src={builder.image(item).width(4160).height(4160).url()}
              className={styles.collection_small_image}
              width={100}
            height={100} 
          alt={i}
          loading="lazy"
            />
          ))}
        </div>
        <Link href={`/category/${categorySlug}/collections/${slug?.current}`} className={styles.collection_btn}>
          Shop now
        </Link>
      </div>
    </div>
    </AnimatedBox>
    
  );
};

export default CollectionBox;