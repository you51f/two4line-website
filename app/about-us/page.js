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
      <Title text={`Our Story`}/>
      <div className={styles.policy_main}>
      <div className={styles.policy}>
        <div className={styles.policy_text}>Two4Line is a contemporary clothing brand based in Egypt, but Founded and driven by a Sudanese team of youth, a team who really believes in the power of fashion , and that fashion does not only revolve around how you look, but mostly around how you feel and how can a piece of clothes make you face the world differently. we acknowledge the fact that through fashion you can embrace your true-selves; not restrained by any societal expectations or societal norms. And that is our mission; to continuously evolve and push boundaries while remaining true to our core values of authenticity, creativity and social responsibilities.</div>
      </div>
      </div>
      <Footer/>
    </div>
    </MotionLayout>
  )
}

export default AboutUs