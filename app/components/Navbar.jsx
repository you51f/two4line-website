"use client"
import React, { useState } from 'react';
import styles from '../page.module.css';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { BiMenuAltLeft } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { useStateContext } from '../context/StateContext';
import { Cart, SideMenu } from './index';
import Link from 'next/link';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa6';
import Image from 'next/image';

const Navbar = () => {
  const builder = imageUrlBuilder(client);
  const { isOpen, setIsOpen,showCart, totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCart = () => {
    setShowCart(!showCart);
    // setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navbar_items}>
          <button onClick={handleMenuToggle} className={styles.navbar_burger}>
          {isMenuOpen ? (
    <RxCross2 className={styles.menu_btn} /> 
  ) : (
    <BiMenuAltLeft className={styles.menu_btn} />
  )}
          </button>
          <Link href={'/'}><div className={styles.navbar_logo}></div></Link>
          <div className={styles.navbar_right}>
            <div className={styles.navbar_list}>
              <Link className={styles.no_decoration_text} href={'/'}><ul>Home</ul></Link>
              <Link className={styles.no_decoration_text} href={'/catalog'}><ul>Catalog</ul></Link>
              <Link className={styles.no_decoration_text} href={'/about-us'}><ul>About Us</ul></Link>
              <Link className={styles.no_decoration_text} href={'/contact'}><ul>Contact Us</ul></Link>
              {/* <ul>Catalog</ul>
              <ul>Contact</ul>
              <ul>About</ul> */}
            </div>
            <button type='button' onClick={handleCart} className={styles.navbar_cart_btn}>
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
          <Link className={styles.no_decoration_text}  href={'/'}><ul onClick={handleMenuToggle}>Home</ul></Link>
              <Link className={styles.no_decoration_text} href={'/catalog'}><ul onClick={handleMenuToggle}>Catalog</ul></Link>
              <Link className={styles.no_decoration_text} href={'/category/hoodies'}><ul onClick={handleMenuToggle}>Hoodies</ul></Link>
              <Link className={styles.no_decoration_text} href={'/category/crewnecks'}><ul onClick={handleMenuToggle}>Crewnecks</ul></Link>
              {/* <Link className={styles.no_decoration_text} href={'/catalog'}><ul onClick={handleMenuToggle}>Washing Instructions</ul></Link> */}
              <Link className={styles.no_decoration_text} href={'/contact'}><ul onClick={handleMenuToggle}>Contact Us</ul></Link>
              <Link className={styles.no_decoration_text} href={'/about-us'}><ul onClick={handleMenuToggle}>About Us</ul></Link>
          </div>
        </div>
       
        <div className={`${styles.cart_wrapper} ${showCart ? styles.show2 : ''}`} >
      <div className={styles.cart_container}>
        <div
        className={styles.cart_heading}
        onClick={handleCart}>
          <AiOutlineLeft />
          <h3 className={styles.heading}>Your Cart</h3>
          <h3 className={styles.cart_num_items}>({totalQuantities} items)</h3>
        </div>

        {cartItems.length < 1 && (
          <div className={styles.empty_cart}>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <div
                onClick={handleCart}
                className={styles.resume_shop_btn}
              >
                Continue Shopping
              </div>
            </Link>
          </div>
        )}

        <div className={styles.product_container_cart}>
          {cartItems.length >= 1 && cartItems?.map((item) => (
            <div className={styles.product_cart} key={item._id}>
              <Image  
          src={builder.image(item?.image[0]).width(4160).height(4160).url()} className={styles.cart_product_image} alt={item?.name} width={100}
          height={100}  loading="lazy" />
              <div className={styles.item_desc}>
                <div className={styles.cart_head}>
                  <h5 className={styles.cart_name}>{item?.name}</h5>
                  <button
                    type="button"
                    className={styles.remove_item}
                    onClick={() => onRemove(item)}
                  >
                    <FaTrash />
                  </button> 
                </div>
                <div className={styles.cart_size}>{item?.selectedSize}</div>
                <div >
                  <div className={styles.cart_qty_price}>
                  <div className={styles.cart_desc}>
                    <span className={styles.minus} onClick={() => toggleCartItemQuanitity(item._id, item.selectedSize, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <button className={styles.num} onClick="">{item?.quantity}</button>
                    {/* <span className={styles.plus} onClick={() => toggleCartItemQuanitity(item._id, item.selectedSize, 'inc') }><AiOutlinePlus /></span> */}
                    {item?.quantity != item?.stock ? <span className={styles.plus} onClick={() => toggleCartItemQuanitity(item._id, item.selectedSize, 'inc')}><AiOutlinePlus /></span> : <span className={styles.max} ><AiOutlinePlus /></span>}
                  </div>
                  <h4 className={styles.cart_price}>{item?.price} EGP</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className={styles.cart_bottom}>
            <div className={styles.total}>
              <h3>Subtotal:</h3>
              <h3>{totalPrice} EGP</h3>
            </div>
            <div className={styles.btn_container}>
              <Link href="/client-order">
              <div  className={styles.order_btn} >
                Complete Order
              </div>
              </Link>
              
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;