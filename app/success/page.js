"use client"
import React, { useEffect } from 'react'
import styles from '../../app/page.module.css';
import { BsBagCheckFill } from 'react-icons/bs';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import MotionLayout from '../components/MotionLayout';

const Success = () => {
  const { setTotalQuantities, setTotalPrice, setCartItems } = useStateContext();

  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  },[setCartItems, setTotalPrice, setTotalQuantities])
  return (
    <MotionLayout>
      <div className={styles.home2}>
      <div className={styles.success_wrapper}>
      <div className={styles.success}>
        <p className={styles.icon}>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className={styles.email_msg}>Our Team will contact you soon.</p>
        <p className={styles.description}>
          If you have any questions, please email
          <a className={styles.email} href="mailto:two4line@gmail.com">
          two4line@gmail.com
          </a>
        </p>
        <Link href={'/catalog'}>
          <div  width="300px" className={styles.success_btn}>
            Continue Shopping
          </div>
        </Link>
      </div> 
    </div> 
      </div>
    </MotionLayout>
  )
}

export default Success