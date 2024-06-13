"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Hijo {
  nombre: string;
  apellido: string;
  edad: number;
  dni: string;
}

export function PanelHijo() {
  const [usuario, setUsuario] = useState<any>(null);
  const [hijos, setHijos] = useState<Hijo[]>([]);
  const [error, setError] = useState<string | null>(null);

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
        setUsuario(response.data.usuario);
        setHijos(response.data.hijos);
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
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {hijos.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No tienes hijos registrados.
        </Typography>
      ) : (
        hijos.map((hijo, index) => (
          <Card key={index} sx={{ width: 350, borderRadius: 4, margin: 2 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hijo.nombre} {hijo.apellido}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Edad: {hijo.edad} años
              </Typography>
              <Typography variant="body2" color="text.secondary">
                DNI: {hijo.dni}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Ver más</Button>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
}
