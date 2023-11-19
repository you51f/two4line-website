import React from 'react'
import { TypingAnimation } from './index';
import styles from '../page.module.css'

const Banner = () => {
  const text = 'Enjoy and Check-Out Our Brand New Collections';
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