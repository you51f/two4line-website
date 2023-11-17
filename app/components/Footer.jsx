import React from 'react'
import styles from '../page.module.css';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoTiktok } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_box}>
            <div className={styles.footer_left}>
                <div className={styles.footer_logo}></div>
                <div className={styles.footer_lists}>
                    <div className={styles.footer_pages}>
                        <div className={styles.footer_pages_title}>Pages</div>
                        <div className={styles.footer_pages_items}>
                            <ul>Home</ul>
                            <ul>Catalog</ul>
                            <ul>Contact</ul>
                            <ul>About</ul>
                        </div>
                    </div>
                    <div className={styles.footer_policies}>
                    <div className={styles.footer_pages_title2}>Policies</div>
                        <div className={styles.footer_pages_items}>
                            <ul>Exchange Policy</ul>
                            <ul>Refund Policy</ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer_right}>
                <div className={styles.footer_social}>
                    <div className={styles.footer_pages_title3}>Follow-Us on Social Media</div>
                        <div className={styles.footer_social_items}>
                            <ul><AiOutlineInstagram/></ul>
                            <ul><AiFillFacebook/></ul>
                            <ul><FaXTwitter/></ul>
                            <ul><BiLogoTiktok/></ul>
                        </div>
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