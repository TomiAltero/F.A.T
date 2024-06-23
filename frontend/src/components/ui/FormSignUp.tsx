"use client";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import InputAdornments from "../ui/inputAdornments";
import TextField from "@mui/material/TextField";
import "react-toastify/dist/ReactToastify.css";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import React, { useState } from "react";

export function FormSignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [isMatch, setIsMatch] = useState<boolean>(true);
  const [errors, setErrors] = useState<{ msg: string }[]>([]);
  const [successfulMessage, setSuccessfulMessage] = useState<string | null>(
    null,
  );
  const [registrationSuccess, setRegistrationSuccess] =
    useState<boolean>(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    setIsMatch(password === newConfirmPassword);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/usuarios", {
        username,
        email,
        password,
        nombre,
        apellido,
      });

      console.log("User registration successful:", response.data);
      setErrors([]);
      setSuccessfulMessage("Usuario registrado exitosamente");

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setNombre("");
      setApellido("");
      setIsMatch(true);

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
    } catch (error: any) {
      console.error("Error registrando el usuario:", error);
      setErrors([{ msg: error.response.data.message }]);
      toast.error("Error registrando el usuario");
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = "https://accounts.google.com/signin";
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-center text-custom-blue mt-5">
            Registro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <section className="space-y-3">
            <article>
              <TextField
                id="username"
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
                variant="standard"
                margin="normal"
                InputLabelProps={{ required: false }}
              />
            </article>
            <article>
              <TextField
                className="-mt-1.5"
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                variant="standard"
                margin="normal"
                InputLabelProps={{ required: false }}
              />
            </article>
            <article>
              <TextField
                className="-mt-1.5"
                id="nombre"
                label="Nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                fullWidth
                variant="standard"
                margin="normal"
                InputLabelProps={{ required: false }}
              />
            </article>
            <article>
              <TextField
                className="-mt-1.5"
                id="apellido"
                label="Apellido"
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
                fullWidth
                variant="standard"
                margin="normal"
                InputLabelProps={{ required: false }}
              />
            </article>

            <InputAdornments />

            <article>
              <article>
                {!isMatch && (
                  <p className="transition-all rounded-2xl border ease-in-out delay-200 text-sm text-center font-bold bg-red-600 p-2 my-2">
                    Las contraseñas no coinciden
                  </p>
                )}
              </article>
            </article>
            <article className="flex justify-center w-full mt-5 ">
              <Button
                variant={isMatch ? "secondary" : "ghost"}
                disabled={!isMatch}
                type="submit"
                className="w-full rounded-2xl px-3 py-2 text-sm font-semi bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continuar
              </Button>
            </article>
            <article className="flex justify-center w-full mt-3">
            <Button
                className="w-full rounded-2xl px-3 py-2 text-sm font-semi bold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 flex items-center justify-center border-2 "
>
                Continuar con Google

                <img src="/google-logo.png" width={16} alt="Google Icon" className="mr-2 ml-3" />

            </Button>
            </article>
          </section>
        </CardContent>
      </Card>
    </form>
  );
}