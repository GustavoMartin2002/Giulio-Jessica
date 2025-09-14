import { useState } from 'react';
import { FormInput } from '../models/formInput';
import { UseFormReset } from 'react-hook-form';
import Swal from 'sweetalert2';

type SubmissionStatus = 'success' | 'error' | null;

export const useGoogleForms = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<SubmissionStatus>(null);
  
  const submit = async (data: FormInput, resetForm:UseFormReset<FormInput>) => {
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseBody = await response.json();

      if (response.status === 200) {
        Swal.fire({
          title: "Formulário enviado!",
          color: "#000",
          text: responseBody.message,
          icon: "success",
          confirmButtonText: "Fechar",
          confirmButtonColor: "#fd7597",
        });
        setStatus('success');
        resetForm();
      } else if (response.status === 409) {
        Swal.fire({
          title: "Atenção!",
          color: "#000",
          text: responseBody.message,
          icon: "warning",
          confirmButtonText: "Fechar",
          confirmButtonColor: "#fd7597",
        });
        setStatus('error');
      } else if (response.status === 410) {
        Swal.fire({
          title: "Atenção!",
          color: "#000",
          text: responseBody.message,
          icon: "info",
          confirmButtonText: "Fechar",
          confirmButtonColor: "#fd7597",
        });
        setStatus('error');
      } else {
        Swal.fire({
          title: "Erro!",
          color: "#000",
          text: "Ocorreu um erro ao enviar.",
          icon: "error",
          confirmButtonText: "Fechar",
          confirmButtonColor: "#fd7597",
        });
        setStatus('error');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      Swal.fire({
        title: "Erro!",
        color: "#000",
        text: "Ocorreu um erro de rede. Verifique sua conexão.",
        icon: "error",
        confirmButtonText: "Fechar",
        confirmButtonColor: "#fd7597",
      });
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, status, submit };
};