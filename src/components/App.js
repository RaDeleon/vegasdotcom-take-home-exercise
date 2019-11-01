import React from "react";
import axios from "axios";

// => Components <=
import Header from "./Header";
import HotelDescription from "./HotelDescription";
import Details from "./Details";
import Location from "./HotelLocation";
import HotelList from "./HotelList";
import HotelLocation from "./HotelLocation";

// => Stylesheet imports <=
import "../css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "description",
      hotel: {},
      list: []
    };
  }

  render() {
    <div className="app" />;
  }
}

export default App;
