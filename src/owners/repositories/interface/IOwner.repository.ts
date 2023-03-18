import { Owner } from 'src/owners/entity/owner.entity';

export abstract class IOwnerRepository {
  abstract save(data: Owner): Promise<Owner>;
}
