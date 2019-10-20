import React from "react";
import MainLayout from "./MainLayout";
import axios from "axios";
import { Link } from "react-router-dom";
import Empty from "../src/assets/empty.jpg";
import Filter from "../src/Filter";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
/*
List les items (utilisé sur la route "/")
*/
class OffersPage extends React.Component {
  // state pour stocker le résultat de l'API
  state = {
    offersData: null
  };

  // Fait une requete axios pour récuperer la liste des items
/*
  getOffers = async () => {
    const response = await axios.get(
      "https://api.tvmaze.com/search/shows?q=test"
    );
    // on met à jour le state
    this.setState({ offersData: response.data });
  };
  componentDidMount = () => {
    // à l'initialisation du composant on fetch les items
    this.getOffers();
  };
*/
  updateAdsList = offers => {
    this.setState({
      offersData: offers
    });
  };

  render = () => {
    return (
      // on render un MainLayout pour avoir le header et footer
      <MainLayout>
      <Filter updateAdsList={this.updateAdsList} />
        {/* Si offersData est null on affiche un loader */}
        {this.state.offersData === null ? (
          <p>Make your selection...</p>
        ) : (
          <div className="offer-filter-page">
            
            {this.state.offersData.map(offer => {
              const picture =
                offer.show.image && offer.show.image.medium
                  ? offer.show.image.medium
                  : Empty;

              return (
                <Card style={{ marginBottom: 10, padding: 10 }}>
                  <Link to={"/offer/" + offer.show.id}>
                    <CardContent>
                      <Typography variant="h4" gutterBottom component="h2">
                        {offer.show.name}
                      </Typography>
                    </CardContent>
                    <CardMedia
                      style={{ height: 200, width: 200, paddingTop: "56,25%" }}
                      image={picture}
                      title={offer.show.name}
                    />
                  </Link>
                </Card>
              );
            })}
          </div>
        )}
      </MainLayout>
    );
  };
}

export default OffersPage;
