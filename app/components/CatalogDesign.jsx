"use client"
import React, { useState } from 'react'
import styles from '../page.module.css'
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedBox } from './index';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import { PiWarningCircleDuotone } from "react-icons/pi";

const CatalogDesign = ({product, categorySlug}) => {
    const { _id, image, name,slug, details, price, oldprice, stock, category, sizes, selectedSize } = product;
    const builder = imageUrlBuilder(client); 
    const [sizeIndex, setSizeIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
    var sizeNum = 0
    const handleBuyNow = () => {
      const sentProduct = {...product}
      sentProduct.selectedSize = `${sentProduct.sizes && sentProduct.sizes[sizeIndex]?.size}`
      sentProduct.price = sentProduct.price + (sentProduct.sizes && sentProduct.sizes[sizeIndex]?.addedprice || 0)

      onAdd(sentProduct, qty);
  
      // setShowCart(true);
    }
    return (
      <AnimatedBox className={styles.animate_box}>
        <div className={styles.design}>
          <div className={styles.catalog_box}>
            {image[0] ? (
              // <Link href={''}>
              <Link href={`/category/random/collections/random/product/${slug?.current}`}>
              <Image
            //   src={''} 
              src={builder.image(image && image[0]).width(4160).height(4160).url()} 
              className={styles.catalog_image}
              width={160}
              height={160} 
            // alt={''}
            alt={name}
            loading="lazy"
              />
              </Link>
            ) : null}
            <div className={styles.catalog_name}>{name}</div>
            {oldprice === 0 ? null : <p className={styles.catalog_price_old}>{oldprice} EGP</p>}
            <p className={styles.catalog_price}>{price + (sizes && sizes[sizeIndex]?.addedprice || 0)} EGP</p>
            {/* <select
            placeholder='Sizes'
            className={styles.select_size2}
          >
            
            <option key={''} value={''}>M</option>
            <option key={''} value={''}>L</option>
            <option key={''} value={''}>XL</option>
              
          </select> */}
          {stock === 0 ? null 
          : <select
            onChange={(e) => setSizeIndex(e.target.value)}
            className={styles.select_size2}
          >
            {
            sizes?.map((item, i) => {
              sizeNum = 1
              return <option key={i} value={i}>{item.size}</option>
              // <button key={i} onClick={() => {setSizeIndex(i)}}>{item.size}</button>
            })
          }
          </select>}
          {/* <p className={styles.quantity_desc}> */}
              {/* <span className={styles.minus2} onClick={decQty}><AiOutlineMinus /></span>
              <button className={styles.num}>{qty}</button> */}
              {/* <span className={styles.plus2} onClick={incQty}><AiOutlinePlus /></span> */}
              {/* {qty != stock ? <span className={styles.plus2} onClick={() => toggleCartItemQuanitity(item._id, item.selectedSize, 'inc') }><AiOutlinePlus /></span> : <span className={styles.max} ><AiOutlinePlus /></span>} */}
            {/* </p> */}
            {stock === 0 ? <div  className={styles.no_stock}><PiWarningCircleDuotone/> Sold Out</div>  : <div className={styles.catalog_btn} onClick={() => handleBuyNow()}>Add to Cart</div>}
            {/* <Link href={`/category/${categorySlug}/collections/${collectionSlug}/product/${slug?.current}`} className={styles.design_btn}>Product details</Link> */}
          </div>
      </div>
      </AnimatedBox>
      
    )
  }

export default CatalogDesign