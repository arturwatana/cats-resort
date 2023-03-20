import { HttpException, HttpStatus } from '@nestjs/common';
import { IPasswordHash } from 'src/utils/passwordHash/IPasswordHash.interface';
import { IOwner } from '../entity/interface/IOwner.interface';
import { Owner } from '../entity/owner.entity';
import { IOwnerRepository } from '../repositories/interface/IOwner.repository';

export class AddNewOwnerUseCase {
  constructor(
    private ownerRepository: IOwnerRepository,
    private passwordHash: IPasswordHash,
  ) {}

  async execute(data: IOwner) {
    const ownerCreated = Owner.create(data);
    const ownerAlreadyExists = await this.ownerRepository.findByEmail(
      ownerCreated.email,
    );
    if (ownerAlreadyExists) {
      throw new HttpException('Owner already exists', HttpStatus.BAD_REQUEST);
    }
    const passwordHashed = await this.passwordHash.hash(ownerCreated.password);
    ownerCreated.password = passwordHashed;
    const ownerSavedInDB = await this.ownerRepository.save(ownerCreated);
    return ownerSavedInDB;
  }
}
