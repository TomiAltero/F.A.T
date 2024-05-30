import { opensans } from "@/components/ui/fonts"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center space-y-8 -mt-7">
      <section className={`${opensans.className} font-semibold`} id="title">
        <h1 className="text-center my-4 text-4xl">Bienvenidos a</h1>
        <article className="text-6xl text-center">
          <h1 className="mb-4">DownIsUp</h1>
          <h1 className="">Córdoba</h1>
        </article>
      </section>
      <section>
        <Link href="contactanos">
          <Button variant="secondary">
            Contáctanos
          </Button>
        </Link>
      </section>
    </main>
  )
}
