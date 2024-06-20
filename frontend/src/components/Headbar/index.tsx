"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ProfileImage from "../../../public/no-photo.webp";
import { Logout, Setting2, ArrowDown2, ArrowUp2, Profile } from "iconsax-react";
import axios from "axios";

function HeadBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
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
        setLoading(false);
      } catch (error) {
        setError("Error al obtener el perfil del usuario");
        setLoading(false);
      }
    };

    obtenerPerfilUsuario();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUsuario(null);
    setLoading(true);
    setIsDropdownOpen(false);
    window.location.href = "/login";
  };

  const dropdownItems = [
    {
      icon: <Profile size={20} className="text-gray-600" />,
      text: "Mi perfil",
      onClick: () => {
        setIsDropdownOpen(false);
        window.location.href = "/perfil";
      },
    },
    { icon: <Setting2 size={20} className="text-gray-600" />, text: "Ajustes" },
    { divider: true },
    {
      icon: <Logout size={20} className="text-gray-600" />,
      text: "Cerrar sesión",
      onClick: handleLogout,
    },
  ];
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="flex p-4 md:p-6 justify-between items-center">
        <div className="flex items-center gap-2"></div>

        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <Image
              src={ProfileImage}
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-2">
              <p className="text-sm font-semibold text-gray-800">
                {usuario
                  ? `${usuario.nombre} ${usuario.apellido}`
                  : "No tiene cuenta"}
              </p>
              <p className="text-xs font-medium text-gray-500">
                {usuario ? usuario.username : ""}
              </p>
            </div>
            <div className="ml-2">
              {isDropdownOpen ? (
                <ArrowUp2 size={20} className="text-gray-600" />
              ) : (
                <ArrowDown2 size={20} className="text-gray-600" />
              )}
            </div>
          </div>

          {usuario && isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-transform duration-200 ease-in-out"
            >
              <div className="py-2">
                {dropdownItems.map((item, index) =>
                  item.divider ? (
                    <hr key={index} className="my-1 border-gray-200" />
                  ) : (
                    <div
                      key={index}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                      onClick={() => {
                        if (item.onClick) item.onClick();
                      }}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span className="ml-2">{item.text}</span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeadBar;
