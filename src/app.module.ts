import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AsuransiModule } from './asuransi/asuransi.module';
import { KprModule } from './kpr/kpr.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, AsuransiModule, KprModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
