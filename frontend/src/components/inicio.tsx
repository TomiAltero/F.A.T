"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardDataStats from "@/components/ui/cardMedical";

export default function Inicio() {
  const [frecuenciaCardiaca, setFrecuenciaCardiaca] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerFrecuenciaCardiaca = async () => {
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
        const hijos = response.data.hijos;
        if (hijos.length > 0) {
          const hijo = hijos[0];
          const frecuencias = await axios.get(
            `http://localhost:5000/api/usuarios/hijo/${hijo.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );

          if (frecuencias.data.length > 0) {
            const frecuencia = frecuencias.data[0];
            setFrecuenciaCardiaca(frecuencia);
          } else {
            setFrecuenciaCardiaca(null);
          }
        } else {
          setFrecuenciaCardiaca(null);
        }
      } catch (error) {
        console.error("Error al obtener la frecuencia cardíaca:", error);
        setError("Error al obtener la frecuencia cardíaca del hijo");
      }
    };

    obtenerFrecuenciaCardiaca();
  }, []);

  if (error) {
    return <p style={{ color: "black" }}>Error: {error}</p>;
  }

  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          category="Presion Arterial"
          value="120/80"
          description="Presión arterial en rango normal."
          improved={true}
          worsened={false}
        />

        {frecuenciaCardiaca ? (
          <CardDataStats
            category="Frecuencia Cardiaca"
            value={frecuenciaCardiaca.frecuencia}
            description="Frecuencia cardiaca en rango normal."
            improved={true}
            worsened={false}
          />
        ) : (
          <p style={{ color: "black" }}>Cargando frecuencia cardíaca...</p>
        )}

        <CardDataStats
          category="Temperatura"
          value="39.5"
          description="Temperatura en rango alta."
          improved={false}
          worsened={true}
        />

        <CardDataStats
          category="Peso"
          value="70"
          description="Peso en rango normal."
          improved={true}
          worsened={false}
        />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"></div>
    </section>
  );
}
