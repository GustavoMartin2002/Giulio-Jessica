import Image from "next/image";
import { rougeScript } from "../layout";

export default function Welcome() {
  return (
    <section className="max-h-screen flex flex-col justify-center items-center mx-5 my-25 gap-5 drop-shadow-2xl max-lg:my-15">
      <hgroup className="w-full flex flex-col gap-10 max-lg:gap-5">
        <h2
          className={`${rougeScript.className} text-6xl text-center
          max-xl:text-5xl max-lg:text-4xl`}
        >
          Sejam Bem vindos!
        </h2>
        <p
          className="text-xl italic font-light text-center mb-5 mx-auto
          max-xl:text-lg max-lg:text-base max-md:text-sm max-sm:text-xs max-sm:mb-0"
        >
          Aqui você encontrará todas as informações sobre o nosso grande dia, <br className="max-sm:hidden" />
          estamos muito felizes em compartilhar esse momento especial com você.
        </p>
      </hgroup>
      
      <figure
        className="relative w-[70%] h-[700px] shadow-xl/20 mt-10 rounded-lg
        max-2xl:w-[80%] max-xl:w-[90%] max-xl:h-[500px] max-lg:w-full max-lg:mt-5 max-lg:h-[400px] max-md:h-[350px] max-sm:h-[200px]"
      >
        <Image 
          src={"/welcome.jpg"}
          alt={"Moldura de Fotos"}
          fill={true}
          quality={100}
          priority={true}
          className="object-center object-cover contrast-150 pointer-events-none select-none rounded-lg"
        />
      </figure>
    </section>
  );
}
