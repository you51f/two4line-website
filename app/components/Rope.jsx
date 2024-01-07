import React from 'react'
import styles from '../page.module.css'
import { GoHome } from 'react-icons/go';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoTiktok } from 'react-icons/bi';
import { IoShareSocialSharp } from 'react-icons/io5';
import Link from 'next/link';

const Rope = ({category, collection, product}) => {
  return (
    <div className={styles.rope}>
        <div className={styles.rope_left}>
        <Link href={'/'} className={styles.footer_icons}><GoHome/></Link> {category != null ? <span>{'>'} {category}</span> : null} {collection != null ? <span>{'>'} {collection}</span> : null} {product != null ? <span>{'>'} {product}</span> : null}
        </div>
        <div className={styles.rope_right}>
        <span><div><IoShareSocialSharp/></div>Share</span><div><Link href={'https://www.instagram.com/two4line?igsh=MmVlMjlkMTBhMg=='} className={styles.footer_icons}><AiOutlineInstagram/></Link></div> <div><Link href={'https://www.facebook.com/share/iTn72EpDk6yAC2Fk/?'} className={styles.footer_icons}><AiFillFacebook/> </Link></div> <div> <Link href={'https://www.tiktok.com/@two4line?_t=8icBMfxLFWY&_r=1'} className={styles.footer_icons}><BiLogoTiktok/></Link></div>
        </div>
    </div>
  )
}

export default Rope