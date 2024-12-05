import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas"; // Si tienes un archivo CSS para este componente

const GestionHorariosPage: React.FC = () => {
  const [profesores, setProfesores] = useState<string[]>([]); // Lista de profesores
  const [materias, setMaterias] = useState<string[]>([]); // Lista de materias
  const [horarios, setHorarios] = useState<any[]>([]); // Horarios generados

  useEffect(() => {
    // Aquí puedes cargar la lista de profesores y materias desde una API o base de datos
    setProfesores(["Profesor 1", "Profesor 2", "Profesor 3"]);
    setMaterias(["Materia 1", "Materia 2", "Materia 3"]);
  }, []);

  const agregarHorario = (evento: React.FormEvent) => {
    evento.preventDefault();

    // Aquí puedes agregar la lógica para agregar un horario
    const nuevoHorario = {
      dia: "Lunes",
      hora: "8:00",
      materia: "Materia 1",
      profesor: "Profesor 1",
    };

    setHorarios([...horarios, nuevoHorario]);
  };

  const guardarComoImagen = () => {
    const tabla = document.getElementById("TablaHorarios");

    if (tabla) {
      html2canvas(tabla).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Crear un enlace temporal para la descarga
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "horario.png"; // Nombre del archivo a descargar
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Mostrar mensaje de éxito
        alert("Horario guardado como imagen.");
      });
    }
  };

  return (
    <div>
      <h1>Gestión de Horarios</h1>

      <form onSubmit={agregarHorario}>
        <label htmlFor="profesor">Profesor:</label>
        <select id="profesor" name="profesor" required>
          {profesores.map((profesor, index) => (
            <option key={index} value={profesor}>
              {profesor}
            </option>
          ))}
        </select>

        <label htmlFor="materia">Materia:</label>
        <select id="materia" name="materia" required>
          {materias.map((materia, index) => (
            <option key={index} value={materia}>
              {materia}
            </option>
          ))}
        </select>

        <button type="submit">Agregar Horario</button>
      </form>

      <h2>Horario Generado</h2>
      <div className="CuadrillaHorario">
        <table id="TablaHorarios">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
            </tr>
          </thead>
          <tbody>
            {horarios.map((horario, index) => (
              <tr key={index}>
                <td>{horario.hora}</td>
                <td>{horario.dia === "Lunes" ? horario.materia : ""}</td>
                <td>{horario.dia === "Martes" ? horario.materia : ""}</td>
                <td>{horario.dia === "Miércoles" ? horario.materia : ""}</td>
                <td>{horario.dia === "Jueves" ? horario.materia : ""}</td>
                <td>{horario.dia === "Viernes" ? horario.materia : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={guardarComoImagen}>Guardar Horario como Imagen</button>
    </div>
  );
};

export default GestionHorariosPage;
