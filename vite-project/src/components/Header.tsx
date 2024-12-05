import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <img src="/logo.png" alt="Logo" />
      <h1>Gestión de Horarios</h1>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/seleccion">Seleccionar Horarios</Link>
      </nav>
    </header>
  );
};

export default Header;
