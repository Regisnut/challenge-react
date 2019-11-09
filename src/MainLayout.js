import React from "react";
import Header from "./Header";

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

      <footer>
        <h2>FOOTER GetAround</h2>
        <div>Copyright © Your Website 2019.</div>
      </footer>
    </div>
  );
};

export default MainLayout;
