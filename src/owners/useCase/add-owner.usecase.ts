import { HttpException, HttpStatus } from '@nestjs/common';
import { IPasswordHash } from 'src/utils/passwordHash/IPasswordHash.interface';
import { IOwner } from '../entity/interface/IOwner.interface';
import { Owner } from '../entity/owner.entity';
import { IOwnerRepository } from '../repositories/interface/IOwner.repository';
import { IUserRepository } from 'src/users/repositories/UserRepository.interface';
import { User } from 'src/users/entity/user.entity';
import { Address } from 'src/address/entity/address.entity';
import { IAddressRepository } from 'src/address/repositories/IAddress.repository.interface';

export class AddNewOwnerUseCase {
  constructor(
    private userRepository: IUserRepository,
    private ownerRepository: IOwnerRepository,
    private addressRepository: IAddressRepository,
    private passwordHash: IPasswordHash,
  ) {}

  async execute(data: IOwner) {
    const userCreated = User.create(data);
    const userAlreadyExists = await this.userRepository.findByEmail(
      userCreated.email,
    );
    if (userAlreadyExists) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const ownerCreated = Owner.create(data);
    const addresses: Address[] = [];
    if (data.contact.length >= 1) {
      for (let i = 0; i < data.contact.length; i++) {
        const address = Address.create({
          ...data.contact[i],
          user_id: userCreated.id,
        });
        addresses.push(address);
      }
      const addressesSavedInDB = await this.addressRepository.save(addresses);
      console.log(addressesSavedInDB);
      userCreated.contact = addresses;
    }
    const passwordHashed = await this.passwordHash.hash(userCreated.password);
    userCreated.password = passwordHashed;
    await this.userRepository.save(userCreated);
    const ownerSavedInDB = await this.ownerRepository.save(ownerCreated);
    return ownerSavedInDB;
  }
}
