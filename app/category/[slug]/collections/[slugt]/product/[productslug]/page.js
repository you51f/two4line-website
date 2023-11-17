
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { productPathsQuery, productQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import imageUrlBuilder from "@sanity/image-url";
import {React } from 'react'
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Footer, Navbar, Product, Rope } from '@/app/components';


export default async function ProductDetails ({ params }) {
    const categorySlug = params.slug
    const collectionSlug = params.slugt
    const productSlug = params.productslug

    const query = `*[_type == "product" && slug.current == $productSlug][0]`
    const product = await sanityFetch(query, {productSlug});
    // const product = await sanityFetch(productQuery, params);

    // const { image, name, details, price, category } = product;
    // const builder = imageUrlBuilder(client);  
  
  return (
    <div>
      <Navbar/>
      <Rope category={categorySlug} collection={collectionSlug} product={productSlug}/>
      <Product product={product}/>
      <Footer/>
    </div>
  )
}

