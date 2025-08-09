"use client";

import Image from "next/image";

export default function GiftList() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-start items-center p-10">
      <h2 className="text-6xl mb-10">Lista de Presentes</h2>
      <p className="text-xl italic font-light text-center">
        A maior alegria para nós é ter sua presença neste dia tão especial!<br />
        No entanto, se você deseja nos presentear, ficaremos muito felizes em receber sua contribuição através do PIX.
      </p>
      <hgroup className="w-[50%] flex justify-between gap-10 my-20 p-5 bg-gray-200 border-1 border-[rgba(0,0,0,0.1)] shadow-xl/10 rounded-lg">
        <ul className="w-full flex flex-col justify-center items-center">
          <h3 className="text-xl text-center font-bold mb-5">Dados para Transferência</h3>

          <ul>
             <li className="text-[16.5px] mt-2">
              <b className="text-red-800 mr-2">Chave Pix:</b>
              <span className="text-gray-900">giulio.jessica@pix</span>
            </li>

            <li className="text-[16.5px] mt-2">
              <b className="text-red-800 mr-2">Nome do Beneficiário:</b>
              <span className="text-gray-900">Nome do Casal</span>
            </li>

            <li className="text-[16.5px] mt-2">
              <b className="text-red-800 mr-2">Banco:</b>
              <span className="text-gray-900">Banco do Brasil</span>
            </li>
          </ul>
         
          <button
            onClick={() => navigator.clipboard.writeText("giulio.jessica@pix")}
            className="w-full mt-10 py-3 bg-puce text-white font-bold rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
          >
            Copiar Chave Pix
          </button>
        </ul>
        <figure className="w-full h-[400px] relative">        
          <Image
            src={"/pix.png"}
            alt={"qrcode do pix"}
            fill={true}
            quality={75}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-center object-cover"
          />
        </figure>
      </hgroup>
    </section>
  );
}