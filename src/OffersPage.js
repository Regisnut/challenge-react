import React from "react";
import MainLayout from "./MainLayout";
import axios from "axios";
import { Link } from "react-router-dom";
import Filter from "../src/Filter";
import Distance from "../src/Distance";
import Time from "../src/Time";
/*
List les items (utilisé sur la route "/")
*/
class OffersPage extends React.Component {
  // state pour stocker le résultat de l'API
  state = {
    offersData: null,
    duration: "",
    distance: ""
  };

  //  Fait une requete axios pour récuperer la liste des items
  getOffers = async () => {
    const response = await axios.get("http://localhost:3001/cars.json");
    // on met à jour le state
    this.setState({ offersData: response.data });
  };

  componentDidMount = () => {
    // à l'initialisation du composant on fetch les items
    this.getOffers();
  };

  updateAdsList = offers => {
    this.setState({
      offersData: offers
    });
  };
  updateDuration = item => {
    this.setState({
      duration: item
    });
  };
  updateDistance = item => {
    this.setState({
      distance: item
    });
  };

  render = () => {
    console.log("render");

    return (
      // on render un MainLayout pour avoir le header et footer
      <MainLayout>
        <Filter
          updateAdsList={this.updateAdsList}
          updateDuration={this.updateDuration}
          updateDistance={this.updateDistance}
        />
        {/* Si offersData est null on affiche un loader */}
        {this.state.offersData === null ? (
          <p>Loading...</p>
        ) : (
          this.state.offersData.map(offer => {
            //*****  condition sur le pricePerDay pour offrir un discount******
            let Price = offer.pricePerDay;
            if (this.state.duration && this.state.duration > 1) {
              Price = offer.pricePerDay * 0.9;
            } else if (this.state.duration && this.state.duration > 4) {
              Price = Price * 0.7;
            } else if (this.state.duration && this.state.duration > 10) {
              Price = Price * 0.5;
            }

            return (
              <div key={offer.id} className="container">
                <Link to={"/offer/" + offer.id}>
                  <div>
                    <div className="card">
                      <img
                        src={"http://localhost:3001" + offer.picturePath}
                        alt="offer.model"
                      />
                      <p className="price--km">{offer.pricePerKm} €/Km</p>
                    </div>
                    <h1>
                      {offer.brand} - {offer.model}
                    </h1>

                    <p
                      style={{
                        color: "#390445",
                        fontWeight: "bold",
                        margin: "0",
                        marginTop: "10"
                      }}
                    >
                      {offer.pricePerDay} EUR/JOUR
                    </p>

                    <Time
                      duration={this.state.duration}
                      pricePerDay={offer.pricePerDay}
                    />
                    <Distance
                      distance={this.state.distance}
                      pricePerKm={offer.pricePerKm}
                    />

                    {this.state.duration && this.state.distance && (
                      <div className="color--purple">
                        Total à payer (avec discount) =
                        {this.state.duration * Price +
                          this.state.distance * offer.pricePerKm}
                        (price)
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </MainLayout>
    );
  };
}

export default OffersPage;
