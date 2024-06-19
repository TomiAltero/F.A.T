import Image from "next/image";
import { Label } from "@/components/ui/label";
import LandingLayout from "@/app/landinglyout";
export default function QuienesSomos() {
  return (
    <LandingLayout>
      <main className="flex flex-col justify-center mx-14">
        <section className="mt-14 mb-24">
          <h1 className="text-custom-blue text-5xl font-bold text-center">
            QUIENES SOMOS?
          </h1>
        </section>
        <section className="flex justify-between px-16">
          <article className="flex flex-col items-center gap-y-2">
            <Image
              width={138}
              height={131}
              src="/mision.png"
              alt="Mision Log"
            />
            <Label className="text-custom-blue font-extrabold text-2xl">
              Nuestra Misión
            </Label>
          </article>
          <article className="flex flex-col items-center gap-y-2">
            <Image
              width={219}
              height={129}
              src="/vision.png"
              alt="Mision Log"
            />
            <Label className="text-custom-blue font-extrabold text-2xl">
              Nuestra Visión
            </Label>
          </article>
          <article className="flex flex-col items-center gap-y-2">
            <Image
              width={167}
              height={150}
              src="/historia.png"
              alt="Mision Log"
            />
            <Label className="text-custom-blue font-extrabold text-2xl">
              Nuestra Historia
            </Label>
          </article>
        </section>
        <section className="flex flex-col text-sm space-y-2 justify">
          <h1 className="w-full text-center text-custom-blue font-extrabold text-3xl mb-2">
            Objetivos
          </h1>
          <section className="flex flex-col space-y-2">
            <article className="flex gap-x-2">
              <Image
                width={20}
                height={20}
                src="/Vectorcheck.svg"
                alt="Check Logo"
              />
              <p className="font-light text-custom-blue">
                <span className="font-normal text-custom-blue">Promover</span>
                 los derechos reconocidos en la Convención Internacional sobre
                los Derechos de las Personas con Discapacidad.
              </p>
            </article>
            <article className="flex gap-x-2">
              <Image
                width={20}
                height={20}
                src="/Vectorcheck.svg"
                alt="Check Logo"
              />
              <p className="font-light text-custom-blue">
                <span className="font-normal text-custom-blue">
                  Visibilizar el Síndrome de Down
                </span>
                , mediante acciones de educación, formación y actividades
                sociales y culturales, fortaleciendo la{" "}
                <span className="font-bold text-custom-blue">convivencia</span>.
              </p>
            </article>
            <article className="flex gap-x-2">
              <Image
                width={20}
                height={20}
                src="/Vectorcheck.svg"
                alt="Check Logo"
              />
              <p className="font-light text-custom-blue">
                <span className="font-normal text-custom-blue">
                  Fomentar la vida independiente
                </span>{" "}
                y la autonomía de las personas con síndrome de Down.
              </p>
            </article>
          </section>
        </section>
      </main>
    </LandingLayout>
  );
}

