import { Body, Controller, Post } from '@nestjs/common';
import { CreateOwnerDTO } from './dtos/create-owner.dto';
import { OwnersMemoryRepository } from './repositories/owners.memory.repository';
import { AddNewOwnerUseCase } from './useCase/register-owner.usecase';

const ownerRepository = new OwnersMemoryRepository();

@Controller('owners')
export class OwnersController {
  @Post()
  async createOwner(@Body() body: CreateOwnerDTO) {
    const addOwnerUseCase = new AddNewOwnerUseCase(ownerRepository);
    const savedOwnerInDB = await addOwnerUseCase.execute(body);
    return savedOwnerInDB;
  }
}
