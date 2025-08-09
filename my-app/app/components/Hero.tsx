import Image from "next/image";
import { rougeScript } from "../layout";

export default function Hero() {
  return (
    <header className="bg-black relative w-full h-screen flex flex-col items-center justify-center overflow-hidden text-center text-white shadow-lg">
      <Image
        src="/hero.jpg"
        alt="Giulio e Jessica - Nosso Casamento"
        fill={true}
        quality={100}
        priority={true}
        className="z-0 object-center object-cover opacity-80 mask-radial-at-center mask-radial-from-50% contrast-150 pointer-events-none"
      />
      <hgroup className="relative z-10 text-shadow-[1px_1px_5px_rgba(0,0,0,0.5)]">
        <h1 className={`${rougeScript.className} text-8xl max-md:text-5xl mb-4`}>Giulio & Jessica</h1>
        <p className="italic font-light text-xl md:text-2xl">Celebre conosco a nossa união</p>
      </hgroup>

        <section className="absolute bottom-7 z-10">
          <p className="italic font-light text-xs sm:text-2xl drop-shadow-lg">
            04 de Outubro de 2025
          </p>
        </section>
    </header>
  );
}