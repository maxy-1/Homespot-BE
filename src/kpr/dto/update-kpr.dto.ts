import { PartialType } from '@nestjs/swagger';
import { CreateKprDto } from './create-kpr.dto';

export class UpdateKprDto extends PartialType(CreateKprDto) {}
