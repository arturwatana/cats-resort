import { Cat } from '../entity/cat.entity';
import { ICat } from '../Repositories/catsRepository.memory';
import { ICatsRepository } from '../Repositories/interface/ICatsRepository';

export class AddNewCatUseCase {
  constructor(private catsRepository: ICatsRepository) {}
  async execute(data: ICat) {
    const cat = Cat.create(data);

    this.catsRepository.save(cat);
    return cat;
  }
}
