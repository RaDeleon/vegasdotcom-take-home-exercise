import React from "react";
import "../css/Location.css";

const Location = props =>
  <div className="locationClass">
    <div>
      <i class="fas fa-map-marker-alt fa-sm" />
      <span className="locationSpan">
        {props.address}
      </span>
    </div>
    <img className="map" src={props.map} />
  </div>;

export default Location;
