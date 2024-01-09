import { sanityFetch } from '@/sanity/lib/sanityFetch';
import React from 'react';
import styles from '../../app/page.module.css';
import { Footer, Navbar, ContactForm, Title } from '../components';
import MotionLayout from '../components/MotionLayout';

export default async function Contact() {

  
  return (
    <MotionLayout>
      <div className={styles.home}>
        <Navbar/>
        <Title text={`Contact Us`}/>
      <ContactForm />
      <Footer/>
    </div>
    </MotionLayout>
  );
}