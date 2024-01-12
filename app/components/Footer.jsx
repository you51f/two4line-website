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
                        <div className={styles.footer_pages_items}>
                        <Link className={styles.no_decoration_text} href={'/'}><ul>Home</ul></Link>
                        <Link className={styles.no_decoration_text} href={'/catalog'}><ul>Catalog</ul></Link>
                        <Link className={styles.no_decoration_text} href={'/about-us'}><ul>About Us</ul></Link>
                        <Link className={styles.no_decoration_text} href={'/contact'}><ul>Contact Us</ul></Link>
                        {/* <Link className={styles.no_decoration_text} href={'/about-us'}><ul>Washing Instruction</ul></Link> */}
                        </div>
                    </div>
                    <div className={styles.footer_policies}>
                    <div className={styles.footer_pages_title2}>Policies</div>
                        <div className={styles.footer_pages_items}>
                            <Link className={styles.no_decoration_text} href={'/exchange-refund-policy'}><ul>Exchange & Refund</ul></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer_right}>
                <div className={styles.footer_social}>
                    <div className={styles.footer_pages_title3}>Follow-Us on Social Media</div>
                        <div className={styles.footer_social_items}>
                            <Link className={styles.footer_icons} target='_blank' href={'https://www.instagram.com/two4line?igsh=MmVlMjlkMTBhMg=='}><ul><AiOutlineInstagram/></ul></Link>
                            <Link className={styles.footer_icons} target='_blank'  href={'https://www.facebook.com/share/iTn72EpDk6yAC2Fk/?'}><ul><AiFillFacebook/></ul></Link>
                            <Link className={styles.footer_icons} target='_blank' href={'https://www.tiktok.com/@two4line?_t=8icBMfxLFWY&_r=1'}><ul><BiLogoTiktok/></ul></Link>
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