import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsOptional, IsInt, Min, Max } from 'class-validator';

export class UserRequestDto {
  @ApiProperty({ example: 'John Doe' })
  @IsNotEmpty()
  @IsString()
  name!: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 30, required: false, minimum: 16, maximum: 64 })
  @IsOptional()
  @IsInt()
  @Min(16)
  @Max(64)
  age?: number;
}
