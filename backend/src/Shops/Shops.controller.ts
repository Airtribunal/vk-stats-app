import { Controller, Get } from '@nestjs/common';
import { ShopsService } from './Shops.service';

@Controller()
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}
  @Get('/shops')
  async getAll() {
    const shops = await this.shopsService.getShops();
    return shops;
  }
}
