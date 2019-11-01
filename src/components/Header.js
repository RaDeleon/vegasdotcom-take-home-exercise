import React from "react";

const Header = props => (
    <div className="header">
        <div className="headerWrapping0">
            <div className="headerWrapping">
                <div className="headerWrapping1">
                    <h1>{props.hotel.name</h1>
                    <div>{div.hotel.rating</div>
                </div>
                <div className="headerWrapping2">
                    <span>Strip</span>
                    <span>{props.hotel.phoneNumber</span>
                    <span>Best Price Guarantee</span>
                </div>
            </div>
            <div className="priceWrapper">
                <span className="price">{props.hotel.price</span>
                <span>Hotel Rooms From</span>
            </div>
        </div>
        <div className="tabs">
            <div>Description</div>
            <div>Details</div>
            <div>Location</div>
        </div>
    </div>
);


export default Header;
