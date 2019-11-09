import React from "react";
import MainLayout from "./MainLayout";
import { Link } from "react-router-dom";

/*
Page 404
On render le composant MainLayout avec le contenu de la page en children (entre les balises) 
*/
const NotFoundPage = () => {
  return (
    <MainLayout>
      <div>
        <h2>404</h2>
        <p>Page not found !</p>
        <Link to="/">Retourner à la page d'accueil</Link>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
