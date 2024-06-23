import Perfil from "@/components/perfil";
import AppLayout from "@/app/applayout";

export default function Page() {
  return (
    <AppLayout>
      <main className="bg-custom-white h-full flex flex-col items-center">
        <section>
          <Perfil />
        </section>
      </main>
    </AppLayout>
  );
}
