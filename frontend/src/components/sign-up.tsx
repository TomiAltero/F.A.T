'use client'
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import axios from "axios"
import InputAdornments from "./ui/inputAdornments";
import TextField from '@mui/material/TextField';

export function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');
  const [isMatch, setIsMatch] = useState<boolean>(true)
  const [errors, setErrors] = useState<{ msg: string }[]>([])
  const [successfulMessage, setSuccessfulMessage] = useState<string | null>(null);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    setIsMatch(event.target.value === password);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/usuarios', {
        username,
        email,
        password,
        nombre,
        apellido
      });

      console.log('User registration successful:', response.data);
      setErrors([]);
      setSuccessfulMessage('Usuario registrado exitosamente');

    } catch (error: any) {
      console.error('Error registrando el usuario:', error);
      setErrors([{ msg: error.response.data.message }]);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-center text-custom-blue mt-5">Registro</CardTitle>
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
            <article >
              <TextField className="-mt-1.5"
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
              <TextField className="-mt-1.5"
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
              <TextField className="-mt-1.5"
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
                {!isMatch && <p className="transition-all rounded-2xl border ease-in-out delay-200 text-sm text-center font-bold bg-red-600 p-2 my-2">Las contraseñas no coinciden</p>}
              </article>
            </article>
            <article className="flex justify-center w-full mt-5 ">
              <Button
                variant={isMatch ? 'secondary' : 'ghost'}
                disabled={!isMatch}
                type='submit'
                className="w-full rounded-2xl px-3 py-2 text-sm font-semi bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Continuar
              </Button>
            </article>
          </section>
        </CardContent>
      </Card>
    </form>
  );
}
