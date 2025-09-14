"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "../models/formInput";
import { useGoogleForms } from "../hooks/useGoogleForms";

export default function Form() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInput>();
  const { isSubmitting, submit } = useGoogleForms();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    await submit(data, reset);
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="w-[35%] flex flex-col justify-center items-center gap-5
      max-2xl:w-[40%] max-xl:w-[50%] max-lg:w-[60%] max-lg:text-xs max-md:w-[70%] max-sm:w-full"
    >
      { errors.name && <p className="mr-auto text-third">{errors.name.message}</p> }
      { errors.numberTel && <p className="mr-auto text-third">{errors.numberTel.message}</p> }
      { errors.guest && <p className="mr-auto text-third">{errors.guest.message}</p> }
      { errors.message && <p className="mr-auto text-third">{errors.message.message}</p> }
      <input
        type="text"
        {...register("name", {
          required: "* O nome completo é obrigatório.",
          minLength: {
            value: 3,
            message: "* O nome deve ter pelo menos 3 caracteres.",
          },
          maxLength: {
            value: 50,
            message: "* O nome não pode exceder 50 caracteres.",
          },
          pattern: {
            value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
            message: "* O nome deve conter apenas letras e espaços.",
          }
        })}
        placeholder="Nome Completo*"
        className="w-full p-4 bg-gray-300 rounded-sm focus:outline-none placeholder:text-gray-600"
      />

      <input
        type="tel"
        {...register("numberTel", { 
          required: "* O número de telefone é obrigatório.",
          minLength: {
            value: 8,
            message: "* O telefone deve ter no mínimo 8 dígitos.",
          },
          maxLength: {
            value: 11,
            message: "* O telefone deve ter no máximo 11 dígitos.",
          },
          pattern: {
            value: /^\d+$/,
            message: "* O telefone só pode conter números.",
          },
        })}
        placeholder="Número de Telefone*"
        className="w-full p-4 bg-gray-300 rounded-sm focus:outline-none placeholder:text-gray-600"
      />

      <select
        {...register("guest", { 
          required: "* Selecione o número de convidados.",
        })}
        className="w-full p-4 bg-gray-300 rounded-sm focus:outline-none placeholder:text-gray-600"
        defaultValue=""
      >
        <option disabled value="">Número de convidados</option>
        <option value="0">Nenhum</option>
        <option value="1">1</option>
      </select>
      
      <textarea
        {...register("message", { 
          maxLength: {
            value: 400,
            message: "* A mensagem deve ter no máximo 400 caracteres.",
          },
        })}
        placeholder="Mensagem (opcional)"
        className="w-full p-4 bg-gray-300 rounded-sm focus:outline-none placeholder:text-gray-600"
        rows={6}
      ></textarea>

      <button
        type="submit"
        className="w-full py-3 bg-primary text-white font-bold rounded-lg shadow-md cursor-pointer transition-transform transform select-none hover:scale-105"
        disabled={isSubmitting}
      >
        { isSubmitting ? "Enviando..." : "Confirmar Presença" }
      </button>
    </form>
  );
}