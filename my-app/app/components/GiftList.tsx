import Image from "next/image";
import Link from "next/link";
import { rougeScript } from "../utils/fonts"
import ButtonPix from "./ButtonPix";

export default function GiftList() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-start items-center mx-5 my-25 gap-5 max-lg:my-15">
      <h2
        className={`${rougeScript.className} text-6xl
        max-xl:text-5xl max-lg:text-4xl`}
      >
        Lista de Presentes
      </h2>
      <p
        className="text-xl font-light text-center w-[50%]
        max-2xl:w-[60%] max-xl:w-[70%] max-xl:text-lg max-lg:w-[80%] max-lg:text-base max-md:w-[90%] max-md:text-sm max-sm:w-full max-sm:text-xs"
      >
        Ficaremos muito felizes em receber sua contribuição através do PIX ou em nossa lista de presentes.
      </p>
      <hgroup
        className="w-[50%] flex justify-between items-center gap-10 mt-7 p-5 bg-gray-200 border-1 border-[rgba(0,0,0,0.1)] shadow-xl/10 rounded-lg
        max-2xl:w-[60%] max-xl:w-[80%] max-lg:w-full max-lg:mt-5 max-md:flex-col max-md:py-10 max-sm:p-5"
      >
        <ul className="w-full flex flex-col justify-center items-center">
          <h3
            className="text-xl text-center font-bold mb-5 select-none
            max-xl:text-lg max-lg:text-base">
              Dados para Transferência
            </h3>

          <ul className="text-base max-lg:text-sm max-sm:text-xs">
             <li className=" mt-2">
              <b className="text-secondary mr-1 select-none">Pix:</b>
              <span className="text-gray-900">jessicdias27@gmail.com</span>
            </li>

            <li className="mt-2">
              <b className="text-secondary mr-1 select-none">Nome:</b>
              <span className="text-gray-900">Jessica de Oliveira Dias</span>
            </li>

            <li className="mt-2">
              <b className="text-secondary mr-1 select-none">Instituição:</b>
              <span className="text-gray-900">Mercado Pago</span>
            </li>
          </ul>

          <ButtonPix pix={"jessicdias27@gmail.com"} />
          
          <Link
            className="w-full mt-7 py-3 bg-primary text-center text-white text-shadow-sm font-bold rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 select-none max-md:text-xs max-lg:mt-5"
            href={"https://www.mercadolivre.com.br/presentes/giulio-e-jessica-7g10k"}
          >
            Lista de Presentes
          </Link>
        </ul>
        <figure className="w-full h-[400px] relative max-sm:h-[200px]">        
          <Image
            src={"/pix.webp"}
            alt={"qrcode do pix"}
            fill={true}
            priority={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-center object-contain pointer-events-none select-none"
          />
        </figure>
      </hgroup>
    </section>
  );
}