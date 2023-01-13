import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ShopsModule } from './src/Shops/Shops.module';
import { VKStatsModule } from './src/VKStats/VKStats.module';

@Module({
  imports: [ShopsModule, VKStatsModule],
})
export class AppModule {}

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, '0.0.0.0', () =>
    console.info('Server listening on http://localhost:3000'),
  );
}
bootstrap();
