"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileImage from "../../public/no-photo.webp";
import PortadaImage from "../../public/DownisupCBA.jpg";

const Perfil = () => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPerfilUsuario = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            "http://localhost:5000/api/usuarios/perfil",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          setUsuario(response.data.usuario);
        }
      } catch (error) {
        setError("Error al obtener el perfil del usuario");
      } finally {
        setLoading(false);
      }
    };

    obtenerPerfilUsuario();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mx-auto max-w-242.5 mt-auto">
      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <Image
            src={PortadaImage}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width={970}
            height={260}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
          <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4"></div>
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <Image
                src={ProfileImage}
                width={160}
                height={160}
                style={{
                  width: "auto",
                  height: "auto",
                  borderRadius: "50%",
                }}
                alt="profile"
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {usuario.nombre} {usuario.apellido}
            </h3>
            <p className="font-medium">{usuario.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
