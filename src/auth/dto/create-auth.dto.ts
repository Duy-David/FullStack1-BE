import { IsNotEmpty, isNotEmpty, IsOptional } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: ' email không được để trống' })
  email: string;
  @IsNotEmpty({ message: ' pass word không được để trống' })
  password: string;
  @IsOptional()
  name:string
}
