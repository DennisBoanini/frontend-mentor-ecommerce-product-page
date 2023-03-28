import { Product } from "./models/product.model";
import imageP1 from './assets/image-product-1.jpg';
import imageP2 from './assets/image-product-2.jpg';
import imageP3 from './assets/image-product-3.jpg';
import imageP4 from './assets/image-product-4.jpg';
import imageP1T from './assets/image-product-1-thumbnail.jpg';
import imageP2T from './assets/image-product-2-thumbnail.jpg';
import imageP3T from './assets/image-product-3-thumbnail.jpg';
import imageP4T from './assets/image-product-4-thumbnail.jpg';

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
            "thumbnail": imageP1T,
            "image": imageP1
        },
        {
            "id": 2,
            "thumbnail": imageP2T,
            "image": imageP2
        },
        {
            "id": 3,
            "thumbnail": imageP3T,
            "image": imageP3
        },
        {
            "id": 4,
            "thumbnail": imageP4T,
            "image": imageP4
        }
    ]
};

export function getCurrencyLocale(amount: number, currency: 'EUR' | 'DOLLAR') {
    if (currency === 'EUR') {
        return `${amount.toFixed(2)} €`;
    }

    return `$${amount.toFixed(2)}`;
}