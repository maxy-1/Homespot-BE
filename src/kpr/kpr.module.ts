import { Module } from '@nestjs/common';
import { KprService } from './kpr.service';
import { KprController } from './kpr.controller';

@Module({
  controllers: [KprController],
  providers: [KprService],
})
export class KprModule {}
