import React, { useState, useEffect } from "react";

const GestionHorarios = () => {
  const [facultad, setFacultad] = useState(localStorage.getItem("facultad"));
  const [jornada, setJornada] = useState(localStorage.getItem("jornada"));
  const [nivel, setNivel] = useState(localStorage.getItem("nivel"));
  const [timeSlots, setTimeSlots] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [profesores, setProfesores] = useState([]);
  const [horario, setHorario] = useState([]);

  const jornadaHorarios = {
    Matutina: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00"],
    Vespertina: [
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
    ],
  };

  const materiasPorNivel = {
    "Ingeniería en Software": {
      1: [
        "Fundamentos de la ingeniería de software",
        "Arquitectura del computador",
        "Algoritmo y lógica de programación",
        "Algebra lineal",
        "Cátedra Alfaro",
      ],
      2: [
        "Ingeniera de requisitos",
        "Sistemas operativos",
        "Programación estructurada",
        "Matemática discreta",
        "Administración empresarial",
      ],
      3: [
        "Modelado orientado a objetos",
        "Redes de computadoras",
        "Programación orientado a objetos",
        "Estructura de datos",
        "Base de datos",
      ],
      4: [
        "Perspectiva de la inteligencia artificial",
        "Administración de servidores",
        "Aplicación para el cliente web",
        "Administración de base de datos distribuidas",
        "Estadística para la ingeniería",
      ],
      5: [
        "Arquitectura del software",
        "Interfaz Humano - Computador",
        "Aplicación para el servidor web",
        "Minería de datos",
        "Modelado ágil de software",
      ],
      6: [
        "Usabilidad y accesibilidad",
        "Ciclo de desarrollo de software seguro",
        "Aplicación móviles nativas",
        "Visualización de datos",
        "Metodología de investigación",
      ],
      7: [
        "Diseño centralizado en el usuario",
        "Auditoria de software",
        "Aplicaciones móviles hibridas",
        "Análisis de negocios",
        "Diseño de integración curricular",
      ],
      8: [
        "Gestión de proyectos de software",
        "Hacking Ético",
        "Integración e implementación de software",
        "Calidad de software",
        "Desarrollo del trabajo de integración curricular",
      ],
    },
    TI: {
      1: [
        "Tecnologías de la Información",
        "Algoritmos y Programación",
        "Matemáticas Discretas",
        "Álgebra Lineal",
        "Metodología de la Investigación",
      ],
      2: [
        "Sistemas Operativos",
        "Estructura de Datos",
        "Estadística y Probabilidad",
        "Aplicación de Sistemas Operativos",
        "Análisis y Diseño de Sistemas de Bases de Datos",
      ],
      3: [
        "Programación Orientada a Objetos",
        "Bases de Datos",
        "Sistemas Digitales",
        "Interfaces Humano Computador",
        "Ingeniería de Requisitos",
      ],
      4: [
        "Gestión de Tecnologías de la Información",
        "Ingeniería de Software I",
        "Ingeniería de Software II",
        "Tecnologías de Entorno de Enrutamiento",
        "Aplicaciones Web I",
      ],
      5: [
        "Inteligencia de Negocios",
        "Aplicaciones Móviles",
        "Desarrollo Web II",
        "Aplicaciones Web II",
        "Auditoría de Seguridad de la Información",
      ],
      6: [
        "Redes de Computadoras",
        "Seguridad de la Información",
        "Integración de Plataformas",
        "Informática Forense",
        "Prácticas Laborales",
      ],
      7: [
        "Trabajo de Titulación",
        "Gestión de Proyectos de Tecnologías de la Información",
        "Sistemas de Gestión",
      ],
      8: [
        "Práctica Profesional",
        "Trabajo de Titulación",
        "Trabajo de Currículum de Diseño",
      ],
    },
  };

  const profesoresPorNivel = {
    "Ingeniería en Software": {
      1: [
        "Ing. Linus Torvalds",
        "Ing. Ada Lovelace",
        "Ing. Bjarne Stroustrup",
        "Ing. James Gosling",
        "Ing. Margaret Hamilton",
      ],
      2: [
        "Ing. Tim Berners-Lee",
        "Ing. Donald Knuth",
        "Ing. Ken Thompson",
        "Ing. Guido van Rossum",
        "Ing. Grace Hopper",
      ],
      3: [
        "Ing. Robert C. Martin",
        "Ing. John McCarthy",
        "Ing. Alan Turing",
        "Ing. Richard Stallman",
        "Ing. John von Neumann",
      ],
      4: [
        "Ing. Brian Kernighan",
        "Ing. Barbara Liskov",
        "Ing. Mark Zuckerberg",
        "Ing. Jeff Dean",
        "Ing. Linus Pauling",
      ],
      5: [
        "Ing. Peter Norvig",
        "Ing. Charles Simonyi",
        "Ing. Brendan Eich",
        "Ing. Tim Sweeney",
        "Ing. Vinton Cerf",
      ],
      6: [
        "Ing. Mark Shuttleworth",
        "Ing. Don Box",
        "Ing. Bill Gates",
        "Ing. Steve Wozniak",
        "Ing. Elon Musk",
      ],
      7: [
        "Ing. Sundar Pichai",
        "Ing. Marissa Mayer",
        "Ing. Sheryl Sandberg",
        "Ing. Satya Nadella",
        "Ing. Jeff Bezos",
      ],
      8: [
        "Ing. Rachael Chong",
        "Ing. Jane Margolis",
        "Ing. Diane Greene",
        "Ing. Susan Wojcicki",
        "Ing. Janet Abbate",
      ],
    },
    TI: {
      /* Mismo contenido */
    },
  };

  // Cargar datos iniciales
  useEffect(() => {
    if (jornada) {
      setTimeSlots(jornadaHorarios[jornada]);
    }

    if (facultad && nivel) {
      setMaterias(materiasPorNivel[facultad][nivel] || []);
      setProfesores(profesoresPorNivel[facultad][nivel] || []);
    }
  }, [setJornada, setFacultad, setNivel]);

  // Agregar un horario
  const agregarHorario = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newHorario = {
      profesor: formData.get("profesor"),
      aula: formData.get("Aula"),
      materia: formData.get("Materia"),
      dia: formData.get("Dia"),
      horaInicio: formData.get("InicioClas"),
      duracion: parseInt(formData.get("Duracion"), 10),
    };

    // Validar conflicto de horario
    const existeConflicto = horario.some(
      (h) =>
        h.aula === newHorario.aula &&
        h.dia === newHorario.dia &&
        h.horaInicio === newHorario.horaInicio
    );

    if (existeConflicto) {
      alert("Este horario ya está ocupado para el aula seleccionada.");
      return;
    }

    setHorario((prev) => [...prev, newHorario]);
    e.target.reset();
  };

  return (
    <div>
      <h1>Gestión de Horarios</h1>
      <div>
        <strong>Facultad:</strong> {facultad} <br />
        <strong>Jornada:</strong> {jornada} <br />
        <strong>Nivel:</strong> {nivel}
      </div>

      <form onSubmit={agregarHorario}>
        <label>Profesor:</label>
        <select name="profesor" required>
          {profesores.map((prof, idx) => (
            <option key={idx} value={prof}>
              {prof}
            </option>
          ))}
        </select>

        <label>Aula:</label>
        <select name="Aula" required>
          <option value="101">101</option>
          <option value="102">102</option>
          {/* Más opciones */}
        </select>

        <label>Materia:</label>
        <select name="Materia" required>
          {materias.map((mat, idx) => (
            <option key={idx} value={mat}>
              {mat}
            </option>
          ))}
        </select>

        <label>Día:</label>
        <select name="Dia" required>
          <option value="Lunes">Lunes</option>
          {/* Más opciones */}
        </select>

        <label>Inicio de Clase:</label>
        <select name="InicioClas" required>
          {timeSlots.map((slot, idx) => (
            <option key={idx} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <label>Duración (horas):</label>
        <select name="Duracion" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button type="submit">Agregar</button>
      </form>

      <h2>Horario Generado</h2>
      <table>
        <thead>
          <tr>
            <th>Día</th>
            <th>Materia</th>
            <th>Profesor</th>
            <th>Aula</th>
            <th>Inicio</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {horario.map((h, idx) => (
            <tr key={idx}>
              <td>{h.dia}</td>
              <td>{h.materia}</td>
              <td>{h.profesor}</td>
              <td>{h.aula}</td>
              <td>{h.horaInicio}</td>
              <td>{h.duracion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GestionHorarios;
