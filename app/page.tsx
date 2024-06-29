import Image from "next/image";
import Logo from "../public/logo-color-cropped.svg";
import LandingImg from "../public/landing1.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image className="max-w-xs" src={Logo} alt="logo" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,600px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            Aplicaciones de empleo{" "}
            <span className="text-primary">eficientes</span>
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Toma el control de tu busqueda de empleo con nuestra App que te
            ayuda a manejar tus aplicaciones de empleo, revisar su progreso y
            mantenerte organizado en cada paso de tu camino.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/add-job">Empecemos</Link>
          </Button>
        </div>
        <Image className="hidden lg:block" src={LandingImg} alt="Job Tracker" />
      </section>
    </main>
  );
}
