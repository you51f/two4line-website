
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { collectionsQuery, productPathsQuery, productQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import imageUrlBuilder from "@sanity/image-url";
import {React } from 'react'
import Image from 'next/image';
import styles from '../../app/page.module.css';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { AnimatedBox, CatalogDesign, CollectionBox, Footer, Navbar, Rope, Title } from '@/app/components';
import Head from 'next/head';
import MotionLayout from '../components/MotionLayout';


export default async function Catalog () {
  const categorySlug = 'catalog'


  const query = `*[_type == "product"]`
  const products = await sanityFetch(query);
  
  // const builder = imageUrlBuilder(client);  

  // console.log(collections);
  
  return (
    <MotionLayout>
      <div className={styles.home}> 
      <Navbar/> 
      {/* <Rope category={categorySlug}/> */}
      <Title text={`Catalog`}/>
      <div className={styles.catalog}>
        {/* <CatalogDesign/> */}
        {products?.map((product, index) => {
          return (
            <AnimatedBox key={product._id} className={styles.animate_box}>
              <CatalogDesign key={product._id} product={product} categorySlug={categorySlug} index={index}/>
            </AnimatedBox>
          )
        })} 
      </div>
      <Footer/>
    </div>
    </MotionLayout>
  )
}

