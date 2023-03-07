import { Owner } from 'src/owners/entity/owner.entity';

export interface IOwnerRepository {
  save(data: Owner): Promise<Owner>;
}
