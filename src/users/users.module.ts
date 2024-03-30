// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsersController],
  providers: [UserService],
  imports: [PrismaModule],
  exports: [UserService],
})
export class UsersModule {}