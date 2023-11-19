"use client"
import React, { useEffect, useState } from 'react'
import { AnimatedBox, Design } from './index'
import styles from '../page.module.css';

const Products = ({collectionsBox,categorySlug,collectionSlug}) => {
    const [collections, setCollections] = useState([]);

useEffect(() => {
  setCollections(collectionsBox)
}, [collectionsBox]);
  return (
    <div className={collections.length != 1 ? styles.designs : styles.designs_one}>
        {collections?.map((collection, index) => {
          return (
            
              <Design key={collection._id} design={collection} categorySlug={categorySlug} collectionSlug={collectionSlug}/>
        
          )
         })} 
      </div>
  )
}

export default Products