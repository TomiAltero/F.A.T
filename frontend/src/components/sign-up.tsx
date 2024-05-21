'use client'
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { nunito } from "@/components/ui/fonts"
import Image from "next/image"
import React, { useState } from "react"
import axios from "axios"

const INITIAL_STATE = {
  data: "Hello world =)"
}

export function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [isMatch, setIsMatch] = useState<boolean>(true)

  const handleCheckBoxChange = () => setShowPassword(!showPassword)

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsMatch(event.target.value === confirmPassword); // Update match state
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    setIsMatch(event.target.value === password); // Update match state
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Extract form data
    const username = event.target.username.value;
    const email = event.target.email.value;
    const passwordi = event.target.password.value;

    // Validate form data (optional, can be added here)

    try {
      const response = await axios.post('http://localhost:5000/api/usuarios', {
        username,
        email,
        password,
      });

      console.log('User registration successful:', response.data);
    } catch (error) {

      console.error('Error registering user:', error.response?.data || error.message);
    }
  };



  return (
    <form onSubmit={handleFormSubmit}>

      <Card className="w-[500px]">
        <CardHeader className="flex flex-row justify-between">
          <Image className="bg-custom-blue" src="/logo-du.png" width={72} height={50} alt="Logo DiU" />
          <CardTitle className={`text-4xl text-center font-black m-0 ${nunito.className}`}>DOWN IS UP</CardTitle>
        </CardHeader>
        <CardContent>
          <section className="flex justify-center">
            <h1 className={`w-full text-white p-3 rounded-lg text-4xl text-center font-black uppercase ${nunito.className} `}>Regístrate</h1>
          </section>
          <section className="my-3">
            <article className="space-y-2 my-4">
              <Label className="text-xl" htmlFor="username">Usuario</Label>
              <Input id="username" name="username" placeholder="Ingrese su usuario" required type="text" />
            </article>
            <article className="space-y-2 my-4">
              <Label className="text-xl" htmlFor="email">Correo Electrónico</Label>
              <Input id="email" name="email" placeholder="Ingrese su correo electrónico" required type="email" />
            </article>
            <article className="space-y-2 my-4 ">
              <Label className="text-xl" htmlFor="password">Contraseña</Label>
              <article className="space-y-3">
                <Input id="password" name="password"
                  className=""
                  placeholder="Ingrese su contraseña"
                  required
                  type={showPassword ? 'text' : 'password'}
                  onChange={handlePasswordChange}
                />
                <Input id="password2"
                  className=""
                  placeholder="Repita la contraseña"
                  required
                  type={showPassword ? 'text' : 'password'}
                  onChange={handleConfirmPasswordChange}
                />
                <article>
                  {!isMatch ? <p className="transition-all ease-in-out delay-200 text-sm text-center font-bold bg-red-600 p-3 my-2">Las contraseñas no coinciden</p>
                    : <p></p>}
                </article>
              </article>
              <article className="flex gap-x-2 items-center">
                <Input type="checkbox" className="w-auto h-auto" onChange={handleCheckBoxChange} id="show" />
                <Label className="text-xs font-semibold text-center items-center" htmlFor="show">Mostrar contraseña</Label>
              </article>
            </article>
            <article className="flex justify-center">
              <Button disabled={!isMatch} type='submit' className="font-bold ">Crear Cuenta</Button>
            </article>
          </section>
        </CardContent>
      </Card>
    </form>
  )
}

