import { Cat } from 'src/cats/entity/cat.entity';
import { ICat } from '../catsRepository.memory';

export interface ICatsRepository {
  save(cat: ICat): Promise<Cat>;
  showAll(): Promise<ICat[]>;
  findById(id: string): Promise<Cat | undefined>;
}
