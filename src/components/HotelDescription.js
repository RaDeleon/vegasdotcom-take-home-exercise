import React from "react";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
  }

  render() {
    return (
      <div className="descriptionClass">
        <p>
          {this.props.description}
        </p>
      </div>
    );
  }
}

export default Description;
