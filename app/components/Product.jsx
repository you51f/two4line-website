"use client"
import { client } from '@/sanity/lib/client';
import React, { useState } from 'react'
import imageUrlBuilder from "@sanity/image-url";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import { urlForImage } from '@/sanity/lib/image';
import styles from '../../app/page.module.css';




const Product = ({product}) => {
  const { image, name, details, price, category, sizes, selectedSize } = product;
    const builder = imageUrlBuilder(client);
    const [index, setIndex] = useState(0);
    const [sizeIndex, setSizeIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    var sizeNum = 0
    const handleBuyNow = () => {
      const sentProduct = {...product}
      sentProduct.selectedSize = `${sentProduct.sizes && sentProduct.sizes[sizeIndex]?.size}`
      sentProduct.price = sentProduct.price + (sentProduct.sizes && sentProduct.sizes[sizeIndex]?.addedprice || 0)

      onAdd(sentProduct, qty);
  
      setShowCart(true);
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
            <img
             src={urlForImage(image[index])} 
             
            className={styles.product_detail_image}
            alt={image[0]?.alt}
              />
          </div>
          <div className={styles.small_images_container}>
            {image?.map((item, i) => (
              <img 
                key={i}
                src={builder.image(item).width(300).height(300).url()}
                className={i === index ? `${styles.small_image}  ${styles.selected_image}` : styles.small_image}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className={styles.product_detail_desc}>
          <div className={styles.product_detail_name}>{name}</div>
          {/* <div>{name} {sizes && sizes[sizeIndex]?.size && `- ${sizes[sizeIndex].size}`}</div> */}
          {/* <h4>Details: </h4>
          <p>{details}</p> */}
          <p className={styles.price}>{price + (sizes && sizes[sizeIndex]?.addedprice || 0)} EGP</p>
          <h3 className={styles.size}>Sizes: </h3>
          <div className={styles.size_container}>
          <select
            onChange={(e) => setSizeIndex(e.target.value)}
            className={styles.select_size}
          >
            {
            sizes?.map((item, i) => {
              sizeNum = 1
              return <option value={i}>{item.size}</option>
              // <button key={i} onClick={() => {setSizeIndex(i)}}>{item.size}</button>
            })
          }
          </select>
          
          {/* {
            sizes?.map((item, i) => {
              sizeNum = 1
              return <button key={i} onClick={() => {setSizeIndex(i)}} className={i === sizeIndex ? 'size-box-selected' : 'size-box-normal'}>{item.size}</button>
            })
          } */}
          </div>
          <div className={styles.quantity}>
            <h3>Quantity:</h3>
            <p className={styles.quantity_desc}>
              <span className={styles.minus} onClick={decQty}><AiOutlineMinus /></span>
              <button className={styles.num}>{qty}</button>
              <span className={styles.plus} onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className={styles.buttons}>
          <div  className={styles.add_to_cart} onClick={() => handleBuyNow()}>Add to Cart</div>

            {/* <button type="button" className={styles.buy_now} onClick={() => handleBuyNow()}>Buy Now</button> */}
          </div>
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