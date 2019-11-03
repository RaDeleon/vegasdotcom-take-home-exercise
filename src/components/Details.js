import React from "react";
import "../css/Details.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
  }

  render() {
    const more = (
      <div className="more" onClick={() => this.setState({ collapse: false })}>
        <span>VIEW MORE DETAILS </span>
        <i class="fas fa-chevron-circle-down fa-xs" />
      </div>
    );
    const fewer = (
      <div className="fewer" onClick={() => this.setState({ collapse: true })}>
        <span>VIEW FEWER DETAILS </span>
        <i class="fas fa-chevron-circle-up fa-xs" />
      </div>
    );

    return (
      <div className="detailsClass">
        <div className={`${this.state.collapse ? "collapse" : "extend"}`}>
          {this.props.details.map((detail, i) =>
            <div key={i} className="detailText">
              <span className="label">
                {detail.label}
              </span>
              <span>
                {detail.value}
              </span>
            </div>
          )}
        </div>
        {this.state.collapse ? more : fewer}
      </div>
    );
  }
}

export default Details;
