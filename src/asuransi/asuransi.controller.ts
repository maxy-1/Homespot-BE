import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AsuransiService } from './asuransi.service';
import { CreateAsuransiDto } from './dto/create-asuransi.dto';
import { UpdateAsuransiDto } from './dto/update-asuransi.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Role } from '@prisma/client';

@Controller('asuransi')
export class AsuransiController {
  constructor(private readonly asuransiService: AsuransiService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createAsuransiDto: CreateAsuransiDto) {
    return this.asuransiService.create(createAsuransiDto);
  }

  @Get()
  findAll() {
    return this.asuransiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asuransiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsuransiDto: UpdateAsuransiDto) {
    return this.asuransiService.update(id, updateAsuransiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asuransiService.remove(id);
  }
}
