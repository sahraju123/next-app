import { google } from "googleapis";

export const getGoogleSheetsClient = async () => {
    try {
      const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS);
      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
      return auth;
    } catch (error) {
      console.error("Error parsing GOOGLE_SHEETS_CREDENTIALS:", error);
      throw error;
    }
  };

export const fetchSheetData = async (sheetName) => {
  const sheets = await getGoogleSheetsClient();
  const sheetId = process.env.SHEET_ID;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: sheetName,
  });

  return response.data.values;
};

export const appendSheetData = async (sheetName, data) => {
  const sheets = await getGoogleSheetsClient();
  const sheetId = process.env.SHEET_ID;

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: sheetName,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [data],
    },
  });
};
