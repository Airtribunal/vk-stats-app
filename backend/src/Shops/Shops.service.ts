import { Injectable } from '@nestjs/common';
import { CacheService } from 'src/Cache/Cache.service';
import { GoogleSheetsService } from 'src/GoogleSheets/GoogleSheets.service';
import config from '../../env';

@Injectable()
export class ShopsService {
  constructor(
    private readonly googleSheetsService: GoogleSheetsService,
    private readonly cacheService: CacheService,
  ) {}

  async getShops() {
    const cache = this.cacheService.get('googlesheet-shops');
    if (cache) {
      console.log('cache');
      return cache;
    }

    const spreadsheet = await this.googleSheetsService.getSpreadsheet(
      config.SPREADSHEET_ID,
    );
    await spreadsheet.loadInfo();

    const shopsSheet = spreadsheet.sheetsById[0];
    const result = await shopsSheet.getRows();
    const shops = result.map((shop) => ({
      name: shop['Название магазина'],
      address: shop['Адрес'],
    }));

    this.cacheService.set('googlesheet-shops', shops);
    return shops;
  }
}
