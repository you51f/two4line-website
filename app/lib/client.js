import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'ul6cobo2',
    dataset: 'production',
    apiVersion: '2023-11-12',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);