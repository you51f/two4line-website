"use client"
import { client } from '@/sanity/lib/client';
import React, { useState } from 'react'
import imageUrlBuilder from "@sanity/image-url";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import { urlForImage } from '@/sanity/lib/image';
import styles from '../../app/page.module.css';
import Image from 'next/image';
import { PiWarningCircleDuotone } from "react-icons/pi";




const Product = ({product}) => {
  const { _id, image, name, details, price,oldprice, category, sizes, selectedSize, stock } = product;
    const builder = imageUrlBuilder(client);
    const [index, setIndex] = useState(0);
    const [sizeIndex, setSizeIndex] = useState(0);
    const [sizeStock, setSizeStock] = useState(sizes[0].stock);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleSizeStock = (selectedIndex) => {
      setSizeIndex(selectedIndex)
      setSizeStock(sizes[selectedIndex].stock)
    }

    var sizeNum = 0
    const handleBuyNow = () => {
      const sentProduct = {...product}
      sentProduct.selectedSize = `${sentProduct.sizes && sentProduct.sizes[sizeIndex]?.size}`
      sentProduct.stock = sizeStock
      sentProduct.price = sentProduct.price + (sentProduct.sizes && sentProduct.sizes[sizeIndex]?.addedprice || 0)

      onAdd(sentProduct, qty);
  
      // setShowCart(true);
    }
    const handleAdd = () => {
      const sentProduct = {...product}
      sentProduct.name = `${sentProduct.name} ${sentProduct.sizes && sentProduct.sizes[sizeIndex]?.size && `- ${sentProduct.sizes[sizeIndex].size}` || ""}`
      sentProduct.price = sentProduct.price + (sentProduct.sizes && sentProduct.sizes[sizeIndex]?.addedprice || 0)

      onAdd(sentProduct, qty);
  
    }

  return (
    <div>
        <div className={styles.product_detail_container}>
        <div>
          <div className={styles.image_container}>
            <Image
             src={builder.image(image[index]).width(4160).height(4160).url()} 
             key={_id}
            className={`${styles.product_detail_image} ${styles.fade_img}`}
            width={515}
            height={515} 
          alt={name}
          loading="lazy"
              />
          </div>
          <div className={styles.small_images_container}>
            {image?.map((item, i) => (
              <Image 
                key={i}
                src={builder.image(item).width(4160).height(4160).url()}
                className={i === index ? `${styles.small_image}  ${styles.selected_image}` : `${styles.small_image}`}
                onMouseEnter={() => setIndex(i)}
                width={121}
            height={121} 
          alt={i}
          loading="lazy"
              />
            ))}
          </div>
        </div>

        
        <div className={styles.product_detail_desc}>
        <div className={styles.product_detail_name}>{name}</div>
        <div className={styles.prices}>{oldprice === 0 ? null : <div className={styles.catalog_price_old}>{oldprice} EGP</div>} <div className={styles.catalog_price}>{price + (sizes && sizes[sizeIndex]?.addedprice || 0)} EGP</div></div>
        <h3 className={styles.size}>Sizes: </h3>
        <div className={styles.size_container}>
        <select
          onChange={(e) => handleSizeStock(e.target.value)}
          className={styles.select_size}
        >
          {
          sizes?.map((item, i) => {
            sizeNum = 1
            return <option key={i} value={i}>{item.size}</option>
          })
        }
        </select>
        </div>
        {(sizeStock <= 4 && sizeStock != 0) ? <div className={styles.quantity}>
        <div  className={styles.no_stock}><PiWarningCircleDuotone/>Only {sizeStock} left</div> 
        </div> : null}
          {/* <h3>Quantity:</h3>   
          <p className={styles.quantity_desc}>
            <span className={styles.minus} onClick={decQty}><AiOutlineMinus /></span>
            <button className={styles.num}>{qty}</button>
            <span className={styles.plus} onClick={incQty}><AiOutlinePlus /></span>
            {qty != item?.stock ? <span className={styles.plus} onClick={incQty}><AiOutlinePlus /></span> : <span className={styles.max} ><AiOutlinePlus /></span>}
          </p> */}
        {/* </div> */}
        {sizeStock === 0 ?
        <div className={styles.no_stock}><PiWarningCircleDuotone/> Sold Out</div> 
        
        :  
        <div className={styles.buttons}>
        <div  className={styles.add_to_cart} onClick={() => handleBuyNow()}>Add to Cart</div>

        </div>
        }
        <div className={styles.product_detail_logo_box}>
          <div className={styles.product_detail_logo}></div>
        </div>
      </div>
     
      </div>
      {/* <style>{`
        
        .size {
          display: ${sizeNum != 0 ? 'flex' : 'none'};
        }
        
      `}</style> */}
    </div>  
  )
}

export default Product