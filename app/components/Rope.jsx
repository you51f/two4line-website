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
        <Link href={'/'}><GoHome/></Link> {category != null ? <span>{'>'} {category}</span> : null} {collection != null ? <span>{'>'} {collection}</span> : null} {product != null ? <span>{'>'} {product}</span> : null}
        </div>
        <div className={styles.rope_right}>
        <span><div><IoShareSocialSharp/></div>Share</span><div><AiOutlineInstagram/></div> <div><AiFillFacebook/> </div> <div><FaXTwitter/></div> <div><BiLogoTiktok/></div>
        </div>
    </div>
  )
}

export default Rope