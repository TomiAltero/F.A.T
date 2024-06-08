"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPerfilUsuario = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/usuarios/perfil",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setUsuario(response.data);
      } catch (error) {
        setError("Error al obtener el perfil del usuario");
      }
    };

    obtenerPerfilUsuario();
  }, []);

  if (error) {
    return <p style={{ color: "black" }}>Error: {error}</p>;
  }

  if (!usuario) {
    return <p style={{ color: "black" }}>Cargando...</p>;
  }

  return (
    <div>
      <h1 style={{ color: "black" }}>Perfil de Usuario</h1>
      <p style={{ color: "black" }}>Nombre de usuario: {usuario.username}</p>
      <p style={{ color: "black" }}>Email: {usuario.email}</p>
      <p style={{ color: "black" }}>Nombre: {usuario.nombre}</p>
      <p style={{ color: "black" }}>Apellido: {usuario.apellido}</p>
    </div>
  );
}
