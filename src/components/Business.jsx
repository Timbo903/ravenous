import React from "react";

function BusinessComponent({business}) {
    return (
        <div className="business">
            <img className="image" src={business.imageSrc} alt={business.name} />
            <h3 className="name">{business.name}</h3>
            <div className="info">
                <div className="info-left">
                    <p className="address">{business.address}</p>
                    <p className="city">{business.city}</p>
                    <p className="state">{business.state} {business.zipCode}</p>
                </div>
                <div className="info-right">
                    <p className="category">{business.category}</p>
                    <p className="rating">{business.rating} stars</p>
                    <p className="review-count">{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    )
};

export default BusinessComponent;