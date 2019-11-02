import React from "react";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
  }

  render() {
    return (
      <div className="detailsClass">
        {this.props.details.map((detail, i) =>
          <div key={i} className="detailText">
            <span>
              {detail.label}
            </span>
            <span>
              {detail.value}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Details;
