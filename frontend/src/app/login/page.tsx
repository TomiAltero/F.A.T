import { LogIn } from "@/components/log-in";
import LandingLayout from "@/app/landinglyout";

export default function Page() {
  return (
    <LandingLayout>
      <main className="flex flex-col justify-center items-center h-full">
        <section>
          <LogIn />
        </section>
      </main>
    </LandingLayout>
  );
}

