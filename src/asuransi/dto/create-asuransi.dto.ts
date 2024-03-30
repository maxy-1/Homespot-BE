import { IsNotEmpty, IsString, IsOptional, IsDate, IsDecimal } from 'class-validator';

export class CreateAsuransiDto {
  @IsString()
  @IsNotEmpty()
  nomor_polis: string;

  @IsString()
  @IsNotEmpty()
  jenis_asuransi: string;

  @IsDecimal()
  @IsNotEmpty()
  premi: number;

  @IsDate()
  @IsOptional()
  masa_pertanggungan?: Date;

  @IsString()
  @IsOptional()
  manfaat_asuransi?: string;

  @IsDate()
  @IsOptional()
  tanggal_efektif?: Date;

  @IsString()
  @IsOptional()
  nomor_klaim?: string;
}
