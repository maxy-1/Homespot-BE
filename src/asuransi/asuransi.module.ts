import { Module } from '@nestjs/common';
import { AsuransiService } from './asuransi.service';
import { AsuransiController } from './asuransi.controller';

@Module({
  controllers: [AsuransiController],
  providers: [AsuransiService],
})
export class AsuransiModule {}
