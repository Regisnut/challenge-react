import React from "react";
import MainLayout from "./MainLayout";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";

/*
Page 404
On render le composant MainLayout avec le contenu de la page en children (entre les balises) 
*/
const NotFoundPage = () => {
  return (
    <MainLayout>
      <Card>
        <CardContent>
          <Typography variant="h2" component="h2">
            404
          </Typography>
          <Typography variant="h5" component="h2">
            Page not found !
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" variant="contained" startIcon={<HomeIcon />}>
            <Link to="/">Retourner à la page d'accueil</Link>
          </Button>
        </CardActions>
      </Card>
    </MainLayout>
  );
};

export default NotFoundPage;
