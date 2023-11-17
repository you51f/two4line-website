import { categoriesQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import Image from 'next/image'
import { AnimatedBox, Banner, Category, Title, Footer , Navbar} from './components/index'
import styles from './page.module.css'

export default async function Home() {
  const categories = await sanityFetch(categoriesQuery); 
  // console.log(categories);
  return (
    <div className={styles.home}>
      <Navbar/>
      <Banner/>
      <Title text={'Categories'}/>
      <div className={styles.category}>
        {categories?.map((category, index) => {
          return (
            <AnimatedBox key={category._id} className={styles.animate_box}>
              <Category key={category._id} category={category}/>
            </AnimatedBox>
          )
        })} 
      </div> 
      <Footer/>
    </div>
  )
}
