import { IOwner } from '../entity/interface/IOwner.interface';
import { Owner } from '../entity/owner.entity';
import { IOwnerRepository } from '../repositories/interface/IOwner.repository';

export class AddNewOwnerUseCase {
  constructor(private ownerRepository: IOwnerRepository) {}

  async execute(data: IOwner) {
    const ownerCreated = Owner.create(data);
    const ownerSavedInDB = await this.ownerRepository.save(ownerCreated);
    return ownerSavedInDB;
  }
}
