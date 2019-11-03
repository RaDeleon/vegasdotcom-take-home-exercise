import React from "react";
import "../css/Header.css";

const convertRating = rating => {
  let result = [];
  for (let i = 0; i < Math.ceil(rating); i++) {
    result.push(1);
  }
  return result;
};

const Header = props =>
  <div className="header">
    <div className="headerWrapping0">
      <div className="headerWrapping">
        <div className="headerWrapping1">
          <h1>
            {props.hotel.name}
          </h1>
          <div className="rating">
            {convertRating(props.hotel.starRating).map(rating =>
              <i key={Math.random()} class="fas fa-star fa-sm" />
            )}
          </div>
        </div>
        <div className="headerWrapping2">
          <div className="strip">
            <i class="fas fa-map-marker-alt fa-xs" />
            <span
              className="headerSpan"
              onClick={props.onTabClick}
              id="location"
            >
              Strip
            </span>
          </div>
          <div>
            <i class="fas fa-phone-alt fa-xs" />
            <span className="headerSpan">
              {props.hotel.phoneNumber}
            </span>
          </div>
          <div>
            <i class="fas fa-thumbs-up fa-xs" />
            <span className="headerSpan">Best Price Guarantee</span>
          </div>
        </div>
      </div>
      <div className="priceWrapper">
        <span className="price">
          ${props.hotel.price}
        </span>
        <span>HOTEL ROOMS FROM</span>
      </div>
    </div>
    <div className="tabs">
      <div
        onClick={props.onTabClick}
        id="description"
        className={`description ${props.view === "description"
          ? "focus"
          : "null"}`}
      >
        DESCRIPTION
      </div>
      <div
        onClick={props.onTabClick}
        id="details"
        className={`details ${props.view === "details" ? "focus" : "null"}`}
      >
        DETAILS
      </div>
      <div
        onClick={props.onTabClick}
        id="location"
        className={`location ${props.view === "location" ? "focus" : "null"}`}
      >
        LOCATION
      </div>
    </div>
  </div>;

export default Header;
