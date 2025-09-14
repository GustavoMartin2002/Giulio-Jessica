import Image from "next/image";
import { rougeScript } from "../utils/fonts"

export default function Hero() {
  return (
    <header className="bg-black relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-center text-white shadow-lg">
      <Image
        src="/hero.webp"
        alt="hero.webp"
        fill={true}
        quality={100}
        priority={true}
        sizes="100vw"
        className="z-0 object-center object-cover opacity-40 mask-radial-at-center mask-radial-from-50% contrast-125 pointer-events-none select-none"
      />
      <hgroup className="relative z-10 text-shadow-[0_0px_10px_rgba(0,0,0,0.25)] text-shadow-white heroFadeInTop">
        <h1
          className={`${rougeScript.className} text-8xl mb-7 select-none
          max-xl:text-7xl max-lg:text-6xl max-md:text-5xl`}
        >
          Giulio & Jessica
        </h1>

        <hr className="shadow-[0_0px_7px_rgba(0,0,0,0.25)] shadow-white" />
        <p
          className="text-2xl font-extralight  select-none my-2
          max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-sm"
        >
          celebre conosco a nossa união
        </p>
        <hr className="shadow-[0_0px_7px_rgba(0,0,0,0.25)] shadow-white" />
      </hgroup>

        <section className="absolute bottom-0 z-10">
          <hgroup className="relative bg-secondary drop-shadow-2xl drop-shadow-rose-600 rounded-t-full p-5 max-lg:p-3 heroFadeInTop">
            <data
              className="text-xl m-auto text-center text-shadow-sm font-light select-none px-10 max-lg:p-5
              max-xl:text-lg max-lg:text-base max-md:text-sm max-sm:text-xs"
              value="04 de Outubro de 2025"
            >
              04 de Outubro de 2025
            </data>
          </hgroup>
        </section>
    </header>
  );
}