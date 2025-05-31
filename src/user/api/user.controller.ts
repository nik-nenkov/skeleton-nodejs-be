import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { UserService } from '../user.service';
import { UserRequestDto } from './user-request.dto';
import { UserResponseDto } from './user-response.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'List of users', type: [UserResponseDto] })
  async getAll(): Promise<UserResponseDto[]> {
    return this.userService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User created', type: UserResponseDto })
  @ApiBody({ type: UserRequestDto })
  async create(@Body() body: UserRequestDto): Promise<UserResponseDto> {
    return this.userService.create(body);
  }
}
