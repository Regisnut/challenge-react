import React, { Component } from "react";

export default class Time extends Component {
  render() {
    return (
      <div className="color--purple">
        Total EUR avec temps choisi :
        {this.props.pricePerDay * this.props.duration} (price)
      </div>
    );
  }
}
