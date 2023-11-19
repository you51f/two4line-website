import React from 'react'
import { TypingAnimation } from './index';
import styles from '../page.module.css'
import Image from 'next/image';

const Banner = () => {
  const text = 'Enjoy and Check-Out Our Brand New Collections';
  return (
    <div className={styles.banner}>
      <div className={styles.banner_box}>
        <Image src={'../../public/images/banner_logo.webp'}
         alt={'bannerlogo'}
         width={299}
         height={348}
         loading="lazy"
          className={styles.banner_logo}/>
        <div className={styles.banner_text_box}><TypingAnimation text={text} /></div>
        {/* <div className={styles.banner_text}>Enjoy and Check Our Newest Collections</div> */}
        <Image src={'../../public/images/banner_shirt.webp'}
        className={styles.banner_shirt}
        alt={'bannershirt'}
        width={299}
        height={330}
        loading="lazy"
        />
      </div>
    </div>
  )
}

export default Banner