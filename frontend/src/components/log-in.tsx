"use client";

import { useState } from "react";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";

export function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", isSuccess: false });

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/usuarios/login",
        { username, password },
      );
      console.log("Respuesta de inicio de sesión:", response.data);
      setMessage({ text: "Inicio de sesión exitoso", isSuccess: true });

      // Mostrar el aviso de Toastify para el inicio de sesión exitoso
      Toastify({
        text: "Inicio de sesión exitoso",
        duration: 6000,
        position: "right",
        style: {
          background: "#009933",
          color: "#FFFFFF",
          fontSize: "14px",
          padding: "10px",
          borderRadius: "4px",
          fontWeight: "bold",
          marginTop: "70px",
        },
      }).showToast();

      localStorage.setItem("token", response.data.token);
    } catch (error: any) {
      console.error("Error en el inicio de sesión:", error);
      if (error.response && error.response.data) {
        setMessage({ text: error.response.data.error, isSuccess: false });
      } else {
        setMessage({ text: "Error en el inicio de sesión", isSuccess: false });
      }
    }
  };

  return (
    <Card className="w-96 px-10 py-3">
      <CardHeader className="flex flex-row justify-between">
        <Image
          className="bg-custom-blue"
          src="/logo-du.png"
          width={72}
          height={50}
          alt="Logo DiU"
        />
        <CardTitle className="text-4xl text-center font-black">
          DOWN IS UP
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="text-xl" htmlFor="username">
            Usuario
          </Label>
          <Input
            id="username"
            placeholder="Ingrese su usuario"
            required
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-xl" htmlFor="password">
            Contraseña
          </Label>
          <Input
            id="password"
            className=""
            placeholder="Ingrese su contraseña"
            required
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full hover:bg-blue-500 transition-colors text-xl"
          onClick={handleLogin}
        >
          Ingresar
        </Button>
        <Link href="/signup" className="text-center text-sm">
          ¿No tienes cuenta? Crear una cuenta
        </Link>
      </CardFooter>
    </Card>
  );
}

