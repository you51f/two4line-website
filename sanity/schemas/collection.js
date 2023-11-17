export default {
    name: 'collection',
    title: 'Collection',
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
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }], // Reference to the Category schema
        options: {
          // Use the 'name' field from the referenced Category schema as the display value
          list: [{ title: 'Slug', value: 'slug' }],
        },
      },
      // Other fields for the product schema
    ]
  } 