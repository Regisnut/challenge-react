import React, { Component } from "react";
import axios from "axios";

//API pour le Filter
const api = "http://localhost:3001/cars.json";

class Filter extends Component {
  state = {
    duration: "",
    distance: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        axios
          .get(api, {
            params: {
              duration: this.state.duration,
              distance: this.state.distance
            }
          })

          .then(response => {
            this.props.updateAdsList(response.data);
            //on met à  jour le state des offres ds le composant OffersPage
            this.props.updateDuration(this.state.duration);
            this.props.updateDistance(this.state.distance);
          });
      }
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .get(api, {
        params: {
          duration: this.state.duration,
          distance: this.state.distance
        }
      })
      .then(response => {
        this.props.updateAdsList(response.data);
      });
  };

  render() {
    return (
      <div className="offers-filter-background">
        <div className="offers-filter-container">
          <form onSubmit={this.handleSubmit}>
            <div className="search-container">
              <label>durée (j)</label>
              <input
                className="input-search duration"
                id="duration"
                type="number"
                name="duration"
                placeholder="durée ?"
                onChange={this.handleChange}
                value={this.state.duration}
              />
              <label>distance (km)</label>
              <input
                className="input-search distance"
                id="distance"
                type="number"
                name="distance"
                placeholder="distance ?"
                onChange={this.handleChange}
                value={this.state.distance}
              />
              <button className="button-search" type="submit">
                Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Filter;
