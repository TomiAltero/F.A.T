'use client'

import { useState } from "react";
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://localhost:5000/api/usuarios/login', { username, password });
      const { token } = response.data;

      // Guardar el token en el almacenamiento local o de sesión
      localStorage.setItem('token', token);

      // Mostrar mensaje de éxito
      setMessage('Inicio de sesión exitoso');

    } catch (error) {
      console.error('Error en el login:', error);
      setMessage('Credenciales inválidas');
    }
  };

  const checkAuthenticated = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get('/api/some-protected-route', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        // Manejar la respuesta de la ruta protegida
      } else {
        setMessage('No estás autenticado');
      }
    } catch (error) {
      console.error('Error al verificar la autenticación:', error);
      setMessage('Token inválido o expirado');
    }
  };

  return (
    <Card className="w-96 px-10 py-3">
      <CardHeader className="flex flex-row justify-between">
        <Image className="bg-custom-blue" src="/logo-du.png" width={72} height={50} alt="Logo DiU" />
        <CardTitle className="text-4xl text-center font-black">DOWN IS UP</CardTitle>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xl" htmlFor="username">Usuario</Label>
            <Input
              id="username"
              placeholder="Ingrese su usuario"
              required
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xl" htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              className=""
              placeholder="Ingrese su contraseña"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {message && <p className="text-center text-red-500">{message}</p>}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full hover:bg-blue-500 transition-colors text-xl">Ingresar</Button>
          <Link href="/signup" className="text-center text-sm">
            ¿No tienes cuenta? Crear una cuenta
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}

