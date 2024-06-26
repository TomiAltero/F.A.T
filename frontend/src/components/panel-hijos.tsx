"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Hijo {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  dni: string;
  imagen: string | null;
}

export function PanelHijo() {
  const [usuario, setUsuario] = useState<any>(null);
  const [hijos, setHijos] = useState<Hijo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedHijoId, setSelectedHijoId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("Error al obtener el perfil del usuario");
      }
    };

    obtenerPerfilUsuario();
  }, []);

  const handleClickVerMas = (hijoId: number) => {
    setSelectedHijoId(hijoId);
  };

  if (isLoading) {
    return <p style={{ color: "black" }}>Cargando...</p>;
  }

  if (error) {
    return <p style={{ color: "black" }}>Error: {error}</p>;
  }

  return (
    <div className="flex flex-wrap">
      {hijos.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No tienes hijos registrados.
        </Typography>
      ) : (
        hijos.map((hijo) => (
          <div key={hijo.id} className="mb-4">
            <Card sx={{ width: 350, borderRadius: 4, margin: 2 }}>
              {hijo.imagen ? (
                <CardMedia
                  component="img"
                  className="h-70"
                  image={hijo.imagen}
                  alt={`${hijo.nombre} ${hijo.apellido}`}
                  style={{ borderRadius: "4px 4px 0 0" }}
                />
              ) : (
                <div
                  style={{
                    height: 200,
                    backgroundColor: "#f3f4f6",
                    borderRadius: "4px 4px 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    No hay foto disponible
                  </Typography>
                </div>
              )}
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
                <Button
                  size="small"
                  onClick={() => handleClickVerMas(hijo.id)}
                  href="/panel-medico"
                >
                  Ver más
                </Button>
              </CardActions>
            </Card>
          </div>
        ))
      )}
    </div>
  );
}
