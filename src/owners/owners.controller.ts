import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { IPasswordHash } from 'src/utils/passwordHash/IPasswordHash.interface';
import { CreateOwnerDTO } from './dtos/create-owner.dto';
import { IOwnerRepository } from './repositories/interface/IOwner.repository';
import { OwnersMemoryRepository } from './repositories/owners.memory.repository';
import { AddNewOwnerUseCase } from './useCase/add-owner.usecase';

@Injectable()
@Controller('owners')
export class OwnersController {
  constructor(
    private ownerRepository: IOwnerRepository,
    private passwordHash: IPasswordHash,
  ) {}
  @Post()
  async createOwner(@Body() body: CreateOwnerDTO) {
    const addOwnerUseCase = new AddNewOwnerUseCase(
      this.ownerRepository,
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
