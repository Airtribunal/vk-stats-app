import { Module } from '@nestjs/common';
import { CacheModule } from 'src/Cache/Cache.module';
import { GoogleSheetsModule } from 'src/GoogleSheets/GoogleSheets.module';
import { ShopsController } from './Shops.controller';
import { ShopsService } from './Shops.service';

@Module({
  imports: [GoogleSheetsModule, CacheModule],
  controllers: [ShopsController],
  providers: [ShopsService],
})
export class ShopsModule {}
