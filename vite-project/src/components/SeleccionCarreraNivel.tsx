import React, { useState } from "react";

const SeleccionCarreraNivel: React.FC = () => {
  const [facultad, setFacultad] = useState<string>("Ingeniería en Software");
  const [jornada, setJornada] = useState<string>("Matutina");
  const [nivel, setNivel] = useState<string>("1");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Guardamos los valores seleccionados en localStorage
    localStorage.setItem("facultad", facultad);
    localStorage.setItem("jornada", jornada);
    localStorage.setItem("nivel", nivel);

    // Redirigimos al usuario a la página de gestión de horarios
    window.location.href = "gestion_horarios.html";
  };

  const handleRegresar = () => {
    // Redirigimos al login
    window.location.href = "login.html";
  };

  return (
    <div className="seleccion-container">
      <video id="backgroundVideo" muted loop>
        <source src="video.mp4" type="video/mp4" />
      </video>

      <header>
        <img src="logo.png" alt="Logo" />
        <h1>Uleam</h1>
      </header>

      <h1>Seleccione Carrera y Nivel</h1>

      <form id="SeleccionCarreraNivelJornada" onSubmit={handleSubmit}>
        <label htmlFor="facultad">Carrera:</label>
        <select
          id="facultad"
          name="facultad"
          value={facultad}
          onChange={(e) => setFacultad(e.target.value)}
          required
        >
          <option value="Ingeniería en Software">Ingeniería en Software</option>
          <option value="TI">TI</option>
        </select>

        <label htmlFor="jornada">Jornada:</label>
        <select
          id="jornada"
          name="jornada"
          value={jornada}
          onChange={(e) => setJornada(e.target.value)}
          required
        >
          <option value="Matutina">Matutina</option>
          <option value="Vespertina">Vespertina</option>
        </select>

        <label htmlFor="nivel">Nivel:</label>
        <select
          id="nivel"
          name="nivel"
          value={nivel}
          onChange={(e) => setNivel(e.target.value)}
          required
        >
          <option value="1">Nivel 1</option>
          <option value="2">Nivel 2</option>
          <option value="3">Nivel 3</option>
          <option value="4">Nivel 4</option>
          <option value="5">Nivel 5</option>
          <option value="6">Nivel 6</option>
          <option value="7">Nivel 7</option>
          <option value="8">Nivel 8</option>
        </select>

        <button type="submit">Siguiente</button>
        <button type="button" onClick={handleRegresar}>
          Regresar
        </button>
      </form>
    </div>
  );
};

export default SeleccionCarreraNivel;
