import React, { Component } from "react";

export default class Distance extends Component {
  render() {
    return (
      <div className="color--purple">
        Total EUR avec distance choisie :
        {this.props.distance * (this.props.pricePerKm / 100)} (€)
      </div>
    );
  }
}
