import React from "react";
import MainLayout from "./MainLayout";
import axios from "axios";
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
        "http://localhost:3001/cars.json" + this.props.match.params.id
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
            <div>
              {this.state.offer.picturePath && (
                <img
                  src={"http://localhost:3001" + this.state.offer.picturePath}
                  alt="{this.state.model}"
                />
              )}
            </div>
          );
        })()}
      </MainLayout>
    );
  };
}

export default SingleOfferPage;
