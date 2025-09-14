import { FieldNames } from '@/app/models/fieldNames';
import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// Event
const EVENT_CLOSED = process.env.EVENT_CLOSED;

// Google sheets
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const RANGE = 'B2:B';

// Google Form
const GOOGLE_FORMS: string | undefined = process.env.GOOGLE_FORMS_URL;
const FIELD_NAMES: FieldNames = {
  name: "entry.1609016607",
  numberTel: "entry.186707024",
  guest: "entry.1891711655",
  message: "entry.1816133413",
};

// Date Limit
const deadlineDate = new Date('2025-10-02T23:59:59');

export async function POST(request: Request) {
  try {
    // Event Closed
    if (EVENT_CLOSED === 'true') {
      return NextResponse.json({ message: "Esse evento aconteceu dia 04/10/2025." }, { status: 410 });
    }

    // Validate Date
    if (new Date() > deadlineDate) {
      return NextResponse.json({ message: "As confirmações foram encerradas." }, { status: 410 });
    }

    const data = await request.json();
    const normalizedName = data.name.trim().toLowerCase();

    // Validate .ENV
    if (!SPREADSHEET_ID || !process.env.KEY_API) {
      return NextResponse.json({ message: "Variáveis de ambiente do Google não configuradas." }, { status: 500 });
    }

    // Auth & read Spreadsheet
    const credentials = JSON.parse(process.env.KEY_API as string);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const responseSheets = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const confirmedNames = responseSheets.data.values?.flat().map(name => String(name).toLowerCase()) || [];

    // Validate Name
    if (confirmedNames.includes(normalizedName)) {
      return NextResponse.json({ message: "Você já confirmou sua presença anteriormente." }, { status: 409 });
    }

    // Submit Google Form
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
      return NextResponse.json({ message: "Presença confirmada com sucesso!" }, { status: 200 });
    } else {
      console.error('Falha na submissão ao Google Forms.', response.status, response.statusText);
      return NextResponse.json({ message: "Falha na submissão ao Google Forms." }, { status: 400 });
    }
  } catch(error) {
    console.error('Erro no servidor:', error);
    return NextResponse.json({ message: "Erro interno no servidor." }, { status: 500 });
  }
}