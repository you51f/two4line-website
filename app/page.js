import { categoriesQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import Image from 'next/image'
import Categories from './components/Categories';
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
      {/* <Categories categoriesBox={categories}/> */}
      <div className={styles.category}>
        {categories?.map((category, index) => {
          return (
            <Category key={category._id} category={category}/> 
          )
        })} 
      </div> 
      <Footer/>
    </div>
  )
}
