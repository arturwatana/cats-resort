import { HttpException, HttpStatus } from '@nestjs/common';
import { IOwnerRepository } from 'src/owners/repositories/interface/IOwner.repository';
import { Cat } from '../entity/cat.entity';
import { ICat } from '../entity/interface/ICat.interface';
import { ICatsRepository } from '../Repositories/interface/ICatsRepository';

export class AddNewCatUseCase {
  constructor(
    private catsRepository: ICatsRepository,
    private ownersRepository: IOwnerRepository,
  ) {}
  async execute(data: ICat) {
    const cat = Cat.create(data);
    const catOwner = await this.ownersRepository.findById(cat.ownerId);
    if (!catOwner) {
      throw new HttpException('Could not find owner', HttpStatus.BAD_REQUEST);
    }
    this.catsRepository.save(cat);
    return cat;
  }
}
