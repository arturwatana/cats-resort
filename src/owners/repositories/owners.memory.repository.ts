import { Owner } from '../entity/owner.entity';
import { IOwnerRepository } from './interface/IOwner.repository';

export class OwnersMemoryRepository implements IOwnerRepository {
  items: Owner[] = [];

  async save(data: Owner): Promise<Owner> {
    this.items.push(data);
    return data;
  }
  async findAllOwners(): Promise<Owner[]> {
    return this.items;
  }
  async findById(id: string): Promise<Owner | null> {
    const findedOwner = this.items.find((owner) => owner.id === id);
    return findedOwner || null;
  }
  async findByEmail(email: string): Promise<Owner | null> {
    const findedOwner = this.items.find((owner) => owner.email === email);
    return findedOwner || null;
  }
}
