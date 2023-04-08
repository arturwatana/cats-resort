import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { IPasswordHash } from 'src/utils/passwordHash/IPasswordHash.interface';
import { CreateOwnerDTO } from './dtos/create-owner.dto';
import { IOwnerRepository } from './repositories/interface/IOwner.repository';
import { AddNewOwnerUseCase } from './useCase/add-owner.usecase';
import { IUserRepository } from 'src/users/repositories/UserRepository.interface';
import { IAddressRepository } from 'src/address/repositories/IAddress.repository.interface';

@Injectable()
@Controller('owners')
export class OwnersController {
  constructor(
    private userRepository: IUserRepository,
    private ownerRepository: IOwnerRepository,
    private addressRepository: IAddressRepository,
    private passwordHash: IPasswordHash,
  ) {}
  @Post()
  async createOwner(@Body() body: CreateOwnerDTO) {
    const addOwnerUseCase = new AddNewOwnerUseCase(
      this.userRepository,
      this.ownerRepository,
      this.addressRepository,
      this.passwordHash,
    );
    const savedOwnerInDB = await addOwnerUseCase.execute(body);
    return savedOwnerInDB;
  }

  @Get()
  async getAllOwners() {
    return await this.ownerRepository.findAllOwners();
  }
}
