"use client";

import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
  name: string;
  numberTel: string;
  guest: string;
  message: string;
}

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    alert("Presença confirmada! Obrigado.");
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-5 py-10 px-100"
    >
      {errors.name && <span className="text-start text-red-500 text-sm">{errors.name.message}</span>}
      {errors.numberTel && <span className="text-start text-red-500 text-sm">{errors.numberTel.message}</span>}
      {errors.guest && <span className="text-start text-red-500 text-sm">{errors.guest.message}</span>}
      
      <input
        type="text"
        {...register("name", {
          required: "O nome completo é obrigatório.",
          minLength: {
            value: 3,
            message: "O nome deve ter pelo menos 3 caracteres.",
          },
          maxLength: {
            value: 50,
            message: "O nome não pode exceder 50 caracteres.",
          },
          pattern: {
            value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
            message: "O nome deve conter apenas letras e espaços.",
          }
        })}
        placeholder="Nome Completo*"
        className="w-[50%] p-4 bg-gray-300 rounded-sm focus:outline-none placeholder:text-gray-600"
      />

      <input
        type="tel"
        {...register("numberTel", { 
          required: "O número de telefone é obrigatório.",
          minLength: {
            value: 8,
            message: "O telefone deve ter no mínimo 8 dígitos.",
          },
          maxLength: {
            value: 11,
            message: "O telefone deve ter no máximo 11 dígitos.",
          },
          pattern: {
            value: /^\d+$/,
            message: "O telefone só pode conter números.",
          },
        })}
        placeholder="Número de Telefone*"
        className="w-[50%] p-4 bg-gray-300 rounded-sm focus:outline-none placeholder:text-gray-600"
      />

      <select
        {...register("guest", { 
          required: "Por favor, selecione o número de convidados.",
        })}
        defaultValue={""}
        className="w-[50%] p-4 bg-gray-300 rounded-sm focus:outline-none placeholder:text-gray-600"
      >
        <option disabled selected value={""}>Número de convidados</option>
        <option value="0">Nenhum</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

      <textarea
        {...register("message", { maxLength: 300 })}
        placeholder="Mensagem (opcional)"
        className="w-[50%] p-4 bg-gray-300 rounded-sm focus:outline-none placeholder:text-gray-600"
        rows={6}
      ></textarea>

      <button
        type="submit"
        className="w-[50%] py-3 bg-rose text-white font-bold rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
      >
        Confirmar Presença
      </button>
    </form>
  );
}