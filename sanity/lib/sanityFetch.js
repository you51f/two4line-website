
import "server-only";
import { client } from "@/app/lib/client";

const DEFAULT_PARAMS = {};
const DEFAULT_TAGS = [];

// export const token = '';
export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export async function sanityFetch(query, params = DEFAULT_PARAMS, tags = DEFAULT_TAGS) {
  // const isDraftMode = "";
  if (!token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    ); 
  }  
  const isDevelopment = process.env.NODE_ENV === "development";
  // const revalidate = 10

  return client
    .withConfig({ useCdn: true })
    .fetch(query, params, { 
      // cache: isDevelopment ? undefined : "force-cache",
      cache: 'no-store',
      ...({
        token: token,
        perspective: "previewDrafts",
      }),
      next: {
        ...({ revalidate: 0 }),
        tags,
      },
    });
  // return 0;
}
