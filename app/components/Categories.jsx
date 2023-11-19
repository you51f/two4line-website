"use client"
import React, { useEffect, useState } from 'react'
import { AnimatedBox, Category} from './index'
import styles from '../page.module.css';

const Categories = ({categoriesBox}) => {
    const [categories, setCategories] = useState([]);

useEffect(() => {
  setCategories(categoriesBox)
}, []);
  return (
    <div className={styles.category}>
        {categories?.map((category, index) => {
          return (
            <AnimatedBox key={category._id} className={styles.animate_box}>
              <Category category={category}/>
            </AnimatedBox>
          )
        })} 
      </div> 
  )
}

export default Categories