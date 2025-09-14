import { rougeScript } from "../utils/fonts";

export default function GuestManual() {
  return (
    <section
      className="w-[50%] flex flex-col justify-start items-center mb-5 bg-gray-200 shadow-2xl border border-gray-300 rounded-sm p-10
      max-2xl:w-[60%] max-xl:w-[70%] max-lg:w-full max-sm:px-5"
    >
      <h3 className={`${rougeScript.className} text-primary text-shadow-lg text-[45px] font-bold mb-10 max-xl:text4xl max-lg:text-3xl`}>
        Manual dos Convidados
      </h3>
      <ul 
        className="w-full text-xl text-start font-light flex flex-col gap-5 rounded-sm
        max-2xl:text-lg max-lg:text-base max-md:text-sm max-sm:text-xs"
      >
        <li>
          <svg className="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px] inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Z" clipRule="evenodd"/>
          </svg>
          <span className="ml-1">Confirme sua presença.</span>
        </li>
        
        <li>
          <svg className="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px] inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd"/>
          </svg>
          <span className="ml-1">Chegue no Horário.</span>
        </li>

        <li>
          <svg className="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px] inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
          </svg>
          <span className="ml-1">Não convide outras pessoas.</span>
        </li>

        <li>
          <svg className="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px] inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M7.5 4.586A2 2 0 0 1 8.914 4h6.172a2 2 0 0 1 1.414.586L17.914 6H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.086L7.5 4.586ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" clipRule="evenodd"/>
          </svg>
          <span className="ml-1">Não atrapalhe as equipes de foto e vídeo.</span>
        </li>

        <li>
          <svg className="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px] inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M5.833 5a5 5 0 0 1 3-1h6.334a5 5 0 0 1 3 1L21.1 7.2a1 1 0 0 1 .268 1.296l-2 3.5a1 1 0 0 1-1.382.361l-.986-.59V19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-7.234l-.985.591a1 1 0 0 1-1.383-.36l-2-3.5A1 1 0 0 1 2.9 7.2L5.833 5ZM14 5h-4c0 .425.223.933.645 1.355.422.423.93.645 1.355.645.425 0 .933-.222 1.355-.645.423-.422.645-.93.645-1.355Z" clipRule="evenodd"/>
          </svg>
          <span className="ml-1">Branco é a cor da noiva.</span>
        </li>

        <li>
          <svg className="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px] inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.707 4.293a1 1 0 0 0-1.414 1.414l14 14a1 1 0 0 0 1.414-1.414l-.004-.005C21.57 16.498 22 13.938 22 12a9.972 9.972 0 0 0-2.929-7.071 1 1 0 1 0-1.414 1.414A7.972 7.972 0 0 1 20 12c0 1.752-.403 3.636-1.712 4.873l-1.433-1.433C17.616 14.37 18 13.107 18 12c0-1.678-.69-3.197-1.8-4.285a1 1 0 1 0-1.4 1.428A3.985 3.985 0 0 1 16 12c0 .606-.195 1.335-.59 1.996L13 11.586V6.135c0-1.696-1.978-2.622-3.28-1.536L7.698 6.284l-1.99-1.991ZM4 8h.586L13 16.414v1.451c0 1.696-1.978 2.622-3.28 1.536L5.638 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"/>
          </svg>
          <span className="ml-1">Deixe seu celular no silencioso.</span>
        </li>

        <li>
          <svg className="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px] inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 24 24">
            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
          </svg>
          <span className="ml-1">Participe da cerimônia.</span>
        </li>

        <li>
          <svg className="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px] inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clipRule="evenodd"/>
          </svg>
          <span className="ml-1">Não vá embora sem dar uma abraço nos noivos.</span>
        </li>

        <li>
          <svg className="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px] inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M11.6643 2.05648c.0197-.00699.1589-.05645.3357-.05645.1768 0 .316.04946.3357.05645l.0019.00067c.0461.01577.0846.03229.1092.04332.0514.02304.1015.04898.1449.07268.0896.04898.1957.11302.3102.18855.2291.15109.521.36725.8121.63689C14.247 3.49218 15 4.37 15 5.50003c0 1.12688-.7447 2.00396-1.2779 2.49995-.2531.23541-.5075.43043-.7221.57742V10h5c.5523 0 1 .4477 1 1v3h-4c-.0568 0-.1125.0048-.1667.0139-.0542-.0091-.1099-.0139-.1667-.0139H5v-3c0-.5523.44772-1 1-1h5V8.57622c-.2139-.14666-.4676-.34115-.7202-.57589C9.74664 7.50489 9 6.62764 9 5.50003c0-1.13003.753-2.00785 1.286-2.50144.2911-.26964.583-.4858.8121-.63689.1145-.07553.2206-.13957.3102-.18855.0434-.0237.0935-.04964.1449-.07268.0246-.01103.0631-.02755.1092-.04332l.0019-.00067ZM4 17.8377V21c0 .5523.44772 1 1 1h14c.5523 0 1-.4477 1-1v-2.8243c-.0609.0534-.1248.1054-.1917.1556-.56.42-1.274.6687-2.1416.6687-.8677 0-1.5817-.2487-2.1417-.6687-.281-.2108-.5081-.4531-.6917-.7045-.1835.2514-.4106.4937-.6917.7045-.5599.42-1.2739.6687-2.1416.6687-.8677 0-1.5817-.2487-2.14169-.6687-.20142-.1511-.37514-.3184-.52499-.4936-.14984.1752-.32356.3425-.52499.4936-.55999.42-1.27398.6687-2.14166.6687s-1.58168-.2487-2.14167-.6687c-.20143-.1511-.37515-.3184-.525-.4936ZM5.2078 16c.0124.0314.0255.0628.03934.0939.11841.2664.27553.4856.47786.6374.19001.1425.47602.2687.94167.2687s.75165-.1262.94166-.2687c.20234-.1518.35945-.371.47786-.6374.01384-.0311.02694-.0625.03934-.0939H5.2078Zm5.3727.0939c-.0139-.0311-.027-.0625-.0394-.0939h2.9177c-.0124.0314-.0255.0628-.0393.0939-.1184.2664-.2755.4856-.4779.6374-.19.1425-.476.2687-.9416.2687-.4657 0-.7517-.1262-.9417-.2687-.2023-.1518-.3594-.371-.4778-.6374Zm5.6666 0c-.0138-.0311-.0269-.0625-.0393-.0939h2.9177c-.0124.0314-.0255.0628-.0393.0939-.1184.2664-.2755.4856-.4779.6374-.19.1425-.476.2687-.9416.2687-.4657 0-.7517-.1262-.9417-.2687-.2023-.1518-.3594-.371-.4779-.6374Z"/>
          </svg>
          <span className="ml-1">Aguarde a liberação da mesa de doces.</span>
        </li>

        <li>
          <svg className="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px] inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
          </svg>
          <span className="ml-1">Aproveite muito.</span>
        </li>
      </ul>
    </section>
  );
}