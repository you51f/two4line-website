import { categoriesQuery, imageSlidersQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import Image from 'next/image'
import Categories from './components/Categories';
import { AnimatedBox, Banner, Category, Title, Footer , Navbar} from './components/index'
import MotionLayout from './components/MotionLayout';
import styles from './page.module.css'

export default async function Home() {
  const categories = await sanityFetch(categoriesQuery); 
  const sliderImages = await sanityFetch(imageSlidersQuery); 
  // console.log(categories);
  return (
    <MotionLayout>
       <div className={styles.home}>
      <Navbar/>
      <Banner sliderImages={sliderImages}/>
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
    </MotionLayout>
  )
}
