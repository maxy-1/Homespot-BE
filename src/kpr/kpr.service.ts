import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateKprDto } from './dto/create-kpr.dto';
import { UpdateKprDto } from './dto/update-kpr.dto';
import { KPR } from '.prisma/client';

@Injectable()
export class KprService {
  constructor(private prisma: PrismaService) {}

  async create(createKprDto: CreateKprDto): Promise<KPR> {
    return this.prisma.kPR.create({
      data: createKprDto,
    });
  }

  async findAll(): Promise<KPR[]> {
    return this.prisma.kPR.findMany();
  }

  async findOne(id: string): Promise<KPR> {
    const kpr = await this.prisma.kPR.findUnique({
      where: { id },
    });
    if (!kpr) {
      throw new NotFoundException(`KPR with ID ${id} not found`);
    }
    return kpr;
  }

  async update(id: string, updateKprDto: UpdateKprDto): Promise<KPR> {
    const existingKpr = await this.findOne(id);
    return this.prisma.kPR.update({
      where: { id },
      data: updateKprDto,
    });
  }

  async remove(id: string): Promise<KPR> {
    const existingKpr = await this.findOne(id);
    return this.prisma.kPR.delete({
      where: { id },
    });
  }
}