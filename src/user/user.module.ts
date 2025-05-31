import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './orm/user.entity';
import { UserService } from './user.service';
import { UserController } from './api/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
// This module imports the User entity, registers it with TypeORM, and provides the UserService and UserController.
// The UserService handles business logic, while the UserController manages HTTP requests related to users.
// This structure allows for a clean separation of concerns, making the codebase easier to maintain and extend.
// The UserModule is a self-contained module that encapsulates all user-related functionality, including data access and HTTP endpoints.        