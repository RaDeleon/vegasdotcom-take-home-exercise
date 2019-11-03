import React from "react";
import "../css/Description.css";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
  }

  render() {
    const hide = (
      <div className="hide" onClick={() => this.setState({ collapse: true })}>
        <span>HIDE FULL DESCRIPTION</span>
        <i class="fas fa-chevron-circle-up fa-xs" />
      </div>
    );
    const show = (
      <div className="show" onClick={() => this.setState({ collapse: false })}>
        <span>SHOW FULL DESCRIPTION </span>
        <i class="fas fa-chevron-circle-down fa-xs" />
      </div>
    );

    return (
      <div className="descriptionClass">
        <div className={`${this.state.collapse ? "collapse" : "extend"}`}>
          {this.props.description
            ? this.props.description.split("\r\n\r\n").map((paragraph, i) =>
                <p key={Math.random()}>
                  {paragraph}
                </p>
              )
            : null}
        </div>
        {this.state.collapse ? show : hide}
      </div>
    );
  }
}

export default Description;
