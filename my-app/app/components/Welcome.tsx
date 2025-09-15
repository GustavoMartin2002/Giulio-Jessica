import { rougeScript } from "../utils/fonts"
import Carousel from "./Carousel";

export default function Welcome() {
  return (
    <section id="welcome" className="min-h-screen flex flex-col justify-center items-center mx-5 my-25 gap-5 drop-shadow-2xl max-lg:my-15">
      <hgroup className="w-full flex flex-col gap-10 max-lg:gap-5">
        <h2
          className={`${rougeScript.className} text-6xl text-center
          max-xl:text-5xl max-lg:text-4xl`}
        >
          Sejam Bem vindos!
        </h2>
        <hgroup
          className="flex flex-col gap-3 text-xl font-light text-justify mb-5 mx-auto w-[50%]
          max-2xl:w-[60%] max-xl:w-[70%] max-xl:text-lg max-lg:w-[80%] max-lg:text-base max-md:w-full max-md:text-sm max-sm:text-xs max-sm:mb-0"
        >
          <p>O amor é feito de encontros, sorrisos e pequenas escolhas que nos trouxeram até aqui. No dia 04 de outubro de 2025, vamos celebrar a nossa história, cercados por pessoas que fazem parte dela e que tornam esse momento ainda mais especial.</p>

          <p>Cada passo que construímos lado a lado nos preparou para este instante: dizer {`"sim"`} diante de Deus, da vida e de todos que amamos. Mais do que uma data, este dia representa o início de um novo capítulo — repleto de sonhos compartilhados, cumplicidade e a certeza de que encontramos no outro o nosso lar.</p>

          <p>Esperamos vocês para testemunharem e celebrarem conosco a força do amor, que nos une e nos inspira a seguir juntos para sempre.</p>

          <p>Com carinho, Giulio & Jessica 💍</p>
        </hgroup>
      </hgroup>
      
      <figure className="w-full h-[90vh] mt-10 rounded-lg max-lg:mt-5">
        <Carousel/>
      </figure>
    </section>
  );
}
