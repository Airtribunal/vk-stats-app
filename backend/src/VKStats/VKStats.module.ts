import { Module } from '@nestjs/common';
import { CacheModule } from 'src/Cache/Cache.module';
import { GoogleSheetsModule } from 'src/GoogleSheets/GoogleSheets.module';
import { VKStatsController } from './VKStats.controller';
import { VKStatsService } from './VKStats.service';

@Module({
  imports: [GoogleSheetsModule, CacheModule],
  controllers: [VKStatsController],
  providers: [VKStatsService],
})
export class VKStatsModule {}
