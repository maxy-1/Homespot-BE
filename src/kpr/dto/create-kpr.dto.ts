import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateKprDto {
  @IsString()
  @IsNotEmpty()
  nomor_kpr: string;

  @IsNumber()
  @IsNotEmpty()
  jumlah_pinjaman: number;

  @IsNumber()
  @IsNotEmpty()
  suku_bunga: number;

  @IsNumber()
  @IsNotEmpty()
  jangka_waktu: number;

  @IsNumber()
  @IsNotEmpty()
  angsuran: number;

  @IsNumber()
  @IsNotEmpty()
  nilai_jaminan: number;

  @IsString()
  @IsOptional()
  tanggal_penyelesaian?: string;
}
