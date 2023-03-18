import { Cat } from '../entity/cat.entity';
import { ICatsRepository } from './interface/ICatsRepository';



export class CatsMemoryRepository implements ICatsRepository {
  items: Cat[] = [];
  async showAll(): Promise<Cat[]> {
    return this.items;
  }

  async save(cat: Cat): Promise<Cat> {
    this.items.push(cat);
    return cat;
  }
  async findById(id: string): Promise<Cat | undefined> {
    const findedCat = this.items.find((cat) => cat.id === id);
    return findedCat;
  }
}
