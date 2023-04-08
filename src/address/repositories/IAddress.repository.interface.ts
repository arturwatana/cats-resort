import { Address } from '../entity/address.entity';

export abstract class IAddressRepository {
  abstract save(addresses: Address[]): Promise<Address[]>;
  abstract getaddressByUserID(userID: string): Promise<Address[]>;
  abstract getFullAddresses(): Promise<Address[]>;
}
