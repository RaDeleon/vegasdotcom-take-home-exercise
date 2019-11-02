import React from "react";

const Header = props =>
  <div className="header">
    <div className="headerWrapping0">
      <div className="headerWrapping">
        <div className="headerWrapping1">
          <h1>
            {props.hotel.name}
          </h1>
          <div>
            {props.hotel.rating}
          </div>
        </div>
        <div className="headerWrapping2">
          <span>Strip</span>
          <span>
            {props.hotel.phoneNumber}
          </span>
          <span>Best Price Guarantee</span>
        </div>
      </div>
      <div className="priceWrapper">
        <span className="price">
          {props.hotel.price}
        </span>
        <span>HOTEL ROOMS FROM</span>
      </div>
    </div>
    <div className="tabs">
      <div>DESCRIPTION</div>
      <div>DETAILS</div>
      <div>LOCATION</div>
    </div>
  </div>;

export default Header;
