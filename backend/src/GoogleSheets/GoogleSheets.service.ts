import { Injectable } from '@nestjs/common';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import config from '../../env';

@Injectable()
export class GoogleSheetsService {
  cache = {};

  getSpreadsheet = async (spreadsheetId) => {
    if (this.cache[spreadsheetId]) {
      return this.cache[spreadsheetId];
    }
    const spreadsheet = new GoogleSpreadsheet(spreadsheetId);
    await spreadsheet.useServiceAccountAuth({
      client_email: config.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: config.GOOGLE_PRIVATE_KEY,
    });
    this.cache[spreadsheetId] = spreadsheet;
    return spreadsheet;
  };
}
