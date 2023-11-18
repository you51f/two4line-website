import { sanityFetch } from '@/sanity/lib/sanityFetch';
import React from 'react';
import styles from '../../app/page.module.css';
import { OrderForm } from '../components';

export default async function ClientOrder() {
  const query = `*[_type == "voucher"]`;
  const fetchedVouchers = await sanityFetch(query);

  
  return (
    <div>
      <OrderForm fetchedVouchers={fetchedVouchers} />
    </div>
  );
}