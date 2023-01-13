import { Module } from '@nestjs/common';
import { CacheService } from './Cache.service';

@Module({
  imports: [],
  exports: [CacheService],
  providers: [CacheService],
})
export class CacheModule {}
