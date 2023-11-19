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
          <button onClick={handleMenuToggle} className={styles.navbar_burger}>
          {isMenuOpen ? (
    <RxCross2 className={styles.menu_btn} /> 
  ) : (
    <BiMenuAltLeft className={styles.navbar_cart} />
  )}
          </button>
          <Link href={'/'}><div className={styles.navbar_logo}></div></Link>
          <div className={styles.navbar_right}>
            <div className={styles.navbar_list}>
              <Link href={'/'}><ul>Home</ul></Link>
              <Link href={'/catalog'}><ul>Catalog</ul></Link>
              <Link href={'/about-us'}><ul>About</ul></Link>
              {/* <ul>Catalog</ul>
              <ul>Contact</ul>
              <ul>About</ul> */}
            </div>
            <button type='button' onClick={() => setShowCart(true)} className={styles.navbar_cart_btn}>
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
          <div className={styles.menu_list}>
          <Link href={'/'}><ul onClick={handleMenuToggle}>Home</ul></Link>
              <Link href={'/catalog'}><ul onClick={handleMenuToggle}>Catalog</ul></Link>
              <Link href={'/about-us'}><ul onClick={handleMenuToggle}>About</ul></Link>
          </div>
        </div>
        {showCart && <Cart />}
    </div>
  );
};

export default Navbar;