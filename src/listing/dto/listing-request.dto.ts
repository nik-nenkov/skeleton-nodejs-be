import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ListingRequestDto {
  // This DTO is used for creating or updating listings
  // It ensures that the required fields are present and valid

  @ApiProperty({ example: 'Cozy Apartment' })
  @IsNotEmpty()
  @IsString()
  title!: string;

  @ApiProperty({ example: 'A nice place to stay in the city center.' })
  @IsNotEmpty()
  @IsString()
  description!: string;

  @ApiProperty({ example: 100, required: false })
  @IsNumber()
  price?: number;

  @ApiProperty({ example: 1, description: 'ID of the user who creates the listing' })
  @IsNumber()
  userId!: number;
}
