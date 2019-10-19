import React from "react";
import Header from "./Header";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typographie from "@material-ui/core/Typography";

/* 
MainLayout correspond aux éléments communs a toutes les pages (Header et footer)
Ce composant accepte une props children qui est afficher dans une div
On utilise ce composant dans chaque composant de page (NotFoundPage, OffersPage et SingleOfferPage)
*/
const MainLayout = props => {
  return (
    <div>
      <Header />
      <div className="content">{props.children}</div>

      <AppBar
        position="static"
        style={{ background: "pink", color: "grey", height: 150 }}
      >
        <Toolbar>
          <Typographie variant="title" color="inherit">
            <h2>FOOTER NOBO</h2>
            <div>Copyright © Your Website 2019.</div>
          </Typographie>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainLayout;
