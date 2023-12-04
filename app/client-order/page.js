import { sanityFetch } from '@/sanity/lib/sanityFetch';
import React from 'react';
import styles from '../../app/page.module.css';
import { OrderForm } from '../components';
import MotionLayout from '../components/MotionLayout';

export default async function ClientOrder() {
  const query = `*[_type == "voucher"]`;
  const fetchedVouchers = await sanityFetch(query);

  
  return (
    <MotionLayout>
      <div className={styles.home2}>
      <OrderForm fetchedVouchers={fetchedVouchers} />
    </div>
    </MotionLayout>
  );
}