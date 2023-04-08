import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { OwnersController } from './owners/owners.controller';
import { ICatsRepository } from './cats/Repositories/interface/ICatsRepository';
import { CatsMemoryRepository } from './cats/Repositories/catsRepository.memory';
import { IOwnerRepository } from './owners/repositories/interface/IOwner.repository';
import { OwnersMemoryRepository } from './owners/repositories/owners.memory.repository';
import { IPasswordHash } from './utils/passwordHash/IPasswordHash.interface';
import { PasswordBCryptHash } from './utils/passwordHash/implementations/bcrypt.implementation';
import { UsersController } from './users/users.controller';
import { IUserRepository } from './users/repositories/UserRepository.interface';
import { UserMemoryRepository } from './users/repositories/implementations/userRepository.memory';
import { addressController } from './address/address.controller';
import { IAddressRepository } from './address/repositories/IAddress.repository.interface';
import { AddressMemoryRepository } from './address/repositories/implementations/address.repository.memory';
@Module({
  imports: [],
  controllers: [
    AppController,
    CatsController,
    OwnersController,
    UsersController,
    addressController,
  ],
  providers: [
    AppService,
    {
      provide: ICatsRepository,
      useClass: CatsMemoryRepository,
    },
    {
      provide: IOwnerRepository,
      useClass: OwnersMemoryRepository,
    },
    {
      provide: IPasswordHash,
      useClass: PasswordBCryptHash,
    },
    {
      provide: IUserRepository,
      useClass: UserMemoryRepository,
    },
    {
      provide: IAddressRepository,
      useClass: AddressMemoryRepository,
    },
  ],
})
export class AppModule {}
