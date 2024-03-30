import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KprService } from './kpr.service';
import { CreateKprDto } from './dto/create-kpr.dto';
import { UpdateKprDto } from './dto/update-kpr.dto';

@Controller('kpr')
export class KprController {
  constructor(private readonly kprService: KprService) {}

  @Post()
  create(@Body() createKprDto: CreateKprDto) {
    return this.kprService.create(createKprDto);
  }

  @Get()
  findAll() {
    return this.kprService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kprService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKprDto: UpdateKprDto) {
    return this.kprService.update(id, updateKprDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kprService.remove(id);
  }
}
