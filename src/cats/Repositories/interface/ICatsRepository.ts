import { Cat } from 'src/cats/entity/cat.entity';
import { ICat } from 'src/cats/entity/interface/ICat.interface';

export abstract class ICatsRepository {
  abstract save(cat: ICat): Promise<Cat>;
  abstract showAll(): Promise<Cat[]>;
  abstract findById(id: string): Promise<Cat | undefined>;
}
