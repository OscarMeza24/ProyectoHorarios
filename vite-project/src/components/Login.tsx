import React, { useState, useEffect } from "react";

const Login: React.FC = () => {
  // Definimos los tipos de los estados
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Función que maneja el envío del formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validación de credenciales
    if (username === "admin" && password === "admin123") {
      window.location.href = "index.html"; // Redirigir al panel de administrador
    } else if (
      username.startsWith("estudiante") &&
      password === "estudiante123"
    ) {
      window.location.href = "publicar_horarios.html"; // Redirigir a la página de estudiante
    } else {
      alert("Credenciales inválidas. Inténtalo de nuevo.");
    }
  };

  // Función para manejar los cambios en los campos del formulario
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  // Usamos useEffect para intentar reproducir el video una vez que el componente se haya montado
  useEffect(() => {
    const videoElement = document.getElementById(
      "backgroundVideo"
    ) as HTMLVideoElement;
    if (videoElement) {
      videoElement.play(); // Forzamos la reproducción del video
    }
  }, []);

  return (
    <div className="login-container">
      <video id="backgroundVideo" muted loop>
        <source src="video.mp4" type="video/mp4" />
      </video>

      <header>
        <img src="logo.png" alt="Logo" />
        <h1>Uleam</h1>
      </header>

      <h1>Inicio de Sesión</h1>
      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChangeUsername}
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
          required
        />

        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>
        ¿No tienes cuenta? <a href="register.html">Regístrate aquí</a>
      </p>
    </div>
  );
};

export default Login;
