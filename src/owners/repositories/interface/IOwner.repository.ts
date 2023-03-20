import { Owner } from 'src/owners/entity/owner.entity';

export abstract class IOwnerRepository {
  abstract save(data: Owner): Promise<Owner>;
  abstract findAllOwners(): Promise<Owner[]>;
  abstract findById(id: string): Promise<Owner | null>;
  abstract findByEmail(email: string): Promise<Owner | null>;
}
