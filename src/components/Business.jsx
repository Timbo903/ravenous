import React from "react";

function BusinessComponent({business}) {
    return (
        <div className="business">
            <img className="image" src={business.imageSrc} alt={business.name} />
            <h3 className="name">{business.name}</h3>
            <p className="address">{business.address}</p>
            <p className="city">{business.city}</p>
            <p className="state">{business.state}</p>
            <p className="zipcode">{business.zipcode}</p>
            <p className="category">{business.category}</p>
            <p className="rating">{business.rating}</p>
            <p className="review-count">{business.reviewCount}</p>
        </div>
    )
};

export default BusinessComponent;