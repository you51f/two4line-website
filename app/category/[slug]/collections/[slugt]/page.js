import React from 'react'
import { AnimatedBox, CollectionBox, Design, Footer, Navbar, Product, Rope, Title } from '@/app/components';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import imageUrlBuilder from "@sanity/image-url";
import styles from '../../../../../app/page.module.css';


export default async function CollectionList ({params})  {

  const categorySlug = params.slug
  const collectionSlug = params.slugt

  const query = `*[_type == "product" && collection->slug.current == $collectionSlug]`
  const collections = await sanityFetch(query, {collectionSlug});
  
  // const builder = imageUrlBuilder(client);  

  // console.log(params);

  return (
    <div className={styles.home}> 
      <Navbar/> 
      <Rope category={categorySlug} collection={collectionSlug}/>
      <Title text={`Collections List`}/>
      <div className={collections.length != 1 ?styles.designs : styles.designs_one}>
        {collections?.map((collection, index) => {
          return (
            <AnimatedBox key={collection._id}  className={styles.animate_box}>
              <Design key={collection._id} design={collection} categorySlug={categorySlug} collectionSlug={collectionSlug}/>
            </AnimatedBox>
          )
         })} 
      </div>
      <Footer/>
    </div>
  )
}