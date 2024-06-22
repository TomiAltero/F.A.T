"use client";
import Image from "next/image";
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

  const nombreCompleto = `${usuario.nombre} ${usuario.apellido}`;

  return (
    <div className="mx-auto max-w-3xl mt-10 ">
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
          <div className="mt-6 space-y-6 text-center items-center">
            <div>
              <label className="block text-base font-medium text-black">
                Nombre Completo
              </label>
              <input
                type="text"
                value={nombreCompleto}
                disabled
                className="mt-1 block w-full rounded-md border-0 border-b-2 border-blue-800 focus:border-indigo-500 focus:ring-indigo-500 text-black text-base"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-black">
                Nombre de usuario
              </label>
              <input
                type="text"
                value={usuario.username}
                disabled
                className="mt-1 block w-full rounded-md border-0 border-b-2 border-blue-800 focus:border-indigo-500 focus:ring-indigo-500 text-black text-base"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-black">
                Correo electrónico
              </label>
              <input
                type="email"
                value={usuario.email}
                disabled
                className="mt-1 block w-full rounded-md border-0 border-b-2 border-blue-800 focus:border-indigo-500 focus:ring-indigo-500 text-black text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
