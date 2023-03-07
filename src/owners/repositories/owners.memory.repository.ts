import { Owner } from '../entity/owner.entity';
import { IOwnerRepository } from './interface/IOwner.repository';

export class OwnersMemoryRepository implements IOwnerRepository {
  items: Owner[] = [];

  async save(data: Owner): Promise<Owner> {
    this.items.push(data);
    return data;
  }
}
