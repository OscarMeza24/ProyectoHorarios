import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import GestionHorariosPage from "./components/GestionHorariosPage";
import SeleccionCarreraNivel from "./components/SeleccionCarreraNivel";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/gestion-horarios" element={<GestionHorariosPage />} />
          <Route path="/seleccion" element={<SeleccionCarreraNivel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
