import Image from "next/image"
import { rougeScript } from "../layout"
import Form from "./Form"

export default function AttendanceForm() {
  return (
    <section className="bg-black relative w-full min-h-screen flex flex-col items-center justify-center px-5 py-25 z-10 max-lg:py-15">
      <Image
        src="/form.jpg"
        alt="form.webp"
        fill={true}
        quality={100}
        priority={true}
        sizes="100vw"
        className="-z-10 object-center object-cover opacity-50 mask-radial-from-10% pointer-events-none select-none"
      />
      <hgroup>
        <h2
          className={`${rougeScript.className} text-center text-6xl mb-7
          max-xl:text-5xl max-lg:text-4xl`}
        >
          Confirme sua Presença
        </h2>
        <p
          className="text-lg text-center text-white mb-20 max-lg:mb-10
          max-xl:text-base max-lg:text-sm max-md:text-xs"
        >
          Para nos ajudar na organização, por favor, confirme sua presença até 02/10/2025.</p>
      </hgroup>
      <Form />
    </section>
  )
}