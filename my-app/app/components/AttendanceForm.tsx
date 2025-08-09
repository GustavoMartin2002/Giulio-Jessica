import { rougeScript } from "../layout"
import Form from "./Form"

export default function AttendanceForm() {
  return (
    <section className="min-h-[80vh] p-10 bg-puce-form opac">
      <h3 className={`${rougeScript.className} text-center text-white text-shadow-2xs text-6xl mb-10`}>Confirme sua Presença</h3>
      <p className="text-center text-white mb-10">Para nos ajudar na organização, por favor, confirme sua presença até [Data Limite].</p>
      <Form />
    </section>
  )
}