import { google } from 'googleapis';
import keys from './keys';

export async function fetchData<T extends object>(
  spreadsheetId: string,
  range: string,
): Promise<T[]> {
  const auth = new google.auth.JWT({
    email: keys.client_email,
    key: keys.private_key!.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const values = response.data.values ?? [];

  if (!values.length) {
    return [];
  }

  const headerRow = values[0];
  const data = values.slice(1);

  const objectsArray = data.map(row => {
    const obj: { [key: string]: any } = {};
    row.forEach((value, index) => {
      obj[headerRow[index]] = value;
    });
    return obj;
  });

  return objectsArray as T[];
}
