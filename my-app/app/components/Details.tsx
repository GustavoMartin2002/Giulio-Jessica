import { rougeScript } from "../utils/fonts"
import GuestManual from "./GuestManual";

export default function Details() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-start items-center mx-5 my-25 gap-10 max-lg:my-15">
      <h2
        className={`${rougeScript.className} text-6xl
        max-xl:text-5xl max-lg:text-4xl`}
      >
        Informações
      </h2>
      <ul
        className="w-[50%] text-xl text-center font-light flex flex-col flex-wrap gap-10 mx-auto mb-5
        max-2xl:w-[60%] max-2xl:text-lg max-xl:w-[70%] max-lg:w-full max-lg:gap-5 max-lg:mb-0 max-lg:text-base max-md:text-sm max-sm:text-xs"
      >
        <li className="w-full h-[60px] flex items-center rounded-lg shadow-lg max-sm:h-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="w-[10%] h-full text-white bg-primary p-2 rounded-l-lg border-1 border-r-0 border-[rgba(0,0,0,0.1)]
            max-md:w-[15%] max-sm:w-[18%]"
            viewBox="0 0 16 16"
          >
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
          </svg>
          <p
            className="w-full h-full place-content-center bg-gray-200 rounded-r-lg border-1 border-l-0 border-[rgba(0,0,0,0.1)]"
          >
            Dia 4 de outubro de 2025
          </p>
        </li>

        <li className="w-full h-[60px] flex items-center rounded-lg shadow-lg max-sm:h-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="w-[10%] h-full text-white bg-primary p-2 rounded-l-lg border-1 border-r-0 border-[rgba(0,0,0,0.1)]
            max-md:w-[15%] max-sm:w-[18%]"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
          <p className="w-full h-full place-content-center bg-gray-200 rounded-r-lg border-1 border-l-0 border-[rgba(0,0,0,0.1)] max-sm:px-2">R. Jose Alencar, 3 - Parque Verde II, Camaçari - BA</p>
        </li>

        <li className="w-full h-[60px] flex items-center rounded-lg shadow-lg max-sm:h-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor" 
            className="w-[10%] h-full text-white bg-primary p-2 rounded-l-lg border-1 border-r-0 border-[rgba(0,0,0,0.1)]
            max-md:w-[15%] max-sm:w-[18%]" 
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
          </svg>
          <p className="w-full h-full place-content-center bg-gray-200 rounded-r-lg border-1 border-l-0 border-[rgba(0,0,0,0.1)]">As 16:00 horas</p>  
        </li>
      </ul>

      <GuestManual/>

      <iframe
        className="shadow-lg rounded-lg select-none
        max-2xl:w-[60%] max-xl:w-[70%] max-lg:w-full max-lg:mb-0 max-sm:h-[300px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.735197249558!2d-38.334687324038875!3d-12.73069025501343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7166a1dd4bc1123%3A0x67953a0e52bd8a2d!2sR.%20Jose%20Alencar%2C%203%20-%20Parque%20Verde%20II%2C%20Cama%C3%A7ari%20-%20BA%2C%2042800-970!5e0!3m2!1spt-BR!2sbr!4v1757012058745!5m2!1spt-BR!2sbr"
        width="50%"
        height="600"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>    
    </section>
  );
}