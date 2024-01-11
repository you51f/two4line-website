import React from 'react'
import { Footer, Navbar, Rope, Title } from '../components'
import styles from '../../app/page.module.css';
import MotionLayout from '../components/MotionLayout';

const ExchangeRefundPolicy = () => {
    const categorySlug = "Exchange & refund policy"
  return (
    <MotionLayout>
      <div className={styles.home}> 
    {/* <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head> */}
      <Navbar/> 
      <Rope category={categorySlug}/>
      <Title text={`Exchange & refund policy`}/>
      <div className={styles.policy_main}>
      <div className={styles.policy}>
        <div className={styles.policy_text}>At Two4Line , we strive to ensure your satisfaction with every purchase. If you are not completely happy with your order, we offer the following exchange and refund policy:</div>
        <div className={styles.policy_title}>Returns and Exchanges</div>
        <div className={styles.policy_points}>
            <div>- Timeframe: You may return or exchange your items within 2 days of the original delivery date.</div>
            <div>- All items must be returned in their original condition, unworn, with tags attached, and in their original packaging.</div>
        </div>
        <div className={styles.policy_title}>Refunds policy</div>
        <div className={styles.policy_points}>
            <div>- Refunds will be issued based on the original payment method used for the purchase.l</div>
            <div>-Shipping fees are non-refundable, and return shipping costs are the responsibility of the customer, unless the return is due to a manufacturing defect or an error on our part.</div>
            <div>- Refunds will be processed within 2 business days after we receive the returned items.</div>
        </div>
        <div className={styles.policy_title}>Exchanges</div>
        <div className={styles.policy_points}>
            <div>- If you would like to exchange an item for a different size, color, or style, please contact our customer service team.</div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
    </MotionLayout>
  )
}

export default ExchangeRefundPolicy