import { Address } from 'src/address/entity/address.entity';
import { IAddressRepository } from '../IAddress.repository.interface';

export class AddressMemoryRepository implements IAddressRepository {
  addresses: Address[] = [];

  async save(addresses: Address[]): Promise<Address[]> {
    let addressCreated: Address[] = [];
    for (let i = 0; i < addresses.length; i++) {
      this.addresses.push(addresses[i]);
      addressCreated.push(addresses[i]);
    }
    return addressCreated;
  }
  async getaddressByUserID(userID: string): Promise<Address[]> {
    const useraddress = this.addresses.filter(
      (address) => address.user_id === userID,
    );
    return useraddress;
  }
  async getFullAddresses(): Promise<Address[]> {
    return this.addresses;
  }
}
