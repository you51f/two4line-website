import sanityClient from '@sanity/client';

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = sanityClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
  