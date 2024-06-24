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

export function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [dni, setDni] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [isMatch, setIsMatch] = useState<boolean>(true);
  const [errors, setErrors] = useState<{ msg: string }[]>([]);
  const [successfulMessage, setSuccessfulMessage] = useState<string | null>(
    null,
  );

  const handleCheckBoxChange = () => setShowPassword(!showPassword);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(event.target.value);
    setIsMatch(event.target.value === password);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/usuarios", {
        username,
        email,
        dni,
        password,
        nombre,
        apellido,
      });

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

      window.location.href = "/login";

      console.log("User registration successful:", response.data);
      setErrors([]);
      setSuccessfulMessage("Usuario registrado exitosamente");

      setNombre("");
      setApellido("");
      setUsername("");
      setEmail("");
      setDni("");
      setPassword("");
      setConfirmPassword("");
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
      <Card className="mt-8 w-[400px] ">
        <CardHeader className="flex flex-col items-center">
          <Image src="/favicon.ico" width={72} height={50} alt="Logo DiU" />
          <CardTitle className="mt-4 text-xl font-bold text-blue-900">
            Registrate
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
                  className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700" // Borde solo inferior
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
                  className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700" // Borde solo inferior
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
                Nombre de Usuario
              </Label>
              <Input
                className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700" // Borde solo inferior
                id="username"
                name="username"
                placeholder="Ingrese su nombre de usuario"
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </article>
            <article className="space-y-2 my-2">
              <Label
                className="block text-xs font-bold leading-6 text-blue-900"
                htmlFor="email"
              >
                DNI
              </Label>
              <Input
                className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700" // Borde solo inferior
                id="dni"
                name="dni"
                placeholder="Ingrese su DNI"
                required
                type="text"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />
            </article>

            <article className="space-y-2 my-2">
              <Label
                className="block text-xs font-bold leading-6 text-blue-900"
                htmlFor="email"
              >
                Email
              </Label>
              <Input
                className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700" // Borde solo inferior
                id="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </article>

            <article className="space-y-2 my-2">
              <Label
                className="block text-xs font-bold leading-6 text-blue-900"
                htmlFor="password"
              >
                Contraseña
              </Label>
              <article className="space-y-3">
                <Input
                  id="password"
                  name="password"
                  className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700" // Borde solo inferior
                  placeholder="Ingrese su contraseña"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Label
                  className="block text-xs font-bold leading-6 text-blue-900"
                  htmlFor="password2"
                >
                  Confirmar Contraseña
                </Label>
                <Input
                  id="password2"
                  className="rounded-xl border-t-0 border-l-0 border-r-0 border-b-2 border-blue-800 outline-none focus:ring-0 focus:border-blue-700" // Borde solo inferior
                  placeholder="Repita la contraseña"
                  required
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <article>
                  {!isMatch && (
                    <p className="transition-all rounded-2xl border ease-in-out delay-200 text-sm text-center font-bold bg-red-600 p-2 my-2">
                      Las contraseñas no coinciden
                    </p>
                  )}
                </article>
              </article>
              <article className="flex gap-x-2 items-center">
                <Input
                  type="checkbox"
                  className="w-auto h-auto"
                  onChange={handleCheckBoxChange}
                  id="show"
                />
                <Label
                  className="block text-xs font-medium leading-6 text-gray-900"
                  htmlFor="show"
                >
                  Mostrar contraseña
                </Label>
              </article>
            </article>
            <article className="flex justify-center w-full mt-5">
              <Button
                disabled={!isMatch}
                variant={"primary"}
                className="w-full rounded-2xl bg-custom-blue px-3 py-2 text-sm font-semi bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
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
