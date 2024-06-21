"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import "toastify-js/src/toastify.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import Toastify from "toastify-js";
import "react-toastify/dist/ReactToastify.css";

export function FormHijo() {
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [edad, setEdad] = useState<string>("");
  const [dni, setDni] = useState<string>("");
  const [nacimiento, setNacimiento] = useState<string>("");
  const [errors, setErrors] = useState<{ msg: string }[]>([]);
  const [successfulMessage, setSuccessfulMessage] = useState<string | null>(
    null,
  );

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/usuarios/hijo",
        {
          nombre,
          apellido,
          edad,
          dni,
        },
      );

      Toastify({
        text: "Usuario registrado exitosamente",
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

      console.log("User registration successful:", response.data);
      setErrors([]);
      setSuccessfulMessage("Usuario registrado exitosamente");

      setNombre("");
      setApellido("");
      setEdad("");
      setDni("");
      setNacimiento("");
    } catch (error: any) {
      console.error(
        "Error registrando el usuario:",
        error.response?.data || error.message,
      );
      if (error.response && error.response.data && error.response.data.errors) {
        const validationErrors = error.response.data.errors.map(
          (error: any) => error.msg,
        );
        validationErrors.forEach((errorText: string) => {
          Toastify({
            text: errorText,
            duration: 5000,
            position: "right",
            style: {
              background: "#FF0000",
              color: "#FFFFFF",
              fontSize: "14px",
              padding: "10px",
              borderRadius: "4px",
              fontWeight: "bold",
              marginTop: "70px",
            },
          }).showToast();
        });
      } else {
        setErrors([{ msg: "Hubo un error al registrar el usuario" }]);
      }
      setSuccessfulMessage(null);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Card className="w-[400px] border-b-4 border-blue-800">
        <CardHeader className="flex flex-col items-center ">
          <Image src="/favicon.ico" width={72} height={50} alt="Logo DiU" />
          <CardTitle className="text-2xl font-bold text-blue-900 p-3">
            Agregar hijo
          </CardTitle>
        </CardHeader>
        <CardContent>
          {errors.length > 0 && (
            <section className="my-3">
              {errors.map((error, index) => (
                <p
                  key={index}
                  className="transition-all rounded-2xl border ease-in-out delay-200 text-sm text-center font-bold bg-red-600 p-3 my-2"
                >
                  {error.msg}
                </p>
              ))}
            </section>
          )}
          <section className="my-3 -mt-5">
            <section className="flex flex-row space-x-4">
              <article className="space-y-2 my-2">
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900"
                  htmlFor="nombre"
                >
                  Nombre
                </Label>
                <Input
                  className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700 mb-6" // Borde solo inferior
                  id="nombre"
                  name="nombre"
                  placeholder="Ingrese su nombre"
                  required
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </article>
              <article className="space-y-2 my-2">
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900"
                  htmlFor="apellido"
                >
                  Apellido
                </Label>
                <Input
                  className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700 mb-6" // Borde solo inferior
                  id="apellido"
                  name="apellido"
                  placeholder="Ingrese su apellido"
                  required
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </article>
            </section>

            <article className="space-y-2 my-2">
              <Label
                className="block text-xs font-bold leading-6 text-blue-900"
                htmlFor="username"
              >
                Edad
              </Label>
              <Input
                className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700 mb-6" // Borde solo inferior
                id="edad"
                name="edad"
                placeholder="Ingrese su edad"
                required
                type="text"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </article>

            <article className="space-y-2 my-2">
              <Label
                className="block text-xs font-bold leading-6 text-blue-900"
                htmlFor="username"
              >
                DNI
              </Label>
              <Input
                className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700 mb-6" // Borde solo inferior
                id="edad"
                name="edad"
                placeholder="Ingrese su dni"
                required
                type="text"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />
            </article>
            <Label
              className="block text-xs font-bold leading-6 text-blue-900"
              htmlFor="username"
            >
              Nacimiento
            </Label>
            <Input
              className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700 mb-6" // Borde solo inferior
              id="nacimiento"
              name="nacimiento"
              required
              type="date"
              value={nacimiento}
              onChange={(e) => setNacimiento(e.target.value)}
            />
            <article></article>
            <article className="flex justify-center w-full mt-5">
              <Button
                variant={"ghost"}
                className="w-full rounded-2xl bg-custom-blue px-3 py-2 text-sm font-semi bold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                type="submit"
              >
                Continuar
              </Button>
            </article>
          </section>
        </CardContent>
      </Card>
    </form>
  );
}
