
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { collectionsQuery, productPathsQuery, productQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import imageUrlBuilder from "@sanity/image-url";
import {React } from 'react'
import Image from 'next/image';
import styles from '../../../app/page.module.css';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { AnimatedBox, CollectionBox, Footer, Navbar, Rope, Title } from '@/app/components';
import Head from 'next/head';


export default async function Collections ({ params }) {
  const categorySlug = params.slug


  const query = `*[_type == "collection" && category->slug.current == $categorySlug]`
  const collections = await sanityFetch(query, {categorySlug});
  
  // const builder = imageUrlBuilder(client);  

  // console.log(collections);
  
  return (
    <div className={styles.home}> 
    {/* <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head> */}
      <Navbar/> 
      <Rope category={categorySlug}/>
      <Title text={`Collections`}/>
      <div className={styles.collection}>
        {collections?.map((collection, index) => {
          return (
            <AnimatedBox key={collection._id} className={styles.animate_box}>
              <CollectionBox key={collection._id} collection={collection} categorySlug={categorySlug}/>
            </AnimatedBox>
          )
        })} 
      </div>
      <Footer/>
    </div>
  )
}

