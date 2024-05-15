'use client'
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
export function SignUp() {
    /**
     * TODO: Add checks for password strength and username, email availability, password match, etc.
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    
    */
    const [showPassword, setShowPassword] = useState(false)
    const handleCheckBoxChange = () => setShowPassword(!showPassword)
    return (
        <Card className="w-[500px]">
            <CardHeader className="flex flex-row justify-between">
                <Image className="bg-custom-blue" src="/logo-du.png" width={72} height={50} alt="Logo DiU"/>
                <CardTitle className="text-4xl text-center font-black m-0">DOWN IS UP</CardTitle>
            </CardHeader>
            <CardContent>
                <h1 className="w-full bg-custom-white text-custom-blue p-3 rounded-lg text-center">Regístrate</h1>
                <section className="my-3">
                    <article className="space-y-2 my-4">
                        <Label className="text-xl" htmlFor="username">Usuario</Label>
                        <Input id="username" placeholder="Ingrese su usuario" required type="text" />
                    </article>
                    <article className="space-y-2 my-4">
                        <Label className="text-xl" htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" placeholder="Ingrese su correo electrónico" required type="email" />
                    </article>
                    <article className="space-y-2 my-4">
                        <Label className="text-xl" htmlFor="password">Contraseña</Label>
                        <article className="space-y-3">
                            <Input id="password2" 
                            className="" 
                            placeholder="Repita la contraseña"  
                            required 
                            type={showPassword ? 'text' : 'password'}/>
                            <Input id="password" 
                            className="" 
                            placeholder="Ingrese su contraseña"  
                            required 
                            type={showPassword ? 'text' : 'password'}/>
                        </article>
                        <article className="flex gap-x-2 items-center">
                            <Input type="checkbox" className="w-auto h-auto" onChange={handleCheckBoxChange}id="show"/>
                            <Label className="text-xs font-semibold text-center items-center" htmlFor="show">Mostrar contraseña</Label>
                        </article>
                    </article>
                    <article className="flex justify-center">
                        <Button className="font-bold">Crear Cuenta</Button>
                    </article>
                </section>

            </CardContent>

        </Card>
    )
}