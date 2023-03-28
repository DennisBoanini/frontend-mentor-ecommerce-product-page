export interface Product {
    id: 1;
    title: string;
    productName: string;
    description: string;
    price: Money;
    percentageDiscount: number;
    pictures: Picture[];
}

export interface Money {
    amount: number;
    currency: 'EUR' | 'DOLLAR';
}

export interface Picture {
    id: number;
    thumbnail: string;
    image: string;
}
