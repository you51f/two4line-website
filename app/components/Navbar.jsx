"use client"
import React, { useState } from 'react';
import styles from '../page.module.css';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { BiMenuAltLeft } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { useStateContext } from '../context/StateContext';
import { Cart, SideMenu } from './index';
import Link from 'next/link';

const Navbar = () => {
  const { isOpen, setIsOpen, showCart, setShowCart, totalQuantities  } = useStateContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navbar_items}>
          <button name='togglebtns' onClick={handleMenuToggle} className={styles.navbar_burger}>
          {isMenuOpen ? (
    <RxCross2 className={styles.menu_btn} /> 
  ) : (
    <BiMenuAltLeft className={styles.menu_btn} />
  )}
          </button>
          <Link href={'/'}><div className={styles.navbar_logo}></div></Link>
          <div className={styles.navbar_right}>
            <ul className={styles.navbar_list}>
              <Link href={'/'}><li>Home</li></Link>
              <Link href={'/catalog'}><li>Catalog</li></Link>
              <Link href={'/about-us'}><li>About</li></Link>
              {/* <ul>Catalog</ul>
              <ul>Contact</ul>
              <ul>About</ul> */}
            </ul>
            <button name='cartbtn' type='button' onClick={() => setShowCart(true)} className={styles.navbar_cart_btn}>
              <MdOutlineShoppingCart className={styles.navbar_cart} />
              <div className={totalQuantities != 0 ? styles.navbar_qty_active : styles.navbar_qty}>{totalQuantities}</div>
           </button>
          </div>
        </div>
      </div>
      <div className={styles.navbar2}>
       
      </div>

        <div className={`${styles.side_menu} ${isOpen ? styles.show : ''}`}>
          <button className={styles.navbar_cart_btn} onClick={handleMenuToggle}><RxCross2 className={styles.menu_btn}/></button>
          <ul className={styles.menu_list}>
          <Link href={'/'}><li onClick={handleMenuToggle}>Home</li></Link>
              <Link href={'/catalog'}><li onClick={handleMenuToggle}>Catalog</li></Link>
              <Link href={'/about-us'}><li onClick={handleMenuToggle}>About</li></Link>
          </ul>
        </div>
        {showCart && <Cart />}
    </div>
  );
};

export default Navbar;