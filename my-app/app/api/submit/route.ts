import { NextResponse } from 'next/server';

const GOOGLE_FORMS: string | undefined = process.env.GOOGLE_FORMS_URL;
const FIELD_NAMES = {
  name: "entry.1609016607",
  numberTel: "entry.186707024",
  guest: "entry.1891711655",
  message: "entry.1816133413",
};

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const formData = new URLSearchParams();
    formData.append(FIELD_NAMES.name, data.name);
    formData.append(FIELD_NAMES.numberTel, data.numberTel);
    formData.append(FIELD_NAMES.guest, data.guest);
    formData.append(FIELD_NAMES.message, data.message);

    if (!GOOGLE_FORMS) {
      return NextResponse.json({ message: "Google Forms URL não configurada." }, { status: 500 });
    }

    const response = await fetch(GOOGLE_FORMS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });

    if (response.status === 200) {
      return NextResponse.json({ message: "Dados enviados com sucesso!" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Falha na submissão ao Google Forms." }, { status: 400 });
    }

  } catch {
    return NextResponse.json({ message: "Erro interno no servidor." }, { status: 500 });
  }
}