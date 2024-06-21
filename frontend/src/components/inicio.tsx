"use client";
import CardDataStats from "@/components/ui/cardMedical";

export default function Inicio() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          category="Presion Arterial"
          value="120/80"
          description="Presión arterial en rango normal."
          improved={true}
          worsened={false}
        ></CardDataStats>

        <CardDataStats
          category="Frecuencia Cardiaca"
          value="75"
          description="Frecuencia cardiaca en rango normal."
          improved={true}
          worsened={false}
        ></CardDataStats>

        <CardDataStats
          category="Temperatura"
          value="39.5"
          description="Temperatura en rango alta."
          improved={false}
          worsened={true}
        ></CardDataStats>
        <CardDataStats
          category="Peso"
          value="70"
          description="Peso en rango normal."
          improved={true}
          worsened={false}
        ></CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"></div>
    </section>
  );
}
