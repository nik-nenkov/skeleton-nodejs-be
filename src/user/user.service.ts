import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './orm/user.entity';
import { UserResponseDto } from './api/user-response.dto';
import { UserRequestDto } from './api/user-request.dto'; // Import the request DTO
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { toUserResponseDto } from './user.mapping';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.userRepo.find();
    return users.map(user => toUserResponseDto(user));
  }

  async create(userData: UserRequestDto): Promise<UserResponseDto> {
    const user = this.userRepo.create(userData);
    const savedUser = await this.userRepo.save(user);
    return toUserResponseDto(savedUser);
  }

  async findOne(id: number): Promise<UserResponseDto> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return toUserResponseDto(user);
  }

  async update(id: number, userData: UserRequestDto): Promise<UserResponseDto> {
    await this.userRepo.update(id, userData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    const result = await this.userRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}