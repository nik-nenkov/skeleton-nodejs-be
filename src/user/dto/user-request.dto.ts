import { ApiProperty } from '@nestjs/swagger';

export class UserRequestDto {
  @ApiProperty({ example: 'John Doe' })
  name!: string;

  @ApiProperty({ example: 'john@example.com' })
  email!: string;

  @ApiProperty({ example: 30, required: false })
  age?: number;
}
