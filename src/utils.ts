import { Product } from "./models/product.model";

export const navbarItems = [
    {
        id: 1,
        name: 'Collections',
        path: '/collections'
    },
    {
        id: 2,
        name: 'Men',
        path: '/men'
    },
    {
        id: 3,
        name: 'Women',
        path: '/women'
    },
    {
        id: 4,
        name: 'About',
        path: '/about'
    },
    {
        id: 5,
        name: 'Contact',
        path: '/contact'
    },
];

export const product: Product = {
    "id": 1,
    "title": "Sneaker company",
    "productName": "Fall Limited Edition Sneakers",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    "price": {
        "amount": 125.00,
        "currency": "DOLLAR"
    },
    "percentageDiscount": 50,
    "pictures": [
        {
            "id": 1,
            "thumbnail": "image-product-1-thumbnail.jpg",
            "image": "image-product-1.jpg"
        },
        {
            "id": 2,
            "thumbnail": "image-product-2-thumbnail.jpg",
            "image": "image-product-2.jpg"
        },
        {
            "id": 3,
            "thumbnail": "image-product-3-thumbnail.jpg",
            "image": "image-product-3.jpg"
        },
        {
            "id": 4,
            "thumbnail": "image-product-4-thumbnail.jpg",
            "image": "image-product-4.jpg"
        }
    ]
};

export function getCurrencyLocale(amount: number, currency: 'EUR' | 'DOLLAR') {
    if (currency === 'EUR') {
        return `${amount.toFixed(2)} €`;
    }

    return `$${amount.toFixed(2)}`;
}