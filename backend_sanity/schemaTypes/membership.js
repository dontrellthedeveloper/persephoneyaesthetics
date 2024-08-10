export default {
    name: 'membership',
    title: 'Membership',
    type: 'document',
    fields: [
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            // hidden: true
        },
        {
            name: 'name',
            title: 'Package Name',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Package Price',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'bookingLink',
            title: 'Package Link',
            type: 'string',
        }
    ],
};