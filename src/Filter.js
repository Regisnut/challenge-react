import React, { Component } from "react";
import axios from "axios";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//API TVMAZE pour le Filter
const apiTvmaze = "https://api.tvmaze.com/search/shows";

class Filter extends Component {
  state = {
    title: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        axios

          .get(apiTvmaze, {
            params: {
              q: this.state.title
            }
          })

          .then(response => {
            this.props.updateAdsList(response.data);
          });
      }
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .get(apiTvmaze, {
        params: {
          q: this.state.title
        }
      })
      .then(response => {
        this.props.updateAdsList(response.data);
      });
  };

  render() {
    return (
      <div className="offers-filter-background">
        <div className="offers-filter-container container">
          <form onSubmit={this.handleSubmit}>
            <div className="search-container">
              <Textfield
                style={{
                  borderRadius: 4,
                  width: 300,
                  marginRight: 15,
                  height: 30,
                  fontSize: 28
                }}
                id="title"
                name="title"
                placeholder="Que recherchez-vous ?"
                onChange={this.handleChange}
                value={this.state.title}
              />
              <Button
                size="small"
                variant="outlined"
                color="disabled"
                className="button-search"
                type="submit"
              >
                Rechercher
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Filter;
