import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAsuransiDto } from './dto/create-asuransi.dto';
import { UpdateAsuransiDto } from './dto/update-asuransi.dto';
import { Asuransi } from '.prisma/client';

@Injectable()
export class AsuransiService {
  constructor(private prisma: PrismaService) {}

  async create(createAsuransiDto: CreateAsuransiDto): Promise<Asuransi> {
    return this.prisma.asuransi.create({
      data: createAsuransiDto,
    });
  }

  async findAll(): Promise<Asuransi[]> {
    return this.prisma.asuransi.findMany();
  }

  async findOne(id: string): Promise<Asuransi> {
    const asuransi = await this.prisma.asuransi.findUnique({
      where: { id },
    });
    if (!asuransi) {
      throw new NotFoundException(`Asuransi with ID ${id} not found`);
    }
    return asuransi;
  }

  async update(id: string, updateAsuransiDto: UpdateAsuransiDto): Promise<Asuransi> {
    const existingAsuransi = await this.findOne(id);
    return this.prisma.asuransi.update({
      where: { id },
      data: updateAsuransiDto,
    });
  }

  async remove(id: string): Promise<Asuransi> {
    const existingAsuransi = await this.findOne(id);
    return this.prisma.asuransi.delete({
      where: { id },
    });
  }
}
