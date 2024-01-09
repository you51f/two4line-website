
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { productPathsQuery, productQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import imageUrlBuilder from "@sanity/image-url";
import {React } from 'react'
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Footer, Navbar, Product, Rope } from '@/app/components';
import MotionLayout from '@/app/components/MotionLayout';


export default async function ProductDetails ({ params }) {
    const categorySlug = params.slug
    const collectionSlug = params.slugt
    const productSlug = params.productslug

    const query = `*[_type == "product" && slug.current == $productSlug][0]`
    const product = await sanityFetch(query, {productSlug});

    // const product = {
    //   _id: '123456789',
    //   image: ['', ''],
    //   name: "Product X",
    //   details: '',
    //   price: 120,
    //   category: '',
    //   sizes: [{size: 'M'}, {size: 'L'}],
    // }

    // const product = await sanityFetch(productQuery, params);

    // const { image, name, details, price, category } = product;
    // const builder = imageUrlBuilder(client);  
  
  return (
    <MotionLayout>
      <div>
      <Navbar/>
      <Rope category={categorySlug} collection={collectionSlug} product={productSlug}/>
      <Product product={product}/>
      <Footer/>
    </div>
    </MotionLayout>
  )
}

