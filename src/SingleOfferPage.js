import React from "react";
import MainLayout from "./MainLayout";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
/*
La page SingleOffer correspond à la route /offer/:id
On récupere dans le match (passé par React Router), l'ID de l'offre qui essaie d'afficher
Puis on appelle l'API pour récuperer cette offre
*/

class SingleOfferPage extends React.Component {
  state = {
    loading: true,
    offer: null,
    // en cas d'erreur (ID invalide par exemple) on garde l'erreur dans le state pour l'afficher
    error: null
  };

  getOffer = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await axios.get(
        "http://api.tvmaze.com/shows/" + this.props.match.params.id
      );
      this.setState({ offer: response.data, loading: false });
    } catch (error) {
      this.setState({ error: error, loading: false });
    }
  };

  componentDidMount = () => {
    this.getOffer();
  };

  render = () => {
    return (
      <MainLayout>
        {(() => {
          if (this.state.loading) {
            return <p>Loading...</p>;
          }
          if (this.state.error !== null) {
            return <p>{this.state.error + ""}</p>;
          }
          if (this.state.offer === null) {
            return <p>Whaaat ?</p>;
          }
          return (
            <Card style={{ marginBottom: 10, padding: 10 }}>
              {this.state.offer.image && (
                <CardMedia
                  style={{
                    height: 200,
                    width: 200,
                    paddingTop: "56,25%",
                    marginLeft: 16
                  }}
                  image={this.state.offer.image.medium}
                  title={this.state.offer.name}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  <Box letterSpacing={10} m={1} fontFamily="fontFamily">
                    {this.state.offer.name}
                  </Box>
                </Typography>
                <Typography variant="body1" component="p">
                  {this.state.offer.summary && (
                    <p> {this.state.offer.summary}</p>
                  )}
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                  {this.state.offer.type && (
                    <p>Type : {this.state.offer.type}</p>
                  )}
                  {this.state.offer.language && (
                    <p>Language : {this.state.offer.language}</p>
                  )}
                  {!this.state.offer.genres && (
                    <p>Genres : {this.state.offer.genres}</p>
                  )}

                  {this.state.offer.status && (
                    <p>Status : {this.state.offer.status}</p>
                  )}
                  {this.state.offer.runtime && (
                    <p>Runtime : {this.state.offer.runtime}</p>
                  )}
                  {this.state.offer.premiered && (
                    <p>Premiered : {this.state.offer.premiered}</p>
                  )}
                  {this.state.offer.officialSite && (
                    <p>
                      officialSite :{" "}
                      <Link
                        href={this.state.offer.officialSite}
                        target="_blank"
                        rel="noopener"
                      >
                        {this.state.offer.officialSite}
                      </Link>
                    </p>
                  )}

                  {this.state.offer.schedule.time && (
                    <p>
                      Schedule : time - {this.state.offer.schedule.time} & days
                      - {this.state.offer.schedule.days}
                    </p>
                  )}
                  {this.state.offer.rating.average && (
                    <p>Average : {this.state.offer.rating.average}</p>
                  )}
                  {this.state.offer.rating.average && (
                    <p>Weight : {this.state.offer.weight}</p>
                  )}
                  {/* Le pays dans l'api de tvmaze se retrouve soit dans network soit dans webChannel */}
                  {this.state.offer.network
                    ? this.state.offer.network.country.name && (
                        <p>Country : {this.state.offer.network.country.name}</p>
                      )
                    : this.state.offer.webChannel &&
                      this.state.offer.webChannel.country && (
                        <p>
                          Country : {this.state.offer.webChannel.country.name}
                        </p>
                      )}
                </Typography>
              </CardContent>
            </Card>
          );
        })()}
      </MainLayout>
    );
  };
}

export default SingleOfferPage;
