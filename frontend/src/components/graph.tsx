import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const PesoChart = ({ hijoId }) => {
  const [pesos, setPesos] = useState([]);

  useEffect(() => {
    const obtenerPesos = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:5000/api/usuarios/hijo/${hijoId}/peso`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setPesos(response.data);
      } catch (error) {
        console.error("Error al obtener pesos:", error);
      }
    };

    obtenerPesos();
  }, [hijoId]);

  const data = {
    labels: pesos.map((peso) => new Date(peso.fecha).toLocaleDateString()), // Formatear la fecha para mejor legibilidad
    datasets: [
      {
        label: "Peso",
        data: pesos.map((peso) => peso.peso),
        fill: false,
        borderColor: "#164BC6",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="md:w-1/2 lg:w-3/4 xl:w-2/3  mt-6">
      <Line data={data} />
    </div>
  );
};

export default PesoChart;
