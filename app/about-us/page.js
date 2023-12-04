import React from 'react'
import { Footer, Navbar, Rope, Title } from '../components'
import styles from '../../app/page.module.css';
import MotionLayout from '../components/MotionLayout';

const AboutUs = () => {
    const categorySlug = "About us"
  return (
    <MotionLayout>
      <div className={styles.home}> 
    {/* <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head> */}
      <Navbar/> 
      <Rope category={categorySlug}/>
      <Title text={`About Two4line`}/>
      
      <Footer/>
    </div>
    </MotionLayout>
  )
}

export default AboutUs