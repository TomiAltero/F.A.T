'use client'
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { nunito } from "@/components/ui/fonts"
import Image from "next/image"
import React, { useState } from "react"
import axios from "axios"

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

  const handleCheckBoxChange = () => setShowPassword(!showPassword)

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
      console.error('Error registering user:', error.response?.data || error.message);
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([{ msg: 'Hubo un error al registrar el usuario' }]);
      }
      setSuccessfulMessage(null);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Card className="mt-8 w-[400px]">
        <CardHeader className="flex flex-row justify-center">
          <Image src="/favicon.ico" width={72} height={50} alt="Logo DiU" />
        </CardHeader>
        <CardContent>
          {errors.length > 0 && (
            <section className="my-3">
              {errors.map((error, index) => (
                <p key={index} className="transition-all rounded-2xl border ease-in-out delay-200 text-sm text-center font-bold bg-red-600 p-3 my-2">{error.msg}</p>
              ))}
            </section>
          )}
          {successfulMessage && (
            <section className="my-3">
              <p className="transition-all rounded-2xl border ease-in-out delay-200 text-sm text-center font-bold bg-green-600 p-3 my-2">{successfulMessage}</p>
            </section>
          )}
          <section className="my-3 -mt-5">
            <section className="flex flex-row space-x-4">
              <article className="my-2">
                <Label className="block text-[14px] leading-6 text-custom-blue" htmlFor="nombre">Nombre</Label>
                <Input
                  className="border"
                  id="nombre"
                  name="nombre"
                  placeholder="Ingrese su nombre"
                  required
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </article>
              <article className="my-2">
                <Label className="block text-[14px] leading-6 text-custom-blue" htmlFor="apellido">Apellido</Label>
                <Input
                  className="border"
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

            <article className="my-2">
              <Label className="block text-[14px] leading-6 text-custom-blue" htmlFor="email">Nombre de Usuario</Label>
              <Input
                className="border"
                id="username"
                name="username"
                placeholder="Ingrese su nombre de usuario"
                required
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </article>

            <article className="my-2">
              <Label className="block text-[14px] leading-6 text-custom-blue" htmlFor="email">Email</Label>
              <Input
                className="border"
                id="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </article>
            <article className="my-2">
              <Label className="block text-[14px] leading-6 text-custom-blue" htmlFor="password">Contraseña</Label>
              <article className="space-y-3">
                <Input
                  id="password"
                  name="password"
                  className="border"
                  placeholder="Ingrese su contraseña"
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Label className="block text-[14px] leading-6 text-custom-blue" htmlFor="password2">Confirmar Contraseña</Label>
                <Input
                  id="password2"
                  className="border"
                  placeholder="Repita la contraseña"
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <article>
                  {!isMatch ? <p className="transition-all rounded-2xl border ease-in-out delay-200 text-sm text-center font-bold bg-red-600 p-2 my-2">Las contraseñas no coinciden</p>
                    : <p></p>}
                </article>
              </article>
              <article className="flex gap-x-2 items-center">
                <Input
                  type="checkbox"
                  className="w-auto h-auto"
                  onChange={handleCheckBoxChange}
                  id="show"
                />
                <Label className="block text-[10px] leading-6 text-grey-900" htmlFor="show">Mostrar Contraseña</Label>
              </article>
            </article>
            <article className="flex justify-center w-full mt-5">
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

