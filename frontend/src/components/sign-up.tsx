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

  const handleFormSubmit = async (event: any) => {
    event.preventDefault(); // Prevent default form submission behavior

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await axios.post('http://localhost:5000/api/usuarios', {
        username,
        email,
        password,
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
          <Image  src="/favicon.jpg" width={72} height={50} alt="Logo DiU" />
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
              <article className="space-y-2 my-2">
                <Label className="block text-xs font-medium leading-6 text-gray-900" htmlFor="username">First Name</Label>
                <Input className="rounded-xl border" id="username" name="username" placeholder="Ingrese su usuario" required type="text" />
              </article>
              <article className="space-y-2 my-2">
                <Label className="block text-xs font-medium leading-6 text-gray-900" htmlFor="username">Last Name</Label>
                <Input className="rounded-xl border" id="username" name="username" placeholder="Ingrese su usuario" required type="text" />
              </article>
            </section>

            <article className="space-y-2 my-2">
              <Label className="block text-xs font-medium leading-6 text-gray-900" htmlFor="email">Email</Label>
              <Input className="rounded-xl border" id="email" name="email" placeholder="Ingrese su correo electrónico" required type="email" />
            </article>
            <article className="space-y-2 my-2 ">
              <Label className="block text-xs font-medium leading-6 text-gray-900" htmlFor="password">Password</Label>
              <article className="space-y-3">
                <Input id="password" name="password"
                  className="rounded-xl border"
                  placeholder="Ingrese su contraseña"
                  required
                  type={showPassword ? 'text' : 'password'}
                  onChange={handlePasswordChange}
                />
                <Label className="block text-xs font-medium leading-6 text-gray-900" htmlFor="password">Confirm password</Label>
                <Input id="password2"
                  className="rounded-xl border"
                  placeholder="Repita la contraseña"
                  required
                  type={showPassword ? 'text' : 'password'}
                  onChange={handleConfirmPasswordChange}
                />
                <article>
                  {!isMatch ? <p className="transition-all rounded-2xl border ease-in-out delay-200 text-sm text-center font-bold bg-red-600 p-2 my-2">Las contraseñas no coinciden</p>
                    : <p></p>}
                </article>
              </article>
              <article className="flex gap-x-2 items-center">
                <Input type="checkbox" className="w-auto h-auto" onChange={handleCheckBoxChange} id="show" />
                <Label className="block text-xs font-medium leading-6 text-gray-900" htmlFor="show">Show password</Label>
              </article>
            </article>
            <article className="flex justify-center w-full mt-5">
              <Button disabled={!isMatch} type='submit' className="w-full rounded-2xl bg-custom-blue px-3 py-2 text-sm font-semi bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">Continue</Button>
            </article>

          </section>
        </CardContent>
      </Card>
    </form>
  );
}

