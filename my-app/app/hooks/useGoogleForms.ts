import { useState } from 'react';
import { FormInput } from '../models/formInput';
import Swal from 'sweetalert2';

type SubmissionStatus = 'success' | 'error' | null;

export const useGoogleForms = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<SubmissionStatus>(null);
  
  const submit = async (data: FormInput) => {
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire({
          title: "Formulário enviado!",
          color: "#000",
          text: "Obrigado por confirmar sua presença.",
          icon: "success",
          confirmButtonText: "Fechar",
          confirmButtonColor: "#fd7597",
        });
        setStatus('success');
      } else {
        throw new Error('Erro na resposta do servidor.');
      }
    } catch (error) {
      Swal.fire({
        title: "Erro!",
        color: "#000",
        text: "Ocorreu um erro ao enviar. Por favor, tente novamente.",
        icon: "error",
        confirmButtonText: "Fechar",
        confirmButtonColor: "#fd7597",
      });
      setStatus('error');
      console.error('Erro ao enviar dados para o Google Forms:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    status,
    submit,
  };
};