import Image from "next/image";

export default function Welcome() {
  return (
    <section className="max-h-screen flex flex-col justify-center items-center m-10 gap-10 drop-shadow-2xl">
      <hgroup className="flex flex-col gap-10">
        <h2 className="text-6xl text-shadow-lg mt-20">Sejam Bem vindos!</h2>
        <p className="text-xl italic font-light text-center mb-10">
          Aqui você encontrará todas as informações sobre o nosso grande dia, <br />
          estamos muito felizes em compartilhar esse momento especial com você.
        </p>
      </hgroup>
      
      <figure className="w-[70%] h-[700px] shadow-xl/20 relative mb-10">
        <Image 
          src={"/welcome.jpg"}
          alt={"Moldura de Fotos"}
          fill={true}
          quality={75}
          priority={true}
          className="object-center object-cover contrast-150 pointer-events-none"
        />
      </figure>
    </section>
  );
}
