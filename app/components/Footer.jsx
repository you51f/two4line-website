import React from 'react'
import styles from '../page.module.css';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoTiktok } from 'react-icons/bi';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_box}>
            <div className={styles.footer_left}>
                <div className={styles.footer_logo}></div>
                <div className={styles.footer_lists}>
                    <div className={styles.footer_pages}>
                        <div className={styles.footer_pages_title}>Pages</div>
                        <ul className={styles.footer_pages_items}>
                        <Link href={'/'}><li>Home</li></Link>
                        <Link href={'/catalog'}><li>Catalog</li></Link>
                        <Link href={'/about-us'}><li>About</li></Link>
                        </ul>
                    </div>
                    <div className={styles.footer_policies}>
                    <div className={styles.footer_pages_title2}>Policies</div>
                        <ul className={styles.footer_pages_items}>
                            <Link href={'/exchange-refund-policy'}><li>Exchange & Refund</li></Link>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.footer_right}>
                <div className={styles.footer_social}>
                    <div className={styles.footer_pages_title3}>Follow-Us on Social Media</div>
                        <ul className={styles.footer_social_items}>
                            <li><AiOutlineInstagram/></li>
                            <li><AiFillFacebook/></li>
                            <li><FaXTwitter/></li>
                            <li><BiLogoTiktok/></li>
                        </ul>
                        <div className={styles.footer_pages_title4}><HiOutlineMail className={styles.footer_email}/> Email: <span>two4line@gmail.com</span></div>
                </div>  
            </div>
        </div>
        <div className={styles.footer_evo}>
            <div className={styles.footer_evo_text}>
                Powered by
            </div>
            <div className={styles.footer_evo_logo}></div>
        </div> 
        <div className={styles.footer_evo}>
            <div className={styles.footer_evo_text}>
            © 2022 All rights reserved. EVO Technologies & Services.
            </div>
            
        </div> 
    </footer>
  )
}

export default Footer