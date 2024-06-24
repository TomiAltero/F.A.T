"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardDataStats from "@/components/ui/cardMedical";

export default function PanelMedico() {
  const [frecuenciaCardiaca, setFrecuenciaCardiaca] = useState(null);
  const [presionArterial, setPresionArterial] = useState(null);
  const [temperatura, setTemperatura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatosMedicos = async () => {
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

          const [frecuencias, presiones, temperaturas, peso] =
            await Promise.all([
              axios.get(`http://localhost:5000/api/usuarios/hijo/${hijo.id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }),
              axios.get(
                `http://localhost:5000/api/usuarios/hijo/${hijo.id}/presionArterial`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                },
              ),
              axios.get(
                `http://localhost:5000/api/usuarios/hijo/${hijo.id}/temperatura`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                },
              ),

              axios.get(
                `http://localhost:5000/api/usuarios/hijo/${hijo.id}/peso`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                },
              ),
            ]);

          if (frecuencias.data.length > 0) {
            setFrecuenciaCardiaca(frecuencias.data[0]);
          }

          if (presiones.data.length > 0) {
            setPresionArterial(presiones.data[0]);
          }

          if (temperaturas.data.length > 0) {
            setTemperatura(temperaturas.data[0]);
          }
          if (peso.data.length > 0) {
            setPeso(peso.data[0]);
          }
        }
      } catch (error) {
        console.error("Error al obtener datos médicos:", error);
        setError("Error al obtener datos médicos");
      } finally {
        setLoading(false);
      }
    };

    obtenerDatosMedicos();
  }, []);

  if (loading) {
    return <p style={{ color: "black" }}>Cargando datos...</p>;
  }

  if (error) {
    return <p style={{ color: "black" }}>Error: {error}</p>;
  }

  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {presionArterial ? (
          <CardDataStats
            category="Presion Arterial"
            value={presionArterial.sistolica + "/" + presionArterial.diastolica}
            description={presionArterial.descripcion}
            improved={true}
            worsened={false}
          />
        ) : (
          <CardDataStats
            category="Presion Arterial"
            value="N/A"
            description="No hay datos de presión arterial disponibles."
            improved={false}
            worsened={false}
          />
        )}

        {frecuenciaCardiaca ? (
          <CardDataStats
            category="Frecuencia Cardiaca"
            value={frecuenciaCardiaca.frecuencia}
            description={frecuenciaCardiaca.descripcion}
            improved={true}
            worsened={false}
          />
        ) : (
          <CardDataStats
            category="Frecuencia Cardiaca"
            value="N/A"
            description="No hay datos de frecuencia cardíaca disponibles."
            improved={false}
            worsened={false}
          />
        )}

        {temperatura ? (
          <CardDataStats
            category="Temperatura"
            value={temperatura.valor}
            description={temperatura.descripcion}
            improved={temperatura.valor <= 37.5}
            worsened={temperatura.valor > 37.5}
          />
        ) : (
          <CardDataStats
            category="Temperatura"
            value="N/A"
            description="No hay datos de temperatura disponibles."
            improved={false}
            worsened={false}
          />
        )}

        {peso ? (
          <CardDataStats
            category="Peso"
            value={peso.peso}
            description={peso.descripcion}
            improved={true}
            worsened={false}
          />
        ) : (
          <CardDataStats
            category="Peso"
            value="N/A"
            description="No hay datos de peso disponibles."
            improved={false}
            worsened={false}
          />
        )}
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"></div>
    </section>
  );
}
