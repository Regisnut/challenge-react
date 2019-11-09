import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>
          {/* Lien vers la page home */}
          <Link to="/">GetAround</Link>
        </h1>
        <div>
          <li>Business</li>
          <li>Se connecter</li>
          <li>Des Questions</li>
        </div>
      </nav>
    </header>
  );
};

export default Header;
