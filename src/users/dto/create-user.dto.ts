import { IsEmail, IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 30)
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUUID()
  asuransiId?: string;

  @IsUUID()
  kprId?: string;
}
