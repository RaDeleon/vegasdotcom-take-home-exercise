import React from "react";
import "../css/HotelList.css";

const HotelList = props =>
  <div className="hotelList">
    {props.hotels.map(hotel =>
      <div key={Math.random()} className="hotelListEntry">
        <span className="hotelName">
          {hotel.name}
        </span>
        <span>
          ${hotel.price.toFixed(2)}
        </span>
      </div>
    )}
  </div>;

export default HotelList;
