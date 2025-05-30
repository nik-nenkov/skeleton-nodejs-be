import { ApiProperty } from '@nestjs/swagger';

export class ListingResponseDto {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'Cozy Apartment' })
  title!: string;

  @ApiProperty({ example: 'A nice place to stay in the city center.' })
  description!: string;

  @ApiProperty({ example: 100 })
  price?: number;

  @ApiProperty({ example: 1, description: 'ID of the user who created the listing' })
  userId!: number;
}