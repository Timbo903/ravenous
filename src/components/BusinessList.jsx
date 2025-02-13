import React from "react";
import BusinessComponent from "./Business";

const businesses = {
    MarginOtto: {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    },
    PizzaQueen: {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'Pizza Queen Pizzeria',
        address: '1020 Rosewelt street',
        city: 'Manhatan',
        state: 'NY',
        zipCode: '10101',
        category: 'Napolitana',
        rating: 5,
        reviewCount: 99
    },
    PizzaKing: {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'Pizza King Pizzeria',
        address: '1030 Trump street',
        city: 'Manhatan',
        state: 'NY',
        zipCode: '10101',
        category: 'Olive',
        rating: 5,
        reviewCount: 100
    },
    toyStorry: {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'Toy Storry Pizzeria',
        address: '1020 Factory street',
        city: 'Manhatan',
        state: 'NY',
        zipCode: '10101',
        category: 'Cosmo',
        rating: 4,
        reviewCount: 85
    },
    PizzaGuy: {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'Pizza Guy Pizzeria',
        address: '1020 Guy street',
        city: 'Manhatan',
        state: 'NY',
        zipCode: '10101',
        category: 'Guy',
        rating: 5,
        reviewCount: 110
    }
}

function BusinessList() {
    return(
        <div className="business-list">
            {Object.keys(businesses).map((key) => (
                <BusinessComponent key={key} business={businesses[key]}></BusinessComponent>
            ))}
        </div>
    )
}

export default BusinessList;