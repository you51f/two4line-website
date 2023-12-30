"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa6';
// import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlForImage } from '@/sanity/lib/image';
import styles from '../page.module.css';
import Image from 'next/image';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';
import { useEffect } from 'react';
// import getStripe from '../lib/getStripe';
// import { urlFor } from '../lib/client'; 
// import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef(null);
  const builder = imageUrlBuilder(client);
  const { showCart, totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  
  const handleCheckout = async () => {
    
  }

  useEffect(() => {
    if (cartRef.current) {
      cartRef.current.classList.add(styles.show2); // Add the show2 class to trigger the animation
    }
  }, []);

  return (
    <div className={styles.cart_wrapper} ref={cartRef}>
      <div className={`${styles.cart_container} ${cartRef.current ? styles.show2 : ''}`}>
        <div
        className={styles.cart_heading}
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <h3 className={styles.heading}>Your Cart</h3>
          <h3 className={styles.cart_num_items}>({totalQuantities} items)</h3>
        </div>

        {cartItems.length < 1 && (
          <div className={styles.empty_cart}>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link className={styles.success_link} href={'/'}>
              <div
                onClick={() => setShowCart(false)}
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
          src={builder.image(item?.image[0]).width(513).height(515).url()} className={styles.cart_product_image} alt={item?.name} width={100}
          height={90}  loading="lazy" />
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
                    <span className={styles.plus} onClick={() => toggleCartItemQuanitity(item._id, item.selectedSize, 'inc') }><AiOutlinePlus /></span>
                  </div>
                  <h4 className={styles.cart_price}>${item?.price}</h4>
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
              <h3>${totalPrice}</h3>
            </div>
            <div className={styles.btn_container}>
              <Link className={styles.success_link} href={'/client-order'}>
              <div  className={styles.order_btn} >
                Complete Order
              </div>
              </Link>
              
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart