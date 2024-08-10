export default {
    name: 'services',
    title: 'Services',
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
            title: 'Service Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'imageUrl',
            title: 'Service Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'bookingLink',
            title: 'Booking Link',
            type: 'string',
        },
        {
            name: 'priceName1',
            title: 'Service 1 Name',
            type: 'string',
        },
        {
            name: 'price1',
            title: 'Service 1 Price',
            type: 'string',
        },
        {
            name: 'priceName2',
            title: 'Service 2 Name',
            type: 'string',
        },
        {
            name: 'price2',
            title: 'Service 2 Price',
            type: 'string',
        },
        {
            name: 'priceName3',
            title: 'Service 3 Name',
            type: 'string',
        },
        {
            name: 'price3',
            title: 'Service 3 Price',
            type: 'string',
        },
        {
            name: 'priceName4',
            title: 'Service 4 Name',
            type: 'string',
        },
        {
            name: 'price4',
            title: 'Service 4 Price',
            type: 'string',
        },
        {
            name: 'priceName5',
            title: 'Service 5 Name',
            type: 'string',
        },
        {
            name: 'price5',
            title: 'Service 5 Price',
            type: 'string',
        },
        {
            name: 'priceName6',
            title: 'Service 6 Name',
            type: 'string',
        },
        {
            name: 'price6',
            title: 'Service 6 Price',
            type: 'string',
        },
        {
            name: 'priceName7',
            title: 'Service 7 Name',
            type: 'string',
        },
        {
            name: 'price7',
            title: 'Service 7 Price',
            type: 'string',
        },
        {
            name: 'priceName8',
            title: 'Service 8 Name',
            type: 'string',
        },
        {
            name: 'price8',
            title: 'Service 8 Price',
            type: 'string',
        },
        {
            name: 'priceName9',
            title: 'Service 9 Name',
            type: 'string',
        },
        {
            name: 'price9',
            title: 'Service 9 Price',
            type: 'string',
        },
        {
            name: 'priceName10',
            title: 'Service 10 Name',
            type: 'string',
        },
        {
            name: 'price10',
            title: 'Service 10 Price',
            type: 'string',
        },
    ],
};