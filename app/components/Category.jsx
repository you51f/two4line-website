import React from 'react'
import styles from '../page.module.css';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';

const Category = ({category: { _id, image, name, slug }}) => {
  // const cat = category
  const builder = imageUrlBuilder(client);
  return (
    // <div className={styles.category}>
        <Link href={`/category/${slug?.current}`}>
          <Image 
            src={builder.image(image).width(525).height(515).url()}
            className={styles.category_box}
            width={525}
            height={515} 
          alt={image[0]?.alt} 
            />
        </Link>
    // </div>
  )
}
 
export default Category