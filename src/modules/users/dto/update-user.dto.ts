import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsMongoId({ message: 'id không hợp lệ' })
  @IsNotEmpty({ message: 'id không được để trống' })
  _id: string;
  @IsOptional()
  name: string;
  @IsOptional()
  phone: string;
  @IsOptional()
  address: string;
  @IsOptional()
  image: string;
}
