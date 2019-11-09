import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OffersPage from "./OffersPage";
import NotFoundPage from "./NotFoundPage";

/*
Tous le routing est fait dans App pour simplifier la struture de l'application
*/
class App extends React.Component {
  render = () => {
    return (
      <BrowserRouter>
        {/* Le composant switch affiche seulement la premiere Route qui match */}
        <Switch>
          {/* Page Home */}
          <Route path="/" exact={true} render={() => <OffersPage />} />
          {/* Page offer: on utilise un parametre dans l'url : ':id' */}
          {/* <Route
            path="/offer/:id"
            render={routeTools => {
              // on récupere les routeTools passés pas React Router pour récuperer l'object match
              // qui contiens le parametre id
              return <SingleOfferPage match={routeTools.match} />;
            }} */}
          />
          {/* Route sans path (qui match forcement) pour la page 404 */}
          <Route render={() => <NotFoundPage />} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
