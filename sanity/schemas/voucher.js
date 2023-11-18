export default {
    name: 'voucher',
    title: 'Voucher',
    type: 'document',
    fields: [
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
        name: 'discount',
        title: 'Discount in %',
        type: 'number',
      },
    ]
  } 