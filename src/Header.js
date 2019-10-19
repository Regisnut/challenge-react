import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typographie from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";

const HomeIcon = props => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

class Header extends React.Component {
  render = () => {
    return (
      <AppBar
        position="static"
        style={{ background: "pink", color: "grey", height: 100 }}
        alignItems="flex-start"
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Link to="/">
              <HomeIcon color="inherit" fontSize="large"></HomeIcon>
            </Link>
          </IconButton>
          <Typographie variant="h7" color="inherit">
            <h1>
              {/* Lien vers la page home */}
              <Link to="/">Home</Link>
            </h1>
          </Typographie>
        </Toolbar>
      </AppBar>
    );
  };
}

export default Header;
