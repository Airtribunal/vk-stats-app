import { Module } from '@nestjs/common';
import { GoogleSheetsService } from './GoogleSheets.service';

@Module({
  imports: [],
  exports: [GoogleSheetsService],
  providers: [GoogleSheetsService],
})
export class GoogleSheetsModule {}
