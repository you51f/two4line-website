"use client"
import React, { useEffect, useState } from 'react'
import { AnimatedBox, CollectionBox} from './index'
import styles from '../page.module.css';

const Collections = ({collectionsBox, categorySlug}) => {
    const [collections, setCollections] = useState([]);

useEffect(() => {
  setCollections(collectionsBox)
}, []);
  return (
    <div className={styles.collection}>
        {collections?.map((collection, index) => {
          return (
            
              <CollectionBox key={collection._id} collection={collection} categorySlug={categorySlug} index={index}/>
            
          )
        })} 
      </div>
  )
}

export default Collections