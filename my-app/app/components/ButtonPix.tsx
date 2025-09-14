"use client"

import Swal from "sweetalert2"

interface Pix {
  pix: string;
}

export default function ButtonPix({ pix }: Pix) {
  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pix);

      Swal.fire({
        color: "#000",
        text: "Copiado para área de transferência.",
        icon: "success",
        confirmButtonText: "Fechar",
        confirmButtonColor: "#fd7597",
      });
    } catch {
      Swal.fire({
        color: "#000",
        text: "Não foi possível copiar o texto. Tente novamente.",
        icon: "error",
        confirmButtonText: "Fechar",
        confirmButtonColor: "#fd7597",
      });
    }
  };

  return (
    <button
      onClick={handleCopyPix}
      className="w-full mt-10 py-3 bg-primary text-white text-shadow-sm font-bold rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 select-none max-md:text-xs max-sm:mt-5"
    >
      Copiar Chave Pix
    </button>
  );
}