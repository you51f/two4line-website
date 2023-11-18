import React from 'react';
import styles from '../page.module.css';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const CollectionBox = ({ collection: { _id, image, name, slug }, categorySlug, index }) => {
  const builder = imageUrlBuilder(client);
  const isEven = index % 2 === 0;
  const collectionInfoClass = isEven ? styles.collection_info : styles.collection_info2;

  return (
    <div className={styles.collection_box}>
      {image[0] ? (
        <img
          src={builder.image(image && image[0]).width(435).height(438).url()}
          className={styles.collection_image}
          alt={image[0]?.alt}
        />
      ) : null}
      <div className={collectionInfoClass}>
        <div className={styles.collection_name}>{name}</div>
        <div className={styles.collection_small_image_box}>
          {image?.slice(1, 4).map((item, i) => (
            <img
              key={i}
              src={builder.image(item).width(435).height(438).url()}
              className={styles.collection_small_image}
            />
          ))}
        </div>
        <Link href={`/category/${categorySlug}/collections/${slug?.current}`} className={styles.collection_btn}>
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default CollectionBox;