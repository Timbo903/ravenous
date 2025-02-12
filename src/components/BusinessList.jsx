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