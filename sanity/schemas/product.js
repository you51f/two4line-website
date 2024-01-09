export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      {
        name: 'collection',
        title: 'Collection name',
        type: 'reference',
        to: [{ type: 'collection' }], // Reference to the Category schema
        options: {
          // Use the 'name' field from the referenced Category schema as the display value
          list: [{ title: 'Slug', value: 'slug' }],
        },
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      },
      { 
        name: 'sizes',
        title: 'Product Sizes',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'size',
                title: 'Size',
                type: 'string'
              },
              {
                name: 'addedprice',
                title: 'Added price',
                type: 'number'
              }
            ]
          }
        ]
      },
      { 
        name: 'stock',
        title: 'Stock',
        type: 'number',
      },
      { 
        name: 'oldprice',
        title: 'Old price',
        type: 'number',
      },
    ]
  } 