import { opensans } from "@/components/ui/fonts"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center space-y-8">
      <section className="h-full w-full flex flex-col justify-center items-center space-y-10 bg-[url('/bg1.png')] bg-cover bg-center">
        <section className={`${opensans.className} font-semibold`}>
          <h1 className="text-center my-4 text-4xl text-white">Bienvenidos a</h1>
          <article className="text-6xl text-center text-white">
            <h1 className="mb-4 text-white">DownIsUp</h1>
            <h1 className="text-white">Córdoba</h1>
          </article>
        </section>
        <section className="flex flex-col items-center">
          <Link href="contactanos">
            <Button variant="secondary">
              Contáctanos
            </Button>
          </Link>
        </section>
      </section>
    </main>
  )
}
