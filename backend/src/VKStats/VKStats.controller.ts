import { Controller, Get } from '@nestjs/common';
import { VKStatsService } from './VKStats.service';

@Controller()
export class VKStatsController {
  constructor(private readonly vkStatsService: VKStatsService) {}
  @Get('/vk-stats')
  async getAll() {
    return await this.vkStatsService.getStats();
  }
}
