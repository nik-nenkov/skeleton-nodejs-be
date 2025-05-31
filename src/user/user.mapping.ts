import { User } from './orm/user.entity';
import { UserResponseDto } from './api/user-response.dto';

export function toUserResponseDto(user: User): UserResponseDto {
  const { id, name, email, age } = user;
  return { id, name, email, age };
}