import { Controller, Get, Injectable } from '@nestjs/common';
import { IUserRepository } from './repositories/UserRepository.interface';

@Injectable()
@Controller('users')
export class UsersController {
  constructor(private userRepository: IUserRepository) {}

  @Get()
  async getAllUsers() {
    return await this.userRepository.getAllUsers();
  }
}
