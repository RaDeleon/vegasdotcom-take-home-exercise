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
      hotel: {}
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get("/api/hotels/venetian").then(result => {
      this.setState({
        hotel: result.data
      });
    });
  }

  render() {
    return (
      <div className="app">
        <span>SEE ALL LAS VEGAS HOTELS</span>
        <div className="appWrapper">
          <div className="leftCol">
            <img
              src={
                this.state.hotel.media ? this.state.hotel.media[0].href : null
              }
            />
          </div>
          <div className="rightCol">
            <Header hotel={this.state.hotel} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
